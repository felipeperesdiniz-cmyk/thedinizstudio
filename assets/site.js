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
  // The hero walks you toward a screen; this walks you into the
  // studio's sign and then through it. Same pinhole as the hero:
  // apparent size is F/distance, so a camera closing at a steady
  // pace supplies its own acceleration. Each word is given a
  // depth and a lateral drift in that same world, then projected:
  // "the" falls back and left, "studio" slides right and past the
  // lens, "diniz" stays on the axis and the camera goes into it
  // until the ink of its own extrusion is the entire frame. That
  // ink is the cut, and the studio ground is already behind it.
  var outro = document.getElementById('outro');
  if (!reduce && outro) (function () {
    var stage  = outro.querySelector('.outro-stage');
    var slot   = outro.querySelector('.so-char-slot');
    var berth  = document.querySelector('.char-berth');
    var sign   = outro.querySelector('.sign');
    var words  = [].slice.call(outro.querySelectorAll('.wd'));

    var HOLD  = 0.07;   // the sign is allowed to be a sign first
    var CUT   = 0.68;   // the camera has arrived by here
    var D0    = 1000;   // reference distance to the wall
    var DMIN  = 26;     // how close the lens gets before the cut
    var BACK  = 900;    // how far "the" retreats into the wall
    var FWD   = 0.44;   // how much of the gap "studio" closes on the lens
    var SIDE  = 0.50;   // lateral drift, as a share of D0
    var RATE  = Math.log(D0 / DMIN);

    // one <i> per letter, each extruding away from the vanishing
    // point, so the sign has a single camera rather than sixteen
    words.forEach(function (w) {
      var frag = document.createDocumentFragment();
      w.textContent.split('').forEach(function (ch) {
        var i = document.createElement('i');
        i.textContent = ch;
        frag.appendChild(i);
      });
      w.textContent = '';
      w.appendChild(frag);
    });
    var glyphs = [].slice.call(sign.querySelectorAll('i'));

    var geo = null;                         // measured at rest, in px
    function measure() {
      words.forEach(function (w) { w.style.transform = ''; });
      var s = stage.getBoundingClientRect();
      var cx = s.left + s.width / 2, cy = s.top + s.height / 2;
      geo = {
        w: words.map(function (w) {
          var b = w.getBoundingClientRect();
          return { el: w, x: b.left + b.width / 2 - cx, y: b.top + b.height / 2 - cy,
                   role: w.dataset.wd };
        }),
        diniz: 0
      };
      geo.w.forEach(function (o) { if (o.role === 'diniz') geo.diniz = o.x; });
      glyphs.forEach(function (g) {
        var b = g.getBoundingClientRect();
        var dx = b.left + b.width / 2 - cx;
        // the lens sits a little above the sign, so every letter throws
        // its sides downward as well as away from the middle
        var dy = b.top + b.height / 2 - cy + b.height * 0.62;
        var m = Math.sqrt(dx * dx + dy * dy) || 1;
        g.style.setProperty('--sx', (dx / m).toFixed(4));
        g.style.setProperty('--sy', (dy / m).toFixed(4));
      });
    }

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

    var fell = false, onWall = null;

    function outroRender() {
      var box = outro.getBoundingClientRect();
      // the journey carries on well past this section, so the window
      // stays open until the mark has finished filling its berth
      if (box.bottom < -innerHeight * 2.6 || box.top > innerHeight + 40) return;
      if (!geo) measure();

      var span = outro.offsetHeight - innerHeight;
      var p = clamp01(span > 0 ? -box.top / span : 0);
      // p tops out the moment the stage unpins; after that the whole
      // section is sliding away to hand over to the contact block, and
      // that stretch is what brings the chrome back
      var gone = Math.max(0, innerHeight - box.bottom) / innerHeight;
      var leave = clamp01(gone);
      var t = clamp01((p - HOLD) / (CUT - HOLD));   // read the sign before moving

      // Halving the distance doubles the size, so a lens that closes
      // the remaining gap by a constant share each frame grows the
      // sign at a constant rate — the push a camera operator makes,
      // rather than the lurch a linear dolly gives at the end.
      var d = D0 * Math.exp(-RATE * t);
      var pan = geo.diniz * (t * (2 - t));   // settle "diniz" on the axis

      geo.w.forEach(function (o) {
        // "the" backs off by a fixed amount, so it ends up roughly the
        // size it started and a long way left; "studio" keeps a fixed
        // share of whatever gap is left, so it rushes the lens without
        // ever crossing it
        var depth = o.role === 'the' ? -BACK * t : o.role === 'studio' ? d * FWD * t : 0;
        var side  = o.role === 'the' ? -SIDE * D0 * t * t
                  : o.role === 'studio' ? SIDE * D0 * t * t : 0;
        var dist = Math.max(12, d - depth);
        var s = D0 / dist;
        o.el.style.transform =
          'translate3d(' + (s * (o.x + side - pan) - o.x).toFixed(1) + 'px,' +
          ((s - 1) * o.y).toFixed(1) + 'px,0) scale(' + s.toFixed(4) + ')';
        // The extrusion is a stack of copies of the glyph, so if its
        // step is measured on the wall it shears into visible stripes
        // the moment the camera magnifies it. Dividing the step by the
        // word's own scale measures it on the screen instead, and the
        // stack stays solid at any distance.
        o.el.style.setProperty('--zs', Math.pow(1.12, Math.round(Math.log(s) / 0.1133)).toFixed(3));
      });

      var st = outro.style;
      // depth is the point of the first half and beside the point in
      // the second: by the time the lens is between the letters there
      // is nothing in frame but the ink, so the relief bows out before
      // the cut rather than fighting it
      st.setProperty('--dep', (ramp(p, 0.05, 0.21) * (1 - ramp(p, 0.28, 0.46))).toFixed(3));
      st.setProperty('--wallz', Math.min(6, D0 / d).toFixed(4));   // the wall is the plane the sign is on
      st.setProperty('--cue', (1 - ramp(p, 0.015, 0.10)).toFixed(3));
      // Moving between letters this deep puts the wall behind them in
      // their shadow, so the frame darkens to ink of its own accord
      // and the cut only has to finish what the geometry started.
      st.setProperty('--gloom', ramp(p, 0.40, 0.62).toFixed(3));
      var cut = ramp(p, 0.56, CUT);
      st.setProperty('--cut', (cut * cut).toFixed(3));   // holds clear, then slams

      // the header hands the frame over on the same channel the hero
      // uses to bring it back, so the two never argue about opacity
      root.style.setProperty('--chrome',
        Math.max(1 - ramp(p, 0, 0.05), ramp(leave, 0.08, 0.4)).toFixed(3));

      var out = ramp(p, 0.74, 0.84);
      st.setProperty('--out', out.toFixed(3));
      st.setProperty('--outvis', out > 0 ? 'visible' : 'hidden');

      // once the cut is solid there is no reason to keep compositing
      // a sixty-times-scaled wall behind an opaque layer
      var lit = p < 0.70;
      if (lit !== onWall) {
        onWall = lit;
        st.setProperty('--wall', lit ? '1' : '0');
      }
      root.classList.toggle('outro-on', p > 0.06 && leave < 0.06);

      // the character arrives last, and it arrives on its own clock:
      // a fall wants weight, not a scrub
      if (!fell && p > 0.86) { fell = true; outro.classList.add('fell'); }
      else if (fell && p < 0.60) { fell = false; outro.classList.remove('fell'); }

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
      outro.classList.toggle('handing', p > 0.9);
    }

    frameTasks.push(outroRender);
    addEventListener('resize', function () { geo = null; }, { passive: true });
    addEventListener('load', function () { geo = null; });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { geo = null; onScroll(); });
    }
    outroRender();
  })();

  // ── the hand in the room ─────────────────────────────────
  // Both scenes on this site are rooms with a light in them, so the
  // light answers the pointer instead of sitting still. It is damped
  // rather than tracked: a fixture on a boom arm has mass, and the
  // lag is most of what separates this from a cursor effect.
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (!reduce && fine) (function () {
    var lamps = [].slice.call(document.querySelectorAll('.glow,.wall-light'));
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
    var l = new Lenis({ lerp: 0.1, wheelMultiplier: 0.95 });
    (function raf(t) { l.raf(t); requestAnimationFrame(raf); })(0);
  });
})();
