import type { Dictionary } from './types'

export const guidesEs: Pick<Dictionary, 'guides' | 'guidePages'> = {
  guides: {
    meta: {
      title: 'Cómo Funciona | Precio, Costes, Plazo y Propiedad de tu Web',
      description:
        'Cómo se presupuesta una web, cuánto cuesta mantenerla, cómo editarla después del lanzamiento, cuánto tarda, qué es tuyo y cómo funcionan los idiomas.',
    },
    kicker: 'Cómo funciona',
    title: 'Lo que cuesta, y lo que viene después',
    lede: 'Precio, costes de mantenimiento, edición, plazo, propiedad e idiomas, cada uno respondido por completo antes de que escribas. Todo esto también va por escrito en la propuesta.',
    cards: {
      pricing: {
        title: 'Precio fijo',
        text: 'Un precio por todo el trabajo, por escrito antes de empezar, y lo que lo hace variar.',
      },
      'running-costs': {
        title: 'Costes continuos',
        text: 'Hosting y dominio, pagados directamente a sus proveedores. Sin suscripción a un creador de webs ni licencia.',
      },
      editing: {
        title: 'Editar después del lanzamiento',
        text: 'Un editor sencillo incluido en la propuesta, o envías los cambios y se hacen, con precio por encargo.',
      },
      timeline: {
        title: 'De 4 a 8 semanas',
        text: 'Las cinco etapas desde la primera conversación hasta la publicación, y qué hace el proyecto más rápido.',
      },
      ownership: {
        title: 'Tuyo en la entrega',
        text: 'La web terminada, su código fuente y el dominio, con una explicación. Nada se queda retenido.',
      },
      multilingual: {
        title: 'Tres idiomas',
        text: 'Inglés, portugués y español, cada uno escrito para quien lo lee y publicado en su propia dirección.',
      },
    },
    readMore: 'Leer más',
    others: 'Más sobre cómo funciona',
  },

  guidePages: {
    pricing: {
      meta: {
        title: 'Precio de una Web: Un Precio Cerrado, por Escrito',
        description:
          'Cómo se presupuesta una web: un precio cerrado por escrito antes de empezar, qué hace variar la cifra, qué cubre y qué queda fuera.',
      },
      kicker: 'Precio',
      title: 'Cuánto cuesta una web: un precio cerrado',
      lede: 'Cada proyecto recibe un precio por todo el trabajo, por escrito, antes de que empiece nada. La cifra presupuestada es la cifra que pagas.',
      sections: [
        {
          heading: 'Por qué no hay lista de precios',
          body: [
            'Una web de una página en inglés y una web en tres idiomas con logo y fotografía nuevos son trabajos distintos. Un solo número en una lista estaría mal para casi todos los que lo leyeran.',
            'Por eso cada proyecto se presupuesta por separado, después de una conversación breve sobre lo que vendes, a quién y qué tiene que hacer la web. Envía unas líneas y recibes alcance y precio, normalmente en uno o dos días.',
          ],
        },
        {
          heading: 'Qué hace variar el precio',
          body: [
            'Tres cosas cambian la cifra más que ninguna otra: el número de páginas, el número de idiomas y si el logo, la identidad de marca o la fotografía forman parte del trabajo.',
            'Las funciones también cuentan. Una integración con un sistema de reservas, un editor de contenido para que lo uses tú o un catálogo online añaden trabajo, y la propuesta dice cuáles están incluidos.',
          ],
        },
        {
          heading: 'Qué cubre el precio cerrado',
          body: [
            'Diseño y desarrollo, textos con tu voz, la base técnica que necesitan los buscadores, pruebas en teléfonos reales, el lanzamiento y una explicación en la entrega.',
            'No hay cobro por hora después. Lo que pidas y no esté en la propuesta se presupuesta aparte antes de empezar, así que siempre decides tú primero.',
          ],
        },
        {
          heading: 'Qué queda fuera',
          body: [
            'El hosting, el dominio y cualquier servicio externo, como una plataforma de reservas, se pagan a sus proveedores y pueden tener sus propias tarifas. La propuesta detalla cada uno que necesita tu web, para que el coste total quede claro antes de decidir.',
          ],
        },
      ],
      faq: {
        title: 'Preguntas sobre el precio',
        items: [
          {
            q: '¿Puedo recibir un precio antes de una llamada?',
            a: 'Sí. Envía unas líneas por la página de contacto sobre lo que necesitas y recibes alcance y precio, normalmente en uno o dos días.',
          },
          {
            q: '¿La primera conversación es gratuita?',
            a: 'Sí. Dura treinta minutos, no cuesta nada y no hay presentación de ventas.',
          },
          {
            q: '¿Y si quiero más de lo que cubre la propuesta?',
            a: 'El trabajo extra se presupuesta aparte antes de empezar. El precio del alcance original no cambia.',
          },
        ],
      },
    },

    'running-costs': {
      meta: {
        title: 'Cuánto Cuesta Mantener una Web Después del Lanzamiento',
        description:
          'Los costes de una web después del lanzamiento: hosting y dominio pagados a sus proveedores, sin suscripción a un creador de webs y sin licencia que renovar.',
      },
      kicker: 'Costes continuos',
      title: 'Cuánto cuesta mantener una web después del lanzamiento',
      lede: 'Después del lanzamiento, los costes regulares son los que tu web realmente usa: hosting y dominio, pagados directamente a las empresas que los ofrecen.',
      sections: [
        {
          heading: 'Hosting y dominio',
          body: [
            'Toda web necesita un lugar donde estar y una dirección. Los dos se pagan directamente a sus proveedores, no a través del estudio, para que veas exactamente cuánto cuesta cada uno.',
            'El hosting adecuado depende del tamaño y del tráfico de la web. La propuesta lo indica antes de que decidas.',
          ],
        },
        {
          heading: 'Sin suscripción a un creador de webs',
          body: [
            'Las webs se hacen con frameworks modernos, no con un creador de arrastrar y soltar. No hay un plan mensual de creador que seguir pagando ni un plugin que haya que renovar para que la web funcione.',
            'También significa que ninguna plataforma puede subir sus precios y atar tu web a ellos.',
          ],
        },
        {
          heading: 'Servicios externos, solo cuando los necesitas',
          body: [
            'Algunas webs dependen de la herramienta de otra empresa: un sistema de reservas para un salón, un servicio de newsletter, una pasarela de pago online. Esos los cobran sus proveedores, a menudo con planes propios.',
            'La propuesta detalla cada servicio externo que necesita tu web y quién lo cobra, para que el coste de mantenimiento se conozca antes de empezar.',
          ],
        },
        {
          heading: 'El soporte es opcional',
          body: [
            'No hay que firmar una cuota mensual. Los cambios después del lanzamiento se presupuestan por encargo, o en condiciones acordadas por escrito si quieres ayuda regular.',
          ],
        },
      ],
      faq: {
        title: 'Preguntas sobre costes',
        items: [
          {
            q: '¿A quién le pago el hosting?',
            a: 'Directamente al proveedor de hosting. La propuesta indica qué proveedor necesita tu web.',
          },
          {
            q: '¿Hay una cuota mensual para el estudio?',
            a: 'No. El soporte después del lanzamiento es opcional y se cobra por encargo, o en condiciones acordadas por escrito si quieres ayuda regular.',
          },
          {
            q: '¿Tengo que renovar alguna licencia?',
            a: 'No. La web terminada y su código fuente son tuyos en la entrega, así que no hay nada que renovar con el estudio.',
          },
        ],
      },
    },

    editing: {
      meta: {
        title: 'Cómo Editar tu Web Después del Lanzamiento',
        description:
          'Dos formas de cambiar tu web después del lanzamiento: un editor sencillo para textos, fotos y precios incluido en la propuesta, o enviar cambios por encargo.',
      },
      kicker: 'Editar después del lanzamiento',
      title: 'Cómo editar tu web después del lanzamiento',
      lede: 'Una web cambia cuando ya está publicada: precios nuevos, fotos nuevas, un servicio nuevo. Hay dos formas de hacerlo, y eliges antes de que empiece el proyecto.',
      sections: [
        {
          heading: 'Un editor sencillo',
          body: [
            'Si vas a cambiar textos, imágenes, precios o listados a menudo, se puede incluir un editor de contenido sencillo. Va en la propuesta, así que forma parte del precio cerrado y no es un extra después.',
            'Se prepara alrededor de lo que realmente cambias, como una lista de precios, un menú, una galería o el horario.',
          ],
        },
        {
          heading: 'O envía el cambio',
          body: [
            'Si los cambios son ocasionales, quizá no necesites editor. Envías lo que quieres cambiar y se hace por ti, con precio por encargo y presupuestado antes.',
            'Muchos pequeños negocios lo prefieren así: nada nuevo que aprender, y la web sigue viéndose como se diseñó.',
          ],
        },
        {
          heading: 'Cuál elegir',
          body: [
            'Un salón que cambia precios cada temporada, o un artesano que añade piezas cada mes, suele estar mejor con el editor. Un fotógrafo que actualiza el portafolio dos veces al año, normalmente no.',
            'Sabrás cuál aplica a tu web antes de que empiece el proyecto, y la explicación en la entrega cubre la opción que elijas.',
          ],
        },
      ],
      faq: {
        title: 'Preguntas sobre la edición',
        items: [
          {
            q: '¿Puedo añadir un editor más adelante?',
            a: 'Sí, presupuestado como cualquier otro cambio. Es más sencillo planearlo desde el principio, por eso la pregunta aparece antes de la propuesta.',
          },
          {
            q: '¿Quién hace los cambios si no tengo editor?',
            a: 'El estudio. Cada cambio tiene precio por encargo y se presupuesta antes de hacerse.',
          },
          {
            q: '¿Tengo que firmar un contrato de soporte?',
            a: 'No. No hay cuota. Hay ayuda regular en condiciones acordadas por escrito, si la quieres.',
          },
        ],
      },
    },

    timeline: {
      meta: {
        title: 'Cuánto Tarda una Web: de 4 a 8 Semanas, Paso a Paso',
        description:
          'La mayoría de los proyectos web tardan de cuatro a ocho semanas desde la primera conversación hasta la publicación. Las cinco etapas y qué lo acelera.',
      },
      kicker: 'Plazo',
      title: 'Cuánto tarda una web: de cuatro a ocho semanas',
      lede: 'La mayoría de los proyectos van de la primera conversación a la publicación en cuatro a ocho semanas. La parte lenta nunca es el código; son las decisiones y el contenido.',
      sections: [
        {
          heading: 'Las cinco etapas',
          body: [
            'Conversación: qué vendes, a quién y qué se interpone. Treinta minutos, sin coste.',
            'Propuesta: alcance, precio cerrado y fechas por escrito. Si la respuesta es que no necesitas una web nueva, también lo oyes.',
            'Diseño: la página de inicio primero, para que veas la dirección antes de construir la web entera.',
            'Desarrollo: código, contenido, idiomas y pruebas, con un enlace donde ves cómo va tomando forma.',
            'Lanzamiento: dominio, analítica y configuración de búsqueda, y una revisión una semana después para ver qué hicieron realmente los visitantes.',
          ],
        },
        {
          heading: 'Qué lo hace más rápido',
          body: [
            'Las decisiones y el contenido. El proceso está pensado para tenerlos pronto: para qué sirve cada página, las fotos que tienes, los servicios y precios que quieres mostrar.',
            'Un proyecto con textos e imágenes listos se acerca al plazo corto. Uno que espera un logo nuevo o una sesión de fotos se acerca al largo.',
          ],
        },
        {
          heading: 'Por qué pocos proyectos a la vez',
          body: [
            'El estudio toma uno o dos proyectos a la vez. No esperas detrás de otros clientes, y quien diseña tu web es quien la construye.',
          ],
        },
      ],
      faq: {
        title: 'Preguntas sobre el plazo',
        items: [
          {
            q: '¿Se puede hacer en menos de cuatro semanas?',
            a: 'A veces, para una web pequeña con el contenido listo. Dilo en tu primer mensaje y la propuesta mostrará si las fechas funcionan.',
          },
          {
            q: '¿Cuándo se fijan las fechas?',
            a: 'En la propuesta, junto con el alcance y el precio, antes de empezar cualquier trabajo.',
          },
          {
            q: '¿Qué pasa después del lanzamiento?',
            a: 'Una revisión una semana después para ver qué hizo la gente en la web, y soporte opcional a partir de ahí, con precio por encargo.',
          },
        ],
      },
    },

    ownership: {
      meta: {
        title: '¿De Quién Es tu Web? Tuya, en la Entrega',
        description:
          'En la entrega, la web terminada, su código fuente y el dominio son tuyos, con una explicación de cómo funciona todo. Nada se retiene para atarte al estudio.',
      },
      kicker: 'Propiedad',
      title: 'De quién es la web: tuya, en la entrega',
      lede: 'Cuando termina el proyecto, la web terminada, su código fuente y el dominio son tuyos. Nada se retiene para atarte al estudio.',
      sections: [
        {
          heading: 'Lo que recibes',
          body: [
            'La web terminada y su código fuente, el dominio conectado y una explicación de cómo funciona todo.',
            'Si el logo o la identidad de marca formaron parte del proyecto, los archivos fuente vienen incluidos, y no hay tarifa de renovación por usarlos.',
          ],
        },
        {
          heading: 'Por qué importa',
          body: [
            'Algunas plataformas y agencias, en la práctica, te alquilan la web: dejas de pagar y desaparece; cambias de proveedor y empiezas de cero. Tener el código fuente significa que otro desarrollador puede hacerse cargo cuando quieras.',
          ],
        },
        {
          heading: 'Lo que queda con proveedores externos',
          body: [
            'El hosting, el registro del dominio y cualquier servicio externo se pagan a sus proveedores. La propuesta detalla cada uno, para que sepas qué tienes y quién lo cobra.',
          ],
        },
      ],
      faq: {
        title: 'Preguntas sobre la propiedad',
        items: [
          {
            q: '¿Puedo llevar la web a otro desarrollador?',
            a: 'Sí. Tienes el código fuente, así que otro desarrollador puede hacerse cargo.',
          },
          {
            q: '¿El logo también es mío?',
            a: 'Sí, cuando forma parte del proyecto, incluidos los archivos fuente. No hay licencia que renovar ni nada que volver a pagar.',
          },
          {
            q: '¿Tengo que renovar algo con el estudio?',
            a: 'No. El hosting y el dominio se renuevan con sus proveedores; nada se renueva con el estudio.',
          },
        ],
      },
    },

    multilingual: {
      meta: {
        title: 'Webs Multilingües en Español, Inglés y Portugués',
        description:
          'Webs en español, inglés y portugués, cada idioma en su propia dirección, escritas y no traducidas por máquina, y declaradas a los buscadores.',
      },
      kicker: 'Idiomas',
      title: 'Webs en español, inglés y portugués',
      lede: 'Para negocios cuyos clientes hablan más de un idioma, la web puede publicarse en español, inglés y portugués, cada versión escrita para quien la lee.',
      sections: [
        {
          heading: 'Cada idioma en su propia dirección',
          body: [
            'Cada idioma tiene sus propias páginas y direcciones, con las palabras de la dirección también traducidas, así que quien busca en español llega a una página escrita en español.',
            'Las versiones están enlazadas entre sí y declaradas a los buscadores, para que cada una se muestre a quien busca en ese idioma.',
          ],
        },
        {
          heading: 'Escrito, no traducido por máquina',
          body: [
            'Cada versión se escribe, no se pasa por un traductor automático. Un cliente en Florida y un comprador en Brasil no buscan con las mismas palabras, y el texto sigue cómo habla realmente cada mercado.',
          ],
        },
        {
          heading: 'Para quién es',
          body: [
            'Negocios que viven entre dos países: un salón brasileño en Florida, una artista que vende a Río y a Weston, un chef cuyos clientes hablan tres idiomas entre todos.',
            'No necesitas los tres. Publica en los idiomas que usan tus clientes; el número de idiomas es una de las cosas que hacen variar el precio cerrado.',
          ],
        },
      ],
      faq: {
        title: 'Preguntas sobre idiomas',
        items: [
          {
            q: '¿Necesito los tres idiomas?',
            a: 'No. Uno, dos o tres, según quiénes sean tus clientes.',
          },
          {
            q: '¿Cada idioma aparece en Google?',
            a: 'Cada versión se publica en su propia dirección y se declara a los buscadores, así que la puede encontrar quien busca en ese idioma. Nadie puede prometer una posición.',
          },
          {
            q: '¿Quién escribe los otros idiomas?',
            a: 'El estudio escribe cada versión con tu voz, sin usar traducción automática.',
          },
        ],
      },
    },
  },
}
