(function () {
  if (!('IntersectionObserver' in window)) { document.documentElement.classList.remove('js'); return; }
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── the approach ────────────────────────────────────────
  // The device is exactly one viewport across, so the walk toward
  // it is a single scale from 0.36 to 1. Apparent size goes as
  // 1/distance, so stepping toward the screen at a steady pace
  // gives the acceleration for free: no easing curve invented.
  var hero  = document.getElementById('hero');
  var stage = document.querySelector('.site-hero');
  var head  = document.getElementById('head');
  var root  = document.documentElement;
  var smooth = null;                 // the Lenis instance, once it exists

  if (reduce) root.classList.add('rm');

  // Reveal-on-enter for everything below the hero. Two rules keep
  // this from ever stranding the page invisible: the class that
  // hides them is added right here, and the check rides the same
  // scroll pass as the hero, so there is one mechanism, not two.
  root.classList.add('reveal');
  var pending = [].slice.call(document.querySelectorAll('[data-r]'));
  pending.forEach(function (el, i) { el.style.transitionDelay = (i % 3) * 60 + 'ms'; });

  function reveal() {
    if (!pending.length) return;
    var edge = innerHeight * 0.92;
    pending = pending.filter(function (el) {
      if (el.getBoundingClientRect().top > edge) return true;
      el.classList.add('in');
      return false;
    });
  }

  // The header is fixed, so the first thing on an inner page has to
  // clear it by hand. Its height stopped being a constant once the
  // language switcher joined the row: it wraps to two lines on a
  // narrow phone, and where it wraps moves with the language, because
  // "Empezar un proyecto" is not the width of "Start a project".
  // Measure it rather than guess, and let CSS do the arithmetic.
  function headHeight() {
    if (head) root.style.setProperty('--head-h', head.offsetHeight + 'px');
  }
  headHeight();
  addEventListener('resize', headHeight, { passive: true });
  addEventListener('load', headHeight);

  // how far through the page you are, on the hairline under the header
  var rail = document.querySelector('.scroll-rail i');
  function readout() {
    if (!rail) return;
    var span = document.documentElement.scrollHeight - innerHeight;
    var v = span > 0 ? scrollY / span : 0;
    rail.style.setProperty('--read', (v < 0 ? 0 : v > 1 ? 1 : v).toFixed(4));
  }

  var frameTasks = [reveal, readout];
  var queued = false;
  function runTasks() { frameTasks.forEach(function (f) { f(); }); }
  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; runTasks(); });
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  addEventListener('load', runTasks);
  reveal();

  if (!reduce && hero && stage) {
    // split the headline into masked words, keeping the <em>
    (function () {
      var n = 0;
      function walk(src, dest) {
        [].slice.call(src.childNodes).forEach(function (node) {
          if (node.nodeType === 3) {
            node.nodeValue.split(/(\s+)/).forEach(function (tok) {
              if (!tok) return;
              if (!tok.trim()) { dest.appendChild(document.createTextNode(' ')); return; }
              var w = document.createElement('span');
              w.className = 'w';
              w.style.setProperty('--i', n++);
              var inner = document.createElement('i');
              inner.textContent = tok;
              w.appendChild(inner);
              dest.appendChild(w);
            });
          } else if (node.nodeType === 1) {
            var clone = node.cloneNode(false);
            dest.appendChild(clone);
            walk(node, clone);
          }
        });
      }
      var h1 = stage.querySelector('h1');
      var frag = document.createDocumentFragment();
      walk(h1, frag);
      h1.textContent = '';
      h1.appendChild(frag);
    })();

    var HOLD = 0.92;                     // arrive here, then hold before the page moves
    var dark = null;
    var Z0, D0;

    // a phone-sized screen has to start nearer or the page inside it
    // is too small to read as a page at all
    function standBack() {
      Z0 = innerWidth < 760 ? 0.56 : 0.50;
      D0 = 1 / Z0;
    }
    standBack();

    function render() {
      var span = hero.offsetHeight - innerHeight;
      var p = span > 0 ? -hero.getBoundingClientRect().top / span : 0;
      p = p < 0 ? 0 : p > 1 ? 1 : p;

      var t = Math.min(1, p / HOLD);
      var z = 1 / (D0 + (1 - D0) * t);           // constant walking speed
      var arrive = (z - Z0) / (1 - Z0);          // 0 across the room, 1 at the glass

      var st = root.style;
      st.setProperty('--z', z.toFixed(5));
      st.setProperty('--radf', (1 - arrive).toFixed(4));
      st.setProperty('--room', (1 - Math.min(1, arrive * 1.3)).toFixed(3));
      st.setProperty('--chrome', Math.max(0, Math.min(1, (arrive - 0.68) / 0.32)).toFixed(3));
      st.setProperty('--depart', (p <= HOLD ? 0 : (p - HOLD) / (1 - HOLD)).toFixed(3));

      // don't leave invisible nav links in the tab order
      var hidden = arrive < 0.7;
      if (hidden !== dark) {
        dark = hidden;
        head.classList.toggle('away', hidden);   // no invisible links in the tab order
        stage.classList.toggle('near', !hidden); // no 10px tap targets across the room
      }
    }

    frameTasks.push(render);
    addEventListener('resize', standBack, { passive: true });
    render();                                    // place the room before first paint
    function lightUp() { stage.classList.add('lit'); }
    requestAnimationFrame(lightUp);
    addEventListener('load', lightUp);   // belt and braces if the frame is deferred
  }

  // ── the welcome ──────────────────────────────────────────
  // The visitor arrives in the room with the sign rather than the room
  // with the screen, because the first thing the site needs from them
  // is a language. Scrolling seats the letters into the plaster a
  // letter at a time, stamps the mark on last, and then brings the
  // three choices up in front of the sign while the camera takes a
  // step in. Resting on a choice previews it. Picking one blows the
  // wall light out, takes the welcome out of the page and leaves the
  // visitor at the first frame of the walk toward the screen, in the
  // language they chose.
  //
  // It asks rather than insists. Blocking the page until the question
  // is answered is an interstitial by any definition Google uses, and
  // this is the studio's home page: a visitor who keeps scrolling
  // carries on in the language the URL already names, and the header's
  // own switcher is there the whole way down. The welcome is the first
  // thing the studio says, not a toll on the way in.
  var gate = document.getElementById('gate');
  if (gate && !root.classList.contains('gate-off')) (function () {
    var here   = (root.lang || 'en').slice(0, 2).toLowerCase();
    var sign   = gate.querySelector('.gate-sign');
    var char   = gate.querySelector('.gate-char');
    var kicks  = [].slice.call(gate.querySelectorAll('.gate-kicker span'));
    var pills  = [].slice.call(gate.querySelectorAll('.gate-pill'));
    var picks  = gate.querySelector('.gate-pick ul');

    // one <i> per letter, so each can arrive on its own clock and
    // carry its own depth — the same construction the sign-off uses
    [].slice.call(gate.querySelectorAll('.gate-sign .wd')).forEach(function (w) {
      var frag = document.createDocumentFragment();
      w.textContent.split('').forEach(function (ch) {
        var i = document.createElement('i');
        i.textContent = ch;
        frag.appendChild(i);
      });
      w.textContent = '';
      w.appendChild(frag);
    });
    var glyphs = [].slice.call(gate.querySelectorAll('.gate-sign i'));
    var lis = pills.map(function (a) { return a.parentNode; });

    function greet(lang) {
      kicks.forEach(function (s) {
        s.classList.toggle('on', s.getAttribute('data-g') === lang);
      });
    }

    function leave(a) {
      var lang = a.getAttribute('data-lang');
      // Remembered for the visit, not for ever: the welcome is a door,
      // and a door you have already walked through should not be in
      // the way on the way back. It is also what tells the next page
      // to open past the gate, which is how a language that lives at
      // another URL still lands on the walk rather than on the sign.
      try { sessionStorage.setItem('ds-lang', lang); } catch (e) {}
      gate.classList.add('chosen');
      root.classList.add('gate-shut');
      release();

      if (lang !== here) {
        // the wall light covers the load, so the two pages are one move
        setTimeout(function () { location.href = a.getAttribute('href'); }, 430);
        return;
      }
      setTimeout(function () {
        root.classList.add('gate-off');            // out of the page
        toTop();
        runTasks();                                // place the room before it shows
        // the curtain clears itself, so all this has to do is stop
        // standing on the class that started it
        setTimeout(function () { root.classList.remove('gate-shut'); }, 2100);
      }, 470);
    }

    pills.forEach(function (a) {
      var li = a.parentNode;
      function on() {
        greet(a.getAttribute('data-lang'));
        picks.classList.add('hot'); li.classList.add('hot'); gate.classList.add('hot');
      }
      function off() {
        greet(here);
        picks.classList.remove('hot'); li.classList.remove('hot'); gate.classList.remove('hot');
      }
      a.addEventListener('pointerenter', on);
      a.addEventListener('pointerleave', off);
      a.addEventListener('focus', on);
      a.addEventListener('blur', off);
      a.addEventListener('click', function (ev) {
        // a modified click is a request for a second tab, and a second
        // tab should get the page, not this page's transition
        if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button) return;
        ev.preventDefault();
        leave(a);
      });
    });

    var LET_A = 0.00, LET_B = 0.44;   // the letters seat themselves
    var PICK_A = 0.50, PICK_B = 0.86; // the choices rise
    // How far the letters stand off the plaster, in the sign-off's
    // units: the extrusion is 44 stacked copies a step of
    // .0105em * dep apart, so this is about six pixels of acrylic at
    // the sign's full size. Cut letters on a wall, not a title card.
    var DEEP = 0.13;

    // Each letter runs its own clock: the starts are spread across the
    // first three fifths of the phase and each arrival takes the last
    // two, so the sign fills in left to right with the letters
    // overlapping rather than queueing.
    var n = glyphs.length;
    var g0 = [], g1 = [];
    glyphs.forEach(function (g, i) {
      var s = LET_A + (LET_B - LET_A) * 0.6 * (n > 1 ? i / (n - 1) : 0);
      g0.push(s);
      g1.push(s + (LET_B - LET_A) * 0.4);
    });

    function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
    function ramp(v, a, b) { return clamp01((v - a) / (b - a)); }
    function ease(v) { return v * v * (3 - 2 * v); }

    var held = null, set = null;

    function paint(p) {
      glyphs.forEach(function (g, i) {
        var t = ease(ramp(p, g0[i], g1[i]));
        g.style.setProperty('--li', t.toFixed(3));
        // The extrusion is a stack of forty-odd copies of the glyph, so
        // every distinct depth is a re-rasterisation. Quantising it to
        // twelve steps across the arrival buys the whole relief for a
        // dozen repaints per letter instead of one per frame.
        g.style.setProperty('--dep', (Math.round(t * 12) / 12 * DEEP).toFixed(4));
      });

      // the mark lands last, the way a registration mark is stamped on
      // after the name is set
      var c = ease(ramp(p, 0.34, 0.50));
      char.style.setProperty('--ci', c.toFixed(3));
      char.style.setProperty('--dep', (Math.round(c * 8) / 8 * DEEP).toFixed(4));

      // the choices come forward and the camera takes a step with them,
      // which is what makes the sign let go of the frame
      var pick = ease(ramp(p, PICK_A, PICK_B));
      gate.style.setProperty('--wallz', (1 + 0.055 * pick).toFixed(4));
      gate.style.setProperty('--signz', (1 - 0.06 * pick).toFixed(4));
      gate.style.setProperty('--lift', (10 * pick).toFixed(2));
      gate.style.setProperty('--gcue', (1 - ramp(p, PICK_A, PICK_A + 0.12)).toFixed(3));

      lis.forEach(function (li, i) {
        var t = ease(ramp(p, PICK_A + i * 0.06, PICK_A + i * 0.06 + 0.24));
        li.style.setProperty('--p', t.toFixed(3));
        // invisible links do not belong in the tab order, and half-risen
        // ones are not a tap target yet
        li.style.visibility = t > 0.04 ? 'visible' : 'hidden';
      });

      var lock = pick < 0.5;
      if (lock !== held) { held = lock; gate.classList.toggle('hold', lock); }
      var done = p > 0.80;
      if (done !== set) { set = done; gate.classList.toggle('ready', done); }
    }

    if (reduce) {
      // no journey, but still a door: everything is already at rest and
      // the only thing left to do is choose
      paint(1);
      sign.style.setProperty('--dep', '0.13');
      return;
    }

    // ── the scroll ──
    // Scroll position drives the composition, so the section's own
    // height is the timeline and the browser does the easing. One
    // screen of travel builds the whole thing.
    function gateRender() {
      if (root.classList.contains('gate-off')) return;
      var box = gate.getBoundingClientRect();
      if (box.bottom < -40) return;              // done with, and left up there
      var span = gate.offsetHeight - innerHeight;
      paint(clamp01(span > 0 ? -box.top / span : 0));
    }

    // Put the page at an exact offset and make it stay there. The
    // smooth-scroll library keeps its own idea of where the page is and
    // wins the next frame unless it is told too — and is allowed to
    // throw while being told, because a stranded curtain is worse than
    // a missed animation.
    function jumpTo(y) {
      scrollTo(0, y);
      if (!smooth) return;
      try { smooth.scrollTo(y, { immediate: true, force: true, onComplete: function () {} }); }
      catch (e) { scrollTo(0, y); }
    }
    // the hero is the top of the document once the welcome is out of
    // it, and its walk has to start from its own first frame rather
    // than from wherever the welcome's scroll left us
    function toTop() { jumpTo(0); }

    // A keyboard has no wheel to build the sign with, and a half-risen
    // link has no business in the tab ring: tabbing off the skip link
    // finishes the composition and hands over the choices. It is the
    // Tab after the skip link rather than the first one, because the
    // skip link is the other thing a keyboard wants here and it keeps
    // its place at the front of the ring.
    function onKey(ev) {
      if (ev.key !== 'Tab' || ev.shiftKey) return;
      if (root.classList.contains('gate-off') || gate.classList.contains('ready')) return;
      var from = document.activeElement;
      if (!from || !from.classList.contains('skip')) return;
      ev.preventDefault();
      jumpTo(gate.offsetTop + gate.offsetHeight - innerHeight);
      runTasks();
      requestAnimationFrame(function () { if (pills[0]) pills[0].focus(); });
    }
    function release() { removeEventListener('keydown', onKey); }
    addEventListener('keydown', onKey);

    frameTasks.push(gateRender);
        gateRender();                                // build the room before first paint
  })();

  // ── the brief's own strings ─────────────────────────────
  // The only strings the script owns. Everything else on the page is
  // written into the HTML by the build, so this table exists purely so
  // a validation message never comes back in a language the reader did
  // not choose. Keyed off <html lang>, which the build always sets.
  var T = (function () {
    var L = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    var S = {
      en: {
        pick: 'Pick one of these.',
        required: 'This one is needed.',
        email: 'That address looks incomplete.',
        about: 'A sentence or two more, so the reply is worth reading.',
        one: 'One answer still needs filling in.',
        many: '{n} answers still need filling in.',
        mail: 'Opening your mail app with the brief filled in.',
        sending: 'Sending the brief.',
        failed: 'That would not send. Opening your mail app instead.',
        subject: 'Project brief: ',
        fNeed: 'What they need: ', fBudget: 'Budget: ', fWhen: 'Live by: ',
        fWho: 'Business: ', fEmail: 'Email: '
      },
      pt: {
        pick: 'Escolha uma das opções.',
        required: 'Este campo é necessário.',
        email: 'Esse endereço parece incompleto.',
        about: 'Mais uma ou duas frases, para que a resposta valha a leitura.',
        one: 'Ainda falta preencher uma resposta.',
        many: 'Ainda faltam {n} respostas por preencher.',
        mail: 'Abrindo seu aplicativo de e-mail com o briefing preenchido.',
        sending: 'Enviando o briefing.',
        failed: 'Não foi possível enviar. Abrindo seu aplicativo de e-mail.',
        subject: 'Briefing de projeto: ',
        fNeed: 'O que precisam: ', fBudget: 'Orçamento: ', fWhen: 'No ar até: ',
        fWho: 'Negócio: ', fEmail: 'E-mail: '
      },
      es: {
        pick: 'Elija una de estas opciones.',
        required: 'Este campo es necesario.',
        email: 'Esa dirección parece incompleta.',
        about: 'Una o dos frases más, para que la respuesta valga la pena.',
        one: 'Todavía falta una respuesta por completar.',
        many: 'Todavía faltan {n} respuestas por completar.',
        mail: 'Abriendo su aplicación de correo con el briefing completado.',
        sending: 'Enviando el briefing.',
        failed: 'No se pudo enviar. Abriendo su aplicación de correo.',
        subject: 'Briefing de proyecto: ',
        fNeed: 'Qué necesitan: ', fBudget: 'Presupuesto: ', fWhen: 'En línea para: ',
        fWho: 'Negocio: ', fEmail: 'Correo: '
      }
    };
    return S[L] || S.en;
  })();

  // ── the brief ────────────────────────────────────────────
  // Validated here rather than by the browser, so the messages read
  // like the rest of the site and the first bad field gets focus. It
  // posts JSON to whatever backend is named on data-endpoint; with no
  // endpoint set it still works, composing the mail locally. Either
  // way the same success panel closes the loop and hands off to the
  // call, which is the next step in the flow.
  var brief = document.getElementById('brief');
  if (brief) (function () {
    var FIELDS = ['need', 'budget', 'when', 'who', 'about', 'email'];
    var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var note = document.getElementById('brief-note');
    var btn = brief.querySelector('.send');
    var panel = brief.querySelector('.brief-fields');
    var done = brief.querySelector('.brief-done');

    function slotFor(el) {
      var wrap = el.closest ? el.closest('label') : el.parentNode;
      wrap = wrap || el.parentNode;
      var slot = wrap.querySelector('.err');
      if (!slot) {
        slot = document.createElement('span');
        slot.className = 'err';
        wrap.appendChild(slot);
      }
      return slot;
    }

    function mark(el, msg) {
      slotFor(el).textContent = msg || '';
      if (msg) el.setAttribute('aria-invalid', 'true');
      else el.removeAttribute('aria-invalid');
      return !msg;
    }

    function check(el) {
      var v = (el.value || '').trim();
      if (!v) return mark(el, el.tagName === 'SELECT' ? T.pick : T.required);
      if (el.name === 'email' && !EMAIL.test(v)) return mark(el, T.email);
      if (el.name === 'about' && v.length < 20) return mark(el, T.about);
      return mark(el, '');
    }

    FIELDS.forEach(function (n) {
      var el = brief.elements[n];
      if (!el) return;
      el.addEventListener('blur', function () { if (el.value.trim()) check(el); }, false);
      el.addEventListener('change', function () { check(el); }, false);
      // once a field has been called out, correct it live rather than
      // waiting for another submit
      el.addEventListener('input', function () {
        if (el.getAttribute('aria-invalid') === 'true') check(el);
      }, false);
    });

    function payload() {
      var d = {};
      FIELDS.forEach(function (n) { d[n] = brief.elements[n].value.trim(); });
      d.subject = T.subject + d.who;
      d.page = location.href;
      return d;
    }

    function compose(d) {
      var body = [
        T.fNeed + d.need,
        T.fBudget + d.budget,
        T.fWhen + d.when,
        T.fWho + d.who,
        T.fEmail + d.email,
        '',
        d.about
      ].join('\n');
      location.href = 'mailto:' + (brief.dataset.fallback || '')
        + '?subject=' + encodeURIComponent(d.subject)
        + '&body=' + encodeURIComponent(body);
    }

    function finish() {
      panel.hidden = true;
      done.hidden = false;
      done.setAttribute('tabindex', '-1');
      done.focus();
      // the call is the next step now rather than a second way in, so
      // the card beside this one stops describing it and offers it
      var sec = brief.closest('.contact');
      if (sec) sec.classList.add('sent');
    }

    brief.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (brief.elements.company && brief.elements.company.value) return;  // honeypot

      var bad = null, n = 0;
      FIELDS.forEach(function (f) {
        var el = brief.elements[f];
        if (!check(el)) { n++; if (!bad) bad = el; }
      });
      if (bad) {
        note.textContent = n === 1 ? T.one : T.many.replace('{n}', n);
        bad.focus();
        return;
      }

      var d = payload();
      var endpoint = brief.dataset.endpoint;

      if (!endpoint) {
        note.textContent = T.mail;
        compose(d);
        setTimeout(finish, 900);
        return;
      }

      btn.disabled = true;
      note.textContent = T.sending;
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(d)
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        finish();
      }).catch(function () {
        // the brief is worth more than the transport: fall back rather
        // than losing what they typed
        btn.disabled = false;
        note.textContent = T.failed;
        compose(d);
      });
    });
  })();

  // ── the sign-off ────────────────────────────────────────
  // The last thing the page says, and then the mark carries it into
  // the form. This used to open on the studio's sign and walk a camera
  // through the letters until the ink of one of them was the whole
  // frame; the welcome says the studio's name on a wall already, and
  // saying it twice made the second one a repeat rather than a return.
  // What is left is the line, and the arrival: the mark falls into the
  // scene on its own clock, lands heavy, and then keeps going — down
  // and across into the empty half of the contact block, where it
  // parks beside the heading for as long as the heading is on screen.
  var outro = document.getElementById('outro');
  if (!reduce && outro) (function () {
    var slot  = outro.querySelector('.so-char-slot');
    var berth = document.querySelector('.char-berth');

    function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
    function ramp(v, a, b) { return clamp01((v - a) / (b - a)); }
    function ease(v) { return v * v * (3 - 2 * v); }
    // the growth decelerates hard into its final size rather than
    // easing symmetrically: it should arrive, not drift
    function settle(v) { return 1 - Math.pow(1 - v, 4); }
    // The fall cannot start from a standstill. The scene it sits in is
    // travelling up at the speed of the page, so an easing that leaves
    // zero slope at the origin loses that race and the mark visibly
    // rises before it falls. This one opens with just enough slope to
    // win, then decelerates to nothing as it reaches the berth.
    function descend(t) { return t * (0.9 + t * (1.2 - 1.1 * t)); }

    // Three beats on three clocks, measured in screens of scroll. The
    // drop is most of the way spent before the swing starts, so the
    // path reads as a fall that curves out at the bottom rather than a
    // diagonal; the overlap between them is what rounds the corner.
    // Then the mark grows into the column it was heading for, which is
    // the slowest beat of the three because it is the one worth
    // watching.
    var DROP = 0.42;                   // the fall
    var SIDE_A = 0.26, SIDE_B = 0.68;  // the swing across
    var GROW_A = 0.84, GROW_B = 1.40;  // and the fill, under the pin
    var curX = 0, curY = 0, curS = 1;

    var fell = false;

    function outroRender() {
      var box = outro.getBoundingClientRect();
      // the journey carries on well past this section, so the window
      // stays open until the mark has finished filling its berth
      if (box.bottom < -innerHeight * 2.6 || box.top > innerHeight + 40) return;

      var span = outro.offsetHeight - innerHeight;
      var p = clamp01(span > 0 ? -box.top / span : 0);
      // p tops out the moment the stage unpins; after that the whole
      // section is sliding away to hand over to the contact block
      var gone = Math.max(0, innerHeight - box.bottom) / innerHeight;

      // the mark arrives on its own clock: a fall wants weight, not a
      // scrub. It comes once the scene has had the frame to itself for
      // a moment, and it is re-armed if you scroll back up to watch it.
      if (!fell && p > 0.34) { fell = true; outro.classList.add('fell'); }
      else if (fell && p < 0.12) { fell = false; outro.classList.remove('fell'); }
      // the stage clips the scene; once the mark is on its way out of
      // the bottom of it there is nothing left worth clipping
      outro.classList.toggle('handing', p > 0.5);

      // Then it keeps going, down and across into the empty half of
      // the contact block. The offset is measured to a real box in
      // that layout rather than produced by a curve, so the moment it
      // arrives the two are moving together and it simply stays parked
      // beside the heading for as long as the heading is on screen.
      if (slot && berth) {
        if (gone <= 0) {
          curX = curY = 0; curS = 1;
          slot.style.setProperty('--drift', '0px');
          slot.style.setProperty('--fall', '0px');
          slot.style.setProperty('--grow', '1');
        } else {
          var sr = slot.getBoundingClientRect();
          var br = berth.getBoundingClientRect();
          // Scaling happens about the centre, so the centre only ever
          // moves by the translation: backing that out recovers where
          // the slot would sit untransformed, whatever its size.
          var ncx = sr.left + sr.width / 2 - curX;
          var ncy = sr.top + sr.height / 2 - curY;
          var full = berth.offsetWidth / (slot.offsetWidth || 1);

          curX = (br.left + br.width / 2 - ncx) * ease(ramp(gone, SIDE_A, SIDE_B));
          curY = (br.top + br.height / 2 - ncy) * descend(ramp(gone, 0, DROP));
          curS = 1 + (full - 1) * settle(ramp(gone, GROW_A, GROW_B));

          slot.style.setProperty('--drift', curX.toFixed(1) + 'px');
          slot.style.setProperty('--fall', curY.toFixed(1) + 'px');
          slot.style.setProperty('--grow', curS.toFixed(4));
        }
        outro.classList.toggle('leaving', gone > 0.02);
      }
    }

    frameTasks.push(outroRender);
    outroRender();
  })();

  // ── the hand in the room ─────────────────────────────────
  // Both scenes on this site are rooms with a light in them, so the
  // light answers the pointer instead of sitting still. It is damped
  // rather than tracked: a fixture on a boom arm has mass, and the
  // lag is most of what separates this from a cursor effect.
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (!reduce && fine) (function () {
    var lamps = [].slice.call(document.querySelectorAll('.glow'));
    var magnets = [].slice.call(document.querySelectorAll('.btn,.visit'));
    var tiles = [].slice.call(document.querySelectorAll('.bp'));

    if (lamps.length) {
      var tx = 0, ty = 0, cx = 0, cy = 0, running = false;

      function drift(ev) {
        tx = ev.clientX / innerWidth - 0.5;
        ty = ev.clientY / innerHeight - 0.5;
        if (!running) { running = true; requestAnimationFrame(settle); }
      }
      function settle() {
        cx += (tx - cx) * 0.05;
        cy += (ty - cy) * 0.05;
        var x = (cx * 16).toFixed(2) + 'vw', y = (cy * 13).toFixed(2) + 'vh';
        lamps.forEach(function (el) {
          el.style.setProperty('--lx', x);
          el.style.setProperty('--ly', y);
        });
        // stop the loop once the light has caught up, so an idle page
        // costs nothing at all
        if (Math.abs(tx - cx) > 0.0012 || Math.abs(ty - cy) > 0.0012) requestAnimationFrame(settle);
        else running = false;
      }
      addEventListener('pointermove', drift, { passive: true });
    }

    // Everything below writes a -1..1 pair and lets a CSS transition do
    // the damping, which keeps the per-move cost to two property sets.
    function track(el, target) {
      el.addEventListener('pointermove', function (ev) {
        var b = el.getBoundingClientRect();
        target.style.setProperty('--mx', ((ev.clientX - b.left) / b.width * 2 - 1).toFixed(3));
        target.style.setProperty('--my', ((ev.clientY - b.top) / b.height * 2 - 1).toFixed(3));
      }, { passive: true });
      el.addEventListener('pointerleave', function () {
        target.style.setProperty('--mx', 0);
        target.style.setProperty('--my', 0);
      }, { passive: true });
    }
    tiles.forEach(function (el) { track(el, el); });
    magnets.forEach(function (el) { track(el, el); });
  })();

  // ── the menu ─────────────────────────────────────────────
  // Below 720px the links no longer fit beside the wordmark and the
  // CTA. They used to be set to display:none, which left a phone with
  // one reachable link; now they fold into a panel instead.
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    function shut() { toggle.setAttribute('aria-expanded', 'false'); root.classList.remove('nav-open'); }
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      root.classList.toggle('nav-open', !open);
    });
    // an in-page jump leaves the panel covering what it jumped to
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) shut(); });
    addEventListener('keydown', function (e) { if (e.key === 'Escape') shut(); });
    // must match the breakpoint the panel folds at in the stylesheet,
    // or the panel stays open and stuck in the gap between the two
    addEventListener('resize', function () { if (innerWidth > 880) shut(); }, { passive: true });
  }

  // The header only floats free over the home page's hero. Every other
  // page has content under it from the first pixel, so it stays pinned.
  var heroEl = document.querySelector('.hero');
  if (heroEl) {
    new IntersectionObserver(function (e) { head.classList.toggle('pinned', !e[0].isIntersecting); },
      { rootMargin: '-70px 0px 0px 0px' }).observe(heroEl);
  } else {
    head.classList.add('pinned');
  }
  if (reduce) return;
  addEventListener('load', function () {
    if (!window.Lenis) return;
    smooth = new Lenis({ lerp: 0.1, wheelMultiplier: 0.95 });
    (function raf(t) { smooth.raf(t); requestAnimationFrame(raf); })(0);
  });
})();
