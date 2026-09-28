import type { Dictionary } from './types'
import { industriesEs } from './industries-es'

export const es: Dictionary = {
  meta: {
    siteName: 'The Diniz Studio',
    tagline: 'Un estudio dirigido por su fundador, para negocios de servicios y creativos, en tres idiomas.',
  },

  nav: {
    work: 'Proyectos',
    services: 'Servicios',
    about: 'Estudio',
    contact: 'Contacto',
    language: 'Idioma',
    skip: 'Ir al contenido',
  },

  cta: {
    label: 'Empezar un proyecto',
    title: '¿Tienes un proyecto en mente?',
    text: 'Cuéntame qué vendes y a quién. Recibes una respuesta clara sobre alcance y plazo, y un presupuesto cerrado por escrito.',
    bookCall: 'Agenda una llamada de 30 minutos',
  },

  home: {
    meta: {
      title: 'The Diniz Studio | Diseño Web, Branding y Marketing',
      description:
        'Un estudio dirigido por su fundador: webs, identidad de marca y marketing para negocios de servicios y creativos en Estados Unidos y Brasil. En español, inglés y portugués.',
    },
    heroLine: 'Un estudio dirigido por su fundador, para negocios de servicios y creativos. Webs, marcas y marketing en español, inglés y portugués.',
    heroScroll: 'Desliza',
    h1: 'The Diniz Studio. Diseño web, identidad de marca y marketing para negocios de servicios y creativos.',
    intro: {
      kicker: 'Por qué un solo estudio',
      title: 'Tres proveedores que nunca se hablan',
      body: [
        'Uno hace la web, otro dibuja el logo, otro publica en Instagram. Nada combina, y nadie mira el conjunto.',
        'Aquí la web, la identidad y el marketing salen de la misma persona y de las mismas decisiones, así que quien te encuentra en Google, en Instagram o por recomendación encuentra siempre el mismo negocio. No necesitas las tres cosas: llévate la que te falta, y encajará con lo que ya tienes.',
        'El estudio trabaja con negocios de servicios y creativos, como salones, artesanos, fotógrafos y chefs, y sobre todo con quienes atienden a clientes que hablan más de un idioma. Las webs se escriben en español, inglés y portugués siempre que el público lo necesita.',
      ],
    },
    founder: {
      kicker: 'Con quién trabajas',
      title: 'Felipe Diniz, fundador',
      body: [
        'The Diniz Studio lo lleva Felipe Diniz. La misma persona responde tu primer mensaje, diseña la web, escribe el código y coge el teléfono meses después cuando quieras cambiar algo.',
        'Uno o dos proyectos a la vez, en español, inglés y portugués, para negocios en Estados Unidos y Brasil. Ningún gestor de cuentas entre tú y el trabajo.',
      ],
      link: 'Más sobre el estudio',
    },
    quote: {
      kicker: 'Testimonio',
      project: 'blend-hair-boutique',
      link: 'Leer el caso de Blend',
    },
    services: {
      kicker: 'Servicios',
      title: 'Tres cosas, bien hechas',
      text: 'Una web, una identidad que lo sostiene todo, y el trabajo de búsqueda y redes alrededor. Contrata al estudio para una sola cosa, o combínalas.',
      link: 'Ver todos los servicios',
    },
    work: {
      kicker: 'Proyectos seleccionados',
      title: 'Cuatro negocios, cuatro problemas',
      text: 'Una bordadora, un salón, un fotógrafo y una pastelera. Cada caso separa lo que se hizo de lo que se ha medido.',
      link: 'Ver todos los proyectos',
    },
    answers: {
      kicker: 'Respuestas claras',
      title: 'Lo que preguntan antes de contratar',
      link: 'Ver todas las preguntas',
      items: [
        {
          slug: 'como-consigo-un-presupuesto',
          q: '¿Cómo consigo un presupuesto?',
          a: 'Cada proyecto se presupuesta por separado, porque una web de una página y una web trilingüe con logo y fotografía no son el mismo trabajo. Cuéntame qué necesitas y recibes un precio cerrado por escrito antes de empezar nada. El hosting, el dominio y las herramientas de terceros los cobra cada proveedor, y el presupuesto indica cuáles aplican.',
        },
        {
          slug: 'cuanto-tarda',
          q: '¿Cuánto tarda?',
          a: 'Entre cuatro y ocho semanas en la mayoría de los proyectos, desde la primera conversación hasta la publicación. Lo lento nunca es el código, son las decisiones y el contenido, y el proceso está montado para sacarte eso pronto.',
        },
        {
          slug: 'trabajas-en-mas-de-un-idioma',
          q: '¿Trabajas en más de un idioma?',
          a: 'Sí. Español, inglés y portugués, cada uno con su propia dirección y declarado a los buscadores, para que puedan relacionar cada página con quien busca en ese idioma. Cada versión se escribe, no se traduce a máquina.',
        },
        {
          slug: 'solo-haces-paginas-web',
          q: '¿Solo haces páginas web?',
          a: 'No. También logo e identidad de marca, dirección de fotografía, redes sociales, Perfil de Empresa en Google y SEO local. Puedes contratar solo una de estas cosas, o combinarlas. Nadie necesita todo.',
        },
        {
          slug: 'con-que-lo-construyes',
          q: '¿Con qué lo construyes?',
          a: 'Código propio, no un constructor de páginas. Eso mantiene las páginas ligeras y rápidas, y no hay suscripción a un constructor que seguir pagando. El hosting y el dominio se siguen pagando a sus proveedores, como en cualquier web.',
        },
      ],
    },
  },

  work: {
    meta: {
      title: 'Proyectos | Casos de Diseño Web, Branding y Marketing',
      description:
        'Casos: webs, logos, redes sociales y SEO local para una bordadora, un salón de belleza, un fotógrafo y una pastelera.',
    },
    kicker: 'Proyectos',
    title: 'Cada proyecto, completo',
    lede: 'Qué necesitaba el negocio y qué se hizo. Cada cifra indica qué está midiendo, y cada proyecto enlaza a la web publicada.',
    viewProject: 'Ver el caso',
    caseStudy: 'Ver el caso',
    visitSite: 'Visitar la web',
    allWork: 'Todos los proyectos',
    nextProject: 'Siguiente proyecto',
  },

  caseStudy: {
    scope: 'Alcance',
    where: 'Dónde',
    live: 'En línea',
    identity: 'Identidad',
    type: 'Tipografía',
    theSite: 'La web',
    figureKind: { delivered: 'Entregado', measured: 'Medido', client: 'Sobre el cliente' },
  },

  player: {
    soundOn: 'Activar sonido',
    soundOff: 'Silenciar',
    watch: 'Ver la película',
    close: 'Cerrar',
  },

  services: {
    meta: {
      title: 'Servicios | Diseño Web, Identidad de Marca y Marketing',
      description:
        'Webs a medida, logo e identidad de marca, y el marketing que viene después: redes sociales, Perfil de Empresa en Google y SEO local. En tres idiomas.',
    },
    kicker: 'Servicios',
    title: 'Qué hace el estudio',
    lede: 'Tres servicios pensados para encajar. Contrata al estudio para uno de ellos, o combínalos.',
    cards: {
      'web-design': {
        title: 'Diseño y desarrollo web',
        text: 'Webs escritas desde cero: rápidas, multilingües y hechas para convertir una visita en un contacto.',
        proof: [
          { value: 'Hasta 3', label: 'Idiomas por web' },
          { value: '100%', label: 'Código entregado' },
          { value: '0', label: 'Plantillas usadas' },
        ],
      },
      'brand-identity': {
        title: 'Identidad de marca',
        text: 'Logo, color, tipografía y las reglas que lo sostienen, dibujadas para cómo vende tu negocio de verdad.',
        proof: [
          { value: '0', label: 'Renovaciones del logo' },
          { value: 'Tuyos', label: 'Archivos originales incluidos' },
        ],
      },
      'marketing-seo': {
        title: 'Marketing y SEO',
        text: 'Que te encuentren y que te sigan: búsqueda local, Perfil de Empresa en Google, redes sociales y el contenido detrás de ambas cosas.',
        proof: [
          { value: '200', label: 'Seguidores en una cuenta de clienta que lleva el estudio' },
          { value: '1,5k', label: 'Seguidores en la cuenta del propio estudio' },
          { value: 'Puntual', label: 'Diagnóstico y puesta a punto; mensual opcional' },
        ],
      },
    },
    readMore: 'Leer más',
    related: 'Proyectos de este servicio',
    reels: 'Reels hechos para clientes',
  },

  servicePages: {
    'web-design': {
      meta: {
        title: 'Diseño Web | Páginas a Medida y Multilingües',
        description:
          'Webs a medida para negocios de servicios y creativos. Hechas a mano, rápidas y multilingües, con una entrega clara y la base técnica que necesitan los buscadores.',
      },
      kicker: 'Servicio',
      title: 'Diseño y desarrollo web',
      lede: 'Una web hecha para tu negocio, no adaptada de una plantilla que otro ya está usando.',
      body: [
        'Quien busca una web nueva suele estar resolviendo uno de estos tres problemas: la web actual no está a la altura del trabajo, va lenta o se rompe en el celular, o la gente entra y nunca escribe. Los tres tienen solución, y los tres dependen de lo mismo: decidir para qué sirve la web antes de que alguien abra un programa de diseño.',
        'Cada página aquí se escribe y se programa a mano. Sin constructor de páginas, sin plantilla, sin licencia mensual de un plugin que algún día se rompe. Eso mantiene la web ligera en el celular y ofrece a buscadores y asistentes de inteligencia artificial páginas limpias y estructuradas para leer. Ayuda a que te descubran; no garantiza una posición ni una mención.',
        'Cuando tiene sentido, la web se publica en español, inglés y portugués. Cada idioma tiene su dirección y su texto, escrito y no traducido por una máquina, para que los buscadores relacionen cada versión con quien busca en ese idioma.',
      ],
      included: {
        title: 'Qué recibes',
        items: [
          {
            title: 'Una estructura construida alrededor de la venta',
            text: 'Páginas en el orden en que el cliente decide de verdad, que terminan en una reserva, un presupuesto o un mensaje y no en un callejón sin salida.',
          },
          {
            title: 'Diseño y desarrollo',
            text: 'Maquetación, tipografía, movimiento y código. Todo adaptable y probado en celulares reales.',
          },
          {
            title: 'Textos que trabajan',
            text: 'Redacción con tu voz, incluidas las páginas de servicio que responden a lo que la gente escribe en el buscador.',
          },
          {
            title: 'Uno, dos o tres idiomas',
            text: 'Español, inglés y portugués, cada uno publicado como toca y declarado a los buscadores.',
          },
          {
            title: 'SEO técnico desde el principio',
            text: 'Datos estructurados, mapa del sitio, encabezados limpios, imágenes ligeras: la base que necesitan los buscadores para leer bien la web. Ayuda a que te encuentren; la posición sigue dependiendo de la competencia y del tiempo.',
          },
          {
            title: 'Lo que es tuyo en la entrega',
            text: 'La web terminada y su código fuente, el dominio conectado y una explicación de cómo funciona todo. No se retiene nada para atarte al estudio.',
          },
          {
            title: 'Soporte opcional después',
            text: 'El soporte después del lanzamiento es opcional. Los cambios se presupuestan por trabajo, o en condiciones acordadas por escrito si quieres ayuda regular. No hay cuota obligatoria.',
          },
          {
            title: 'Costes de terceros, avisados antes',
            text: 'El hosting, el dominio, una plataforma de reservas o cualquier otro servicio externo lo cobra su proveedor y puede tener sus propias tarifas. La propuesta indica cuáles necesita tu web.',
          },
        ],
      },
      process: {
        title: 'Cómo funciona',
        steps: [
          {
            title: 'Conversación',
            text: 'Qué vendes, quién lo compra y qué lo está frenando. Treinta minutos, sin coste y sin presentación de ventas.',
          },
          {
            title: 'Propuesta',
            text: 'Alcance, precio cerrado y fechas por escrito. Si la respuesta es que no necesitas una web nueva, también te lo digo.',
          },
          {
            title: 'Diseño',
            text: 'La portada primero, para que veas la dirección antes de que esté todo construido.',
          },
          {
            title: 'Construcción',
            text: 'Desarrollo, contenido, idiomas y pruebas, con un enlace para que lo sigas.',
          },
          {
            title: 'Publicación',
            text: 'Dominio, analítica, configuración de búsqueda y una revisión una semana después para ver qué hizo la gente.',
          },
        ],
      },
      faq: {
        title: 'Preguntas',
        items: [
          {
            slug: 'necesito-una-web-nueva-por-donde-empezamos',
            q: 'Necesito una web nueva. ¿Por dónde empezamos?',
            a: 'Por una conversación sobre el negocio, no sobre la web. Mándame un mensaje contando qué haces y de dónde vienen hoy tus clientes, y en uno o dos días tienes alcance y precio.',
          },
          {
            slug: 'como-se-presupuesta-el-proyecto',
            q: '¿Cómo se presupuesta el proyecto?',
            a: 'Como un precio cerrado para el trabajo entero, por escrito, antes de empezar. Se mueve con el número de páginas, los idiomas y si entran fotografía y logo. El precio que te doy es el que pagas, y después no hay facturación por horas. Los costes de terceros, como el hosting, el dominio o una plataforma de reservas, quedan fuera de ese precio y se detallan aparte.',
          },
          {
            slug: 'puedes-rehacer-la-web-que-ya-tengo',
            q: '¿Puedes rehacer la web que ya tengo?',
            a: 'Sí, y muchas veces es la respuesta más barata. Si la estructura está bien y el problema es el diseño y la velocidad, rehacerla es más rápido y cuesta menos que empezar de cero.',
          },
          {
            slug: 'necesito-wordpress-wix-o-squarespace',
            q: '¿Necesito Wordpress, Wix o Squarespace?',
            a: 'No los necesitas. Tienen sentido si quieres montar y editar todo tú. Una web hecha a mano evita la suscripción al constructor y el mantenimiento de plugins, y no te ata a una plataforma que cambia sus precios cuando quiere. El hosting y el dominio se siguen pagando, como en cualquier web.',
          },
          {
            slug: 'podre-actualizarla-yo-mismo',
            q: '¿Podré actualizarla yo?',
            a: 'Si quieres, sí. Un editor de contenido sencillo se incluye cuando figura en la propuesta, y vale la pena si vas a cambiar textos, imágenes, precios o listados a menudo. Sin él, me mandas los cambios y se hacen por ti, cobrados por trabajo. Sabrás cuál es tu caso antes de empezar el proyecto.',
          },
          {
            slug: 'que-recibo-en-la-entrega-y-que-se-paga-aparte',
            q: '¿Qué recibo en la entrega, y qué se paga aparte?',
            a: 'Recibes la web terminada, su código fuente, el dominio conectado y una explicación de cómo funciona todo. El hosting, el propio dominio, una plataforma de reservas o cualquier otro servicio externo se paga a su proveedor y puede tener sus propias tarifas; la propuesta los detalla. El soporte después del lanzamiento es opcional, por trabajo o en condiciones acordadas por escrito.',
          },
          {
            slug: 'como-se-que-aparecera-en-google',
            q: '¿Cómo sé que aparecerá en Google?',
            a: 'Nadie puede prometer una posición en Google. Lo que hace el trabajo es darles a los buscadores lo que necesitan para leer la web: una página por cada cosa que vendes, encabezados limpios, datos estructurados, páginas rápidas y un Perfil de Empresa en Google si atiendes a una ciudad. Dónde apareces después depende de la competencia, las reseñas y el tiempo, sin un plazo fijo, y podrás seguirlo en la analítica.',
          },
        ],
      },
    },

    'brand-identity': {
      meta: {
        title: 'Identidad de Marca y Diseño de Logo, Hechos para tu Negocio',
        description:
          'Logo e identidad de marca para negocios de servicios y creativos: color, tipografía y las reglas que lo sostienen, de la vitrina a la web y a Instagram.',
      },
      kicker: 'Servicio',
      title: 'Identidad de marca',
      lede: 'El logo es la parte más pequeña. La identidad es lo que hace que un cliente te reconozca la segunda vez.',
      body: [
        'La mayoría llega aquí con un logo hecho deprisa, un color que solo existe en un archivo y ninguna idea de qué tipografía usar para imprimir una carta. Funciona hasta que necesitas web, lista de precios y feed de Instagram a la vez, y nada encaja.',
        'Una identidad lo resuelve decidiendo pocas cosas y sosteniéndolas: una o dos tipografías, una paleta que funcione en pantalla y en papel, una marca que se lea del tamaño de un ícono de celular, y reglas simples de qué va dónde.',
        'El trabajo se dibuja sobre lo que vendes de verdad. Una bordadora y un salón necesitan cosas distintas de un logo, y ninguno de los dos necesita un símbolo que podría ser de una empresa de tecnología.',
      ],
      included: {
        title: 'Qué recibes',
        items: [
          {
            title: 'La marca',
            text: 'Un logo dibujado para tu oficio, entregado en todos los formatos que te van a pedir, en color y en negro.',
          },
          {
            title: 'Color y tipografía',
            text: 'Una paleta con valores exactos y una pareja de tipografías con licencia para imprenta, web y redes.',
          },
          {
            title: 'Cómo usarlo',
            text: 'Reglas claras de espacio, tamaños y qué no hacer, para que una imprenta o un fotógrafo las sigan sin llamarte.',
          },
          {
            title: 'Aplicada a algo real',
            text: 'La identidad funcionando en las cosas que usas: la web, una tarjeta, una etiqueta, un feed.',
          },
        ],
      },
      process: {
        title: 'Cómo funciona',
        steps: [
          {
            title: 'Preguntas',
            text: 'Quién te compra, con quién te comparan y qué quieres que sienta alguien al ver tu nombre.',
          },
          {
            title: 'Dirección',
            text: 'Dos caminos, mostrados sobre aplicaciones reales y no sobre un lienzo en blanco.',
          },
          {
            title: 'Dibujo',
            text: 'Un camino llevado hasta el final: la marca, la paleta, la tipografía y las reglas.',
          },
          {
            title: 'Entrega',
            text: 'Todos los archivos, ordenados, más una guía corta que puede seguir cualquiera a quien contrates.',
          },
        ],
      },
      faq: {
        title: 'Preguntas',
        items: [
          {
            slug: 'el-logo-se-presupuesta-por-separado',
            q: '¿El logo se presupuesta por separado?',
            a: 'Puede ser, pero casi todo el trabajo de identidad aquí se presupuesta junto con la web. Hacer las dos cosas a la vez cuesta menos que comprarlas por separado y evita que se contradigan.',
          },
          {
            slug: 'ya-tengo-logo-puedes-conservarlo',
            q: 'Ya tengo logo. ¿Puedes conservarlo?',
            a: 'Sí, y pasa a menudo. La marca se queda y se construye todo lo demás para que por fin tenga dónde vivir. Blend Hair Boutique, en la sección de proyectos, es exactamente eso.',
          },
          {
            slug: 'cuanto-tarda-un-logo',
            q: '¿Cuánto tarda?',
            a: 'De dos a cuatro semanas por separado, o dentro del plazo de la web si haces las dos cosas.',
          },
          {
            slug: 'el-logo-es-mio',
            q: '¿El logo es mío?',
            a: 'Sí, completamente, incluidos los archivos originales. No hay licencia que renovar ni nada que volver a pagar.',
          },
        ],
      },
    },

    'marketing-seo': {
      meta: {
        title: 'Marketing y SEO Local | Puesta a Punto o Trabajo Mensual',
        description:
          'SEO local, Perfil de Empresa en Google, redes sociales y contenido: diagnóstico y puesta a punto puntuales, con trabajo mensual opcional. En español, inglés o portugués.',
      },
      kicker: 'Servicio',
      title: 'Marketing y SEO',
      lede: 'Una web que nadie encuentra es una tarjeta de visita. Esta es la parte que ayuda a que la encuentren.',
      body: [
        'Que te encuentren ya no es una sola cosa. Alguien puede escribir tu servicio y su ciudad en Google, pedirle una recomendación a un asistente de inteligencia artificial, o pasar por tu perfil en Instagram. El mismo material ayuda en los tres casos: páginas claras que responden preguntas reales, una ficha completa y activa, y publicaciones que se parecen al negocio al que pertenecen.',
        'El trabajo tiene dos partes. Primero, un diagnóstico y una puesta a punto puntuales: dónde apareces hoy, qué falta, y la base arreglada a partir de las búsquedas que hacen tus clientes, en el idioma en que las hacen. Después, solo si lo quieres, un trabajo mensual para seguir publicando y mantener la ficha al día. Para un negocio que vende a su propia ciudad, el Perfil de Empresa en Google suele ser el mejor punto de partida.',
        'Nada de esto garantiza una posición, un lugar en las respuestas de IA ni una fecha para los resultados. Los buscadores y los asistentes deciden qué muestran, y la competencia donde trabajas pesa. Lo que controla el estudio es lo clara, completa y actualizada que está tu información cuando miran.',
      ],
      included: {
        title: 'Qué incluye',
        items: [
          {
            title: 'Puntual: el diagnóstico',
            text: 'Un análisis por escrito de dónde apareces hoy en la búsqueda, en el mapa y en redes, de lo que falta o está mal, y de qué arreglar primero.',
          },
          {
            title: 'Puntual: la puesta a punto',
            text: 'Páginas de servicio y datos estructurados en la web; el Perfil de Empresa en Google creado o arreglado, con categorías, zonas de servicio, horarios y fotografía; perfiles en redes alineados con tu identidad.',
          },
          {
            title: 'Mensual, si lo quieres: publicación',
            text: 'Publicaciones en redes (dirección, fotografía, textos y programación), publicaciones en el Perfil de Empresa en Google y páginas nuevas que responden a lo que el cliente pregunta antes de comprar. Lo que entra cada mes se acuerda contigo por escrito.',
          },
          {
            title: 'Mensual, si lo quieres: mantenimiento',
            text: 'Horarios, servicios y fotos siempre al día, y respuestas a las reseñas cuando le pidas al estudio que se ocupe.',
          },
          {
            title: 'Primero, tu aprobación',
            text: 'Las publicaciones, las páginas y los cambios en la ficha te llegan antes de publicarse. No se publica nada en tu nombre sin tu aprobación.',
          },
          {
            title: 'Informes en lenguaje claro',
            text: 'En el trabajo mensual: qué buscaron, qué pulsaron y qué hicieron después. Sin un panel que tengas que interpretar.',
          },
        ],
      },
      process: {
        title: 'Cómo funciona',
        steps: [
          {
            title: 'Diagnóstico (puntual)',
            text: 'Dónde apareces hoy, qué te falta y qué están consiguiendo tus competidores que tú no.',
          },
          {
            title: 'Arreglar la base (puntual)',
            text: 'La web, la ficha y los datos estructurados, en ese orden. No sirve de nada promocionar una página que no se puede leer. Puedes parar aquí.',
          },
          {
            title: 'Aprobar y publicar (mensual, opcional)',
            text: 'Páginas de servicio, respuestas y publicaciones se preparan, te llegan para que las apruebes y se publican con un calendario que puedes ver.',
          },
          {
            title: 'Revisar (mensual, opcional)',
            text: 'Un informe en lenguaje sencillo, y el mes siguiente se decide con lo que pasó en el anterior.',
          },
        ],
      },
      faq: {
        title: 'Preguntas',
        items: [
          {
            slug: 'en-cuanto-tiempo-veo-resultados-de-seo',
            q: '¿En cuánto tiempo veo resultados?',
            a: 'No hay un plazo fijo, y nadie puede prometerlo con honestidad. Algunos negocios empiezan a aparecer en búsquedas nuevas pocas semanas después de la puesta a punto; otros tardan meses. Depende de la competencia donde trabajas, de tus reseñas y de cuánto saben ya de ti los buscadores. Si mantienes el trabajo mensual, los informes muestran lo que está cambiando.',
          },
          {
            slug: 'puedes-hacer-que-aparezca-en-chatgpt-y-en-otras-respuestas-de-ia',
            q: '¿Puedes hacer que aparezca en ChatGPT y en otras respuestas de IA?',
            a: 'Nadie puede garantizarlo, y quien diga lo contrario te está vendiendo algo. Los asistentes de IA deciden por su cuenta qué mencionar. Lo que puede hacer el estudio es que tu información sea fácil de entender: páginas que dicen con todas las letras qué haces, para quién y dónde, marcadas para que una máquina pueda leerlas. Eso mejora la probabilidad de que te describan bien; no promete una mención.',
          },
          {
            slug: 'tengo-que-comprometerme-por-meses',
            q: '¿Tengo que comprometerme por meses?',
            a: 'No. El diagnóstico y la puesta a punto son un trabajo puntual, con su propio presupuesto. El trabajo mensual es opcional, su alcance se acuerda por escrito, y puedes parar cuando quieras.',
          },
          {
            slug: 'en-que-idioma-deberia-publicar',
            q: '¿En qué idioma debería publicar?',
            a: 'En el idioma en que buscan tus clientes, que muchas veces es más de uno. En el sur de Florida eso suele significar inglés, español y portugués, y cada uno es una oportunidad más de que te encuentren.',
          },
        ],
      },
    },
  },

  about: {
    meta: {
      title: 'El Estudio | A Quién Estás Contratando',
      description:
        'The Diniz Studio es un estudio independiente de diseño web y marca que trabaja en español, inglés y portugués para negocios en Estados Unidos y Brasil.',
    },
    kicker: 'Estudio',
    title: 'Contratas a una persona, no a un departamento',
    lede: 'Un diseñador y programador, pocos proyectos a la vez, y ningún gestor de cuentas entre tú y el trabajo.',
    body: [
      'The Diniz Studio lo lleva Felipe Diniz. La misma persona responde tu primer mensaje, diseña la web, escribe el código y coge el teléfono seis meses después cuando quieras cambiar algo.',
      'Por eso son pocos proyectos a la vez. No esperas detrás de una cola, y nada se le pasa a un becario un viernes por la tarde.',
      'El estudio trabaja en español, inglés y portugués, y por eso buena parte del trabajo es para negocios que viven entre dos países: un salón brasileño en Florida, una artista que vende a Río y a Weston, una chef cuyos clientes hablan tres idiomas entre ellos.',
      'El trabajo es honesto sobre lo que puede hacer. Si una web nueva no es lo que tu negocio necesita, lo oirás en la primera conversación, y no te cuesta nada.',
    ],
    facts: [
      { label: 'Fundado por', value: 'Felipe Diniz' },
      { label: 'Idiomas', value: 'Español, inglés, portugués' },
      { label: 'Clientes en', value: 'Estados Unidos y Brasil' },
      { label: 'Proyectos a la vez', value: 'Uno o dos' },
      { label: 'Hecho con', value: 'Código propio, sin constructores' },
    ],
  },

  faq: {
    meta: {
      title: 'Preguntas Frecuentes | Respuestas Claras Antes de Contratar',
      description:
        'Precio, plazo, idiomas y qué incluye, respondido sin rodeos antes de que escribas. Una página por pregunta.',
    },
    kicker: 'Preguntas',
    title: 'Respuestas claras',
    lede: 'Lo que preguntan antes de contratar, respondido por completo — una página por pregunta.',
    backLink: 'Todas las preguntas',
    moreQuestions: 'Más preguntas',
  },

  contact: {
    meta: {
      title: 'Contacto | Empezar un Proyecto',
      description:
        'Cuéntame qué necesitas: una web nueva, logo e identidad de marca, o el marketing alrededor. Respuesta normalmente en un día, en español, inglés o portugués.',
    },
    kicker: 'Contacto',
    title: 'Empezar un proyecto',
    lede: 'Todo proyecto empieza con una conversación. Recibes una respuesta clara sobre alcance y plazo, un presupuesto cerrado por escrito, y respuesta en un día hábil — de la persona que de verdad hace el trabajo.',
    form: {
      name: 'Tu nombre',
      email: 'Correo',
      project: '¿Qué necesitas?',
      projectOptions: [
        'Una web nueva',
        'Rehacer mi web',
        'Logo e identidad de marca',
        'Marketing y SEO',
        'Otra cosa',
      ],
      message: 'Cuéntame',
      submit: 'Enviar',
      note: 'Llega directo a mi bandeja de entrada. Respuesta en un día hábil.',
      sending: 'Enviando…',
      success: 'Gracias, tu mensaje llegó. Recibirás respuesta en un día hábil.',
      failure: 'No se pudo enviar. Escríbeme directamente a',
      errors: {
        name: 'Escribe tu nombre.',
        email: 'Escribe un correo válido.',
        message: 'Cuéntame un poco sobre el proyecto.',
      },
    },
    direct: {
      email: 'Correo',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      meeting: 'Llamada',
      meetingText: 'Agendar 30 minutos',
    },
  },

  ...industriesEs,

  footer: {
    sections: { work: 'Proyectos', services: 'Servicios', industries: 'Sectores', studio: 'Estudio' },
    rights: 'Todos los derechos reservados.',
  },

  projects: {
    'bordados-com-amor-by-mari': {
      meta: {
        title: 'Bordados com Amor | Web, Logo y Redes Sociales',
        description:
          'Web trilingüe, logo bordado e Instagram gestionado para una artista del bordado a mano. La cuenta, que lleva el estudio, pasó de cero a 200 seguidores sin publicidad.',
      },
      sector: 'Bordado a mano',
      highlight: 'Instagram llevado por el estudio: de cero a 200 seguidores, sin anuncios',
      lede: 'Un logo bordado, una web en tres idiomas y una cuenta de Instagram construida desde cero sin un centavo de publicidad.',
      description:
        'Bordado a mano, una pieza cada vez. La web está construida al ritmo del trabajo: un proceso contado en cinco movimientos y un archivo catalogado donde cada pieza lleva las palabras bordadas en ella. Publicada en portugués, inglés y español.',
      alt: 'bordadoscomamorbymari.com, web de artista del bordado a mano diseñada por The Diniz Studio',
      location: 'Weston, FL y Río de Janeiro',
      services: [
        'Diseño de logo',
        'Identidad de marca',
        'Redes sociales',
        'Dirección de arte',
        'Diseño web',
        'Desarrollo',
      ],
      identity: {
        title: 'Un logo hecho como se hace el trabajo',
        text: 'Cada letra está bordada en vez de dibujada, así que el logo enseña el oficio en lugar de describirlo. Se sostiene del tamaño de una foto de perfil y en una etiqueta cosida a la pieza, que es lo que una artesana necesita de verdad de una marca.',
        type: [
          { name: 'Cormorant Garamond', role: 'Títulos' },
          { name: 'Instrument Sans', role: 'Interfaz' },
        ],
      },
      figures: [
        {
          value: '200',
          label: 'Seguidores en Instagram',
          note: 'En la cuenta que el estudio lleva desde que empezó de cero, sin publicidad. Una cifra de seguidores, no de ventas.',
          kind: 'measured',
        },
        {
          value: '3',
          label: 'Idiomas',
          note: 'Portugués, inglés y español.',
          kind: 'delivered',
        },
        {
          value: '1',
          label: 'Estudio, de principio a fin',
          note: 'Logo, feed, textos y web.',
          kind: 'delivered',
        },
      ],
      chapters: [
        {
          kicker: 'Redes sociales',
          title: 'Crecida, no comprada',
          text: 'El estudio lleva la cuenta de principio a fin: dirección, fotografía, textos y programación. Pasó de cero a 200 seguidores sin una sola publicación pagada, y cada pieza conversa con la web.',
        },
        {
          kicker: 'Fotografía y vídeo',
          title: 'Cada pieza lleva una palabra',
          text: 'Una frase leída de madrugada, bordada a mano y después fotografiada donde le corresponde: en la hierba, contra la corteza, con la última luz de la tarde. Una sesión alimenta el feed, las historias y la web.',
          captions: [
            '“Nada é em vão. Se não é benção, é lição.”',
            'Una pieza enmarcada, esperando en la hierba',
            '“Amor”, en una hoja recogida del suelo',
            '“Gratidão”, bordada en una hoja preservada',
            'La misma hoja, llevada a la luz',
          ],
          videoCaption: 'Reel producido para su cuenta',
        },
      ],
      screens: ['Inicio', 'Folhas Bordadas', 'Proceso', 'Archivo'],
      quote: {
        text: 'Quería algo limpio pero que siguiera siendo hecho a mano y personal, y él entendió exactamente lo que quería decir. Hasta los detalles pequeños parecen pertenecer a la marca. Por fin parece mi web.',
        name: 'Mariana Peres',
        role: 'Bordados com Amor by Mari',
      },
    },

    'blend-hair-boutique': {
      meta: {
        title: 'Blend Hair Boutique | Web de Salón y SEO Local',
        description:
          'Web trilingüe para un salón en Plantation, Florida, con reserva en línea, ocho páginas de servicio y datos estructurados que muestran a los buscadores el 4,9 que el salón ya tenía.',
      },
      sector: 'Salón de belleza',
      highlight: 'Ocho páginas de servicio, reserva desde cada una',
      lede: 'Una web trilingüe para un salón brasileño en Florida, donde cada página termina en una reserva hecha sin descolgar el teléfono.',
      description:
        'Un salón llevado por brasileñas en el sur de Florida, con un equipo que está casi al completo desde que abrió. Páginas de servicio que responden la pregunta antes de que se haga, perfiles de las estilistas y reserva al alcance desde cualquier sitio: una barra fija de llamar, reservar y WhatsApp en el celular. Publicada en tres idiomas.',
      alt: 'blendhairboutique.com, web de salón de belleza diseñada por The Diniz Studio',
      location: 'Plantation, FL',
      services: [
        'Dirección de arte',
        'Diseño web',
        'Desarrollo',
        'SEO local',
        'Integración de reservas',
        'Redacción',
      ],
      identity: {
        title: 'Construida alrededor de una marca que ya era suya',
        text: 'El logo manuscrito era suyo y se quedó. Todo lo demás se dibujó para que por fin tuviera dónde apoyarse: fondos tranquilos, un solo acento metálico y una tipografía que hace que una lista de precios y una página de servicio parezcan el mismo negocio.',
        type: [
          { name: 'Cormorant Garamond', role: 'Títulos' },
          { name: 'Inter', role: 'Interfaz' },
        ],
      },
      figures: [
        {
          value: '4,9',
          label: 'Valoración en Google, más de 1.230 reseñas',
          note: 'Ganada por el salón, no por el estudio. La web muestra la nota y la marca para la búsqueda.',
          kind: 'client',
        },
        {
          value: '8',
          label: 'Páginas de servicio',
          note: 'Una por tratamiento, cada una responde a una búsqueda.',
          kind: 'delivered',
        },
        {
          value: '3',
          label: 'Idiomas',
          note: 'Inglés, portugués y español.',
          kind: 'delivered',
        },
      ],
      chapters: [
        {
          kicker: 'Vídeo',
          title: 'La sala, antes del texto',
          text: 'Un bucle del salón en una tarde de trabajo abre la portada: espejos, sillas, el equipo a media jornada. Dice lo que es el salón en tres segundos y después se aparta para que ocurra la reserva.',
          videoCaption: 'El vídeo que abre la portada',
        },
        {
          kicker: 'Reservas',
          title: 'Cada página termina en una reserva',
          text: 'Del color y las mechas al peinado de novia, cada página de servicio explica un tratamiento y pasa directamente al sistema de reservas. WhatsApp y el teléfono quedan a un toque en una barra que te sigue en el celular.',
        },
        {
          kicker: 'Búsqueda local',
          title: 'Legible para un buscador',
          text: 'Blend ya se había ganado las reseñas antes de que llegara el estudio. La web las hizo legibles para los buscadores: dirección, horarios, servicios y valoración marcados para Google, una página por tratamiento para responder a lo que la gente escribe, y una página de reseñas que enseña la nota en vez de afirmarla.',
        },
      ],
      screens: ['Servicios', 'Transformaciones', 'Las estilistas', 'Reseñas'],
      quote: {
        text: 'Se ve profesional, funciona muy bien en el celular y las clientas encuentran todo sin tener que escribirnos antes. Hemos recibido muchos comentarios positivos desde que se publicó.',
        name: 'Juliana Chen',
        role: 'Copropietaria, Blend Hair Boutique',
      },
    },

    'rafa-diniz': {
      meta: {
        title: 'Rafa Diniz | Web de Portafolio de Fotógrafo y Cineasta',
        description:
          'Portafolio hecho a mano para un fotógrafo y cineasta: dos cortos, un archivo filtrado por tema y una firma dibujada a mano como logo.',
      },
      sector: 'Fotografía y cine',
      highlight: 'Una firma a mano, dos películas, un acento',
      lede: 'Una firma dibujada a mano, un solo color de acento que nunca compite con el trabajo, y una web hecha para poner la fotografía y el cine por delante.',
      description:
        'Un fotógrafo y cineasta que trabaja entre Brasil y Estados Unidos. Las películas van primero, dos que él dirigió, filmó y montó, seguidas de un archivo fotográfico que puedes filtrar por tema. Un showreel de cincuenta y tres segundos vive en la portada y en ningún otro sitio.',
      alt: 'byrafadiniz.com, portafolio de fotógrafo y cineasta diseñado por The Diniz Studio',
      location: 'Gainesville, FL',
      services: [
        'Diseño de logo',
        'Dirección de arte',
        'Etalonaje',
        'Diseño web',
        'Desarrollo',
        'Movimiento',
      ],
      identity: {
        title: 'La firma es el logo',
        text: 'Un fotógrafo firma su trabajo, así que la marca es su firma, dibujada a mano sobre mayúsculas muy espaciadas. Un acento recorre la interfaz como el único color de la web que no es una fotografía.',
        type: [
          { name: 'Instrument Serif', role: 'Títulos' },
          { name: 'Archivo', role: 'Interfaz' },
        ],
      },
      figures: [
        {
          value: '2',
          label: 'Cortometrajes',
          note: 'Dirigidos, filmados y montados por Rafael. La web los presenta.',
          kind: 'client',
        },
        {
          value: '53s',
          label: 'Showreel',
          note: 'El reel de Rafael, en la portada y en ningún otro sitio.',
          kind: 'client',
        },
        {
          value: '0',
          label: 'Plantillas',
          note: 'Estático y hecho a mano de principio a fin.',
          kind: 'delivered',
        },
      ],
      chapters: [
        {
          kicker: 'Cine',
          title: 'Las películas van primero',
          text: 'Dos cortos abren la web antes que ninguna fotografía. Uno es un documental sobre la devoción, el otro una pieza de marca para un rancho. Los fotogramas de ambos se etalonaron para vivir en el mismo mundo que el archivo de abajo.',
          captions: [
            'Paixão Calejada, un cortometraje documental. Dirigido, filmado y montado por Rafael',
            'B2B Ranch, una pieza de marca',
          ],
        },
        {
          kicker: 'Archivo',
          title: 'Ordenado por tema, no por fecha',
          text: 'Las fotografías se filtran por lo que son, así que quien vino por arquitectura nunca tiene que pasar por una boda para encontrarla.',
        },
        {
          kicker: 'Construcción',
          title: 'Estático, y hecho a mano',
          text: 'Sin plantilla y sin constructor de páginas, lo que mantiene las páginas ligeras incluso con fotografías del tamaño de una pared.',
        },
      ],
      screens: ['Películas', 'Archivo', 'Sobre él', 'Servicios'],
      quote: {
        text: 'Llegué con un montón de referencias e ideas a medias. Había cosas en el diseño final que nunca se me habría ocurrido pedir, y ahora no imagino la web sin ellas.',
        name: 'Rafael',
        role: 'Fotógrafo y cineasta',
        disclosure: 'Rafael es hermano de Felipe Diniz.',
      },
    },

    'renata-estrella-patisserie': {
      meta: {
        title: 'Renata Estrella Pâtisserie | Marca, Web y Perfil de Google',
        description:
          'Marca, web, e-book de recetas y Perfil de Empresa en Google para una pastelería de lujo en Río, todo creado desde cero por el estudio.',
      },
      sector: 'Pastelería',
      highlight: 'Logo, web, e-book y perfil de Google, creados desde cero',
      lede: 'Todo dibujado desde cero: el logo, la web, un e-book de recetas y el Perfil de Empresa en Google que el estudio creó y sigue gestionando.',
      description:
        'Formada en Ferrandi París, Ritz Escoffier y Le Cordon Bleu, Renata crea pastelería por encargo para eventos. La web tenía que leerse como se lee su trabajo: exacta, sin prisa, francesa en la contención. Un vídeo de portada, un archivo editorial de creaciones y un camino de contacto que se comporta como una consulta y no como un carrito.',
      alt: 'renataestrellapatisserie.com, web de pastelería de lujo diseñada por The Diniz Studio',
      location: 'Río de Janeiro, BR',
      services: [
        'Diseño de logo',
        'Identidad de marca',
        'Perfil de Empresa en Google',
        'Diseño de e-book',
        'Diseño web',
        'Desarrollo',
      ],
      identity: {
        title: 'Dibujado desde cero',
        text: 'No había logo, ni tipografía, ni reglas, así que se hizo todo: un monograma, un fondo oscuro que hace que el dorado se lea como metal y no como amarillo, y una pareja de tipografías que pasa de la web al e-book y a la ficha de Google sin tener que volver a dibujarse.',
        wordmark: { name: 'Renata Estrella', sub: 'Pâtisserie' },
        type: [
          { name: 'Cormorant Garamond', role: 'Títulos' },
          { name: 'Manrope', role: 'Interfaz' },
        ],
      },
      figures: [
        {
          value: '27',
          label: 'Reseñas de cinco estrellas en Google',
          note: 'Dejadas por clientes de Renata en el perfil que el estudio creó y gestiona. El mérito es de Renata, no del estudio.',
          kind: 'measured',
        },
        {
          value: '9',
          label: 'Recetas',
          note: 'En un e-book diseñado por el estudio y vendido desde la web.',
          kind: 'delivered',
        },
        {
          value: '3',
          label: 'Escuelas',
          note: 'Ferrandi, Ritz Escoffier, Le Cordon Bleu.',
          kind: 'client',
        },
      ],
      chapters: [
        {
          kicker: 'E-book',
          title: 'Sopas e Cremes',
          text: 'Nueve recetas, diseñadas como una razón para dejar un correo. Fotografiadas, maquetadas y compuestas en el mismo sistema que la web, y después vendidas y entregadas desde ella.',
          captions: [
            'La portada, en el dorado y marfil de la marca',
            'Receta 02, Vichyssoise',
            'Receta 05, Sopa de Cebolla',
            'La receta extra, chocolate caliente',
          ],
        },
        {
          kicker: 'Búsqueda y redes',
          title: 'Que la encuentren, no que la admiren',
          text: 'Para un negocio que vende a su propia ciudad, una ficha vale más que el aplauso. El estudio creó el Perfil de Empresa en Google y lo sigue llevando: categorías, zonas de servicio, fotografía, publicaciones y respuestas, junto con los datos estructurados de la web.',
        },
      ],
      screens: ['La promesa', 'Orígenes', 'Creaciones', 'Eventos'],
      quote: {
        text: 'No quería una web llena de texto compitiendo con los postres. Felipe lo entendió enseguida. Le dio aire a la fotografía y construyó todo lo demás alrededor.',
        name: 'Renata Estrella',
        role: 'Renata Estrella Pâtisserie',
      },
    },
  },
}
