import type { Dictionary } from './types'

export const guidesPt: Pick<Dictionary, 'guides' | 'guidePages'> = {
  guides: {
    meta: {
      title: 'Como Funciona | Preço, Custos, Prazo e Propriedade do Site',
      description:
        'Como o projeto de um site é orçado, quanto custa mantê-lo, como editar depois do lançamento, quanto tempo leva, o que é seu e como funcionam os idiomas.',
    },
    kicker: 'Como funciona',
    title: 'O que custa, e o que vem depois',
    lede: 'Preço, custos de manutenção, edição, prazo, propriedade e idiomas, cada um respondido por completo antes de você escrever. Tudo isso também vai por escrito na proposta.',
    cards: {
      pricing: {
        title: 'Preço fixo',
        text: 'Um preço para o trabalho inteiro, por escrito antes de começar, e o que faz ele variar.',
      },
      'running-costs': {
        title: 'Custos depois do ar',
        text: 'Hospedagem e domínio, pagos direto aos fornecedores. Sem assinatura de construtor, sem licença.',
      },
      editing: {
        title: 'Editar depois do lançamento',
        text: 'Um editor simples previsto na proposta, ou você envia as mudanças e elas são feitas, com preço por pedido.',
      },
      timeline: {
        title: '4 a 8 semanas',
        text: 'As cinco etapas da primeira conversa até o ar, e o que deixa o projeto mais rápido.',
      },
      ownership: {
        title: 'Seu na entrega',
        text: 'O site pronto, o código-fonte e o domínio, com uma apresentação. Nada fica retido.',
      },
      multilingual: {
        title: 'Três idiomas',
        text: 'Inglês, português e espanhol, cada um escrito para quem lê e publicado no seu próprio endereço.',
      },
    },
    readMore: 'Saiba mais',
    others: 'Mais sobre como funciona',
  },

  guidePages: {
    pricing: {
      meta: {
        title: 'Preço de Site: Um Preço Fechado, por Escrito',
        description:
          'Como o projeto de um site é orçado: um preço fechado por escrito antes de começar, o que faz o valor variar, o que ele cobre e o que fica de fora.',
      },
      kicker: 'Preço',
      title: 'Quanto custa um site: um preço fechado',
      lede: 'Todo projeto recebe um preço para o trabalho inteiro, por escrito, antes de qualquer coisa começar. O valor orçado é o valor que você paga.',
      sections: [
        {
          heading: 'Por que não existe tabela de preços',
          body: [
            'Um site de uma página em inglês e um site em três idiomas com logo e fotografia novos são trabalhos diferentes. Um único número numa tabela estaria errado para quase todo mundo que o lesse.',
            'Por isso cada projeto é orçado individualmente, depois de uma conversa curta sobre o que você vende, para quem e o que o site precisa fazer. Mande algumas linhas e você recebe escopo e preço de volta, normalmente em um ou dois dias.',
          ],
        },
        {
          heading: 'O que faz o preço variar',
          body: [
            'Três coisas mudam o valor mais do que qualquer outra: o número de páginas, o número de idiomas e se logo, identidade visual ou fotografia fazem parte do trabalho.',
            'Os recursos também contam. Integração com um sistema de agendamento, um editor de conteúdo para você mesmo usar ou um catálogo online acrescentam trabalho, e a proposta diz quais estão incluídos.',
          ],
        },
        {
          heading: 'O que o preço fechado cobre',
          body: [
            'Design e desenvolvimento, textos no seu tom de voz, a base técnica de que os mecanismos de busca precisam, testes em celulares de verdade, o lançamento e uma apresentação na entrega.',
            'Não existe cobrança por hora depois. O que você pedir e não estiver na proposta é orçado à parte antes de começar, então a decisão é sempre sua primeiro.',
          ],
        },
        {
          heading: 'O que fica de fora',
          body: [
            'Hospedagem, domínio e qualquer serviço externo, como uma plataforma de agendamento, são pagos aos seus fornecedores e podem ter taxas próprias. A proposta lista cada um de que o seu site precisa, para o custo total ficar claro antes de você fechar.',
          ],
        },
      ],
      faq: {
        title: 'Perguntas sobre preço',
        items: [
          {
            q: 'Dá para receber um preço antes de uma ligação?',
            a: 'Sim. Mande algumas linhas pela página de contato sobre o que você precisa e você recebe escopo e preço, normalmente em um ou dois dias.',
          },
          {
            q: 'A primeira conversa é gratuita?',
            a: 'Sim. Leva trinta minutos, não custa nada e não tem apresentação de vendas.',
          },
          {
            q: 'E se eu quiser mais do que a proposta cobre?',
            a: 'O trabalho extra é orçado à parte antes de começar. O preço do escopo original não muda.',
          },
        ],
      },
    },

    'running-costs': {
      meta: {
        title: 'Quanto Custa Manter um Site Depois do Lançamento',
        description:
          'Os custos de um site depois do lançamento: hospedagem e domínio pagos aos fornecedores, sem assinatura de construtor de sites e sem licença para renovar.',
      },
      kicker: 'Custos depois do ar',
      title: 'Quanto custa manter um site depois do lançamento',
      lede: 'Depois que o site vai ao ar, os custos regulares são os que ele realmente usa: hospedagem e domínio, pagos direto às empresas que os oferecem.',
      sections: [
        {
          heading: 'Hospedagem e domínio',
          body: [
            'Todo site precisa de um lugar para ficar e de um endereço. Os dois são pagos direto aos fornecedores, e não por meio do estúdio, para você ver exatamente quanto custa cada um.',
            'A hospedagem certa depende do tamanho e do tráfego do site. A proposta indica qual é antes de você fechar.',
          ],
        },
        {
          heading: 'Sem assinatura de construtor de sites',
          body: [
            'Os sites são feitos com frameworks modernos, e não com um construtor de arrastar e soltar. Não há plano mensal de construtor para continuar pagando nem plugin que precise ser renovado para o site funcionar.',
            'Isso também significa que nenhuma plataforma pode subir os preços e prender o seu site a eles.',
          ],
        },
        {
          heading: 'Serviços externos, só quando você precisa',
          body: [
            'Alguns sites dependem da ferramenta de outra empresa: um sistema de agendamento para um salão, um serviço de newsletter, um meio de pagamento online. Esses são cobrados pelos fornecedores, muitas vezes em planos próprios.',
            'A proposta lista todo serviço externo de que o seu site precisa e quem o cobra, para o custo de manutenção ficar conhecido antes de o projeto começar.',
          ],
        },
        {
          heading: 'Suporte é opcional',
          body: [
            'Não há contrato mensal para assinar. Mudanças depois do lançamento são orçadas por pedido, ou em condições combinadas por escrito se você quiser ajuda regular.',
          ],
        },
      ],
      faq: {
        title: 'Perguntas sobre custos',
        items: [
          {
            q: 'Para quem eu pago a hospedagem?',
            a: 'Direto para o provedor de hospedagem. A proposta indica qual provedor o seu site precisa.',
          },
          {
            q: 'Existe uma mensalidade para o estúdio?',
            a: 'Não. O suporte depois do lançamento é opcional e cobrado por pedido, ou em condições combinadas por escrito se você quiser ajuda regular.',
          },
          {
            q: 'Preciso renovar alguma licença?',
            a: 'Não. O site pronto e o código-fonte são seus na entrega, então não há nada para renovar com o estúdio.',
          },
        ],
      },
    },

    editing: {
      meta: {
        title: 'Como Editar o Site Depois do Lançamento',
        description:
          'Duas formas de mudar o site depois do lançamento: um editor simples para textos, fotos e preços previsto na proposta, ou enviar as mudanças e pagar por pedido.',
      },
      kicker: 'Editar depois do lançamento',
      title: 'Como editar o seu site depois do lançamento',
      lede: 'Um site muda depois que vai ao ar: preços novos, fotos novas, um serviço novo. Há duas formas de lidar com isso, e você escolhe antes de o projeto começar.',
      sections: [
        {
          heading: 'Um editor simples',
          body: [
            'Se você vai mudar textos, imagens, preços ou listas com frequência, dá para incluir um editor de conteúdo simples. Ele entra na proposta, então faz parte do preço fechado e não vira um extra depois.',
            'Ele é montado em torno do que você realmente muda, como uma tabela de preços, um cardápio, uma galeria ou o horário de funcionamento.',
          ],
        },
        {
          heading: 'Ou envie a mudança',
          body: [
            'Se as mudanças são ocasionais, talvez você nem precise de um editor. Você envia o que quer mudar e a alteração é feita para você, com preço por pedido, orçado antes.',
            'Muitos pequenos negócios preferem assim: nada novo para aprender, e o site continua com a cara com que foi desenhado.',
          ],
        },
        {
          heading: 'Qual escolher',
          body: [
            'Um salão que muda preços a cada estação, ou um artesão que coloca peças novas todo mês, costuma se dar melhor com o editor. Um fotógrafo que atualiza o portfólio duas vezes por ano, normalmente não.',
            'Você sabe qual se aplica ao seu site antes de o projeto começar, e a apresentação na entrega cobre a opção escolhida.',
          ],
        },
      ],
      faq: {
        title: 'Perguntas sobre edição',
        items: [
          {
            q: 'Dá para colocar um editor depois?',
            a: 'Sim, orçado como qualquer outra mudança. É mais simples planejar desde o início, por isso a pergunta aparece antes da proposta.',
          },
          {
            q: 'Quem faz as mudanças se eu não tiver editor?',
            a: 'O estúdio. Cada mudança tem preço por pedido e é orçada antes de ser feita.',
          },
          {
            q: 'Preciso assinar um contrato de suporte?',
            a: 'Não. Não há mensalidade. Ajuda regular existe em condições combinadas por escrito, se você quiser.',
          },
        ],
      },
    },

    timeline: {
      meta: {
        title: 'Quanto Tempo Leva um Site: 4 a 8 Semanas, Passo a Passo',
        description:
          'A maioria dos projetos de site leva de quatro a oito semanas da primeira conversa até o ar. As cinco etapas, o que acontece em cada uma e o que acelera.',
      },
      kicker: 'Prazo',
      title: 'Quanto tempo leva um site: de quatro a oito semanas',
      lede: 'A maioria dos projetos vai da primeira conversa até o ar em quatro a oito semanas. A parte lenta nunca é o código; são as decisões e o conteúdo.',
      sections: [
        {
          heading: 'As cinco etapas',
          body: [
            'Conversa: o que você vende, para quem e o que atrapalha. Trinta minutos, sem custo.',
            'Proposta: escopo, preço fechado e datas por escrito. Se a resposta for que você não precisa de um site novo, você também ouve isso.',
            'Design: a página inicial primeiro, para você ver a direção antes de o site inteiro ser feito.',
            'Desenvolvimento: código, conteúdo, idiomas e testes, com um link onde você acompanha tudo tomando forma.',
            'Lançamento: domínio, analytics e configuração de busca, e uma conferência uma semana depois para ver o que os visitantes realmente fizeram.',
          ],
        },
        {
          heading: 'O que deixa mais rápido',
          body: [
            'Decisões e conteúdo. O processo foi pensado para trazê-los cedo: para que serve cada página, as fotos que você tem, os serviços e preços que você quer mostrar.',
            'Um projeto com textos e imagens prontos fica mais perto do prazo curto. Um que depende de uma logo nova ou de uma sessão de fotos fica mais perto do longo.',
          ],
        },
        {
          heading: 'Por que poucos projetos por vez',
          body: [
            'O estúdio pega um ou dois projetos por vez. Você não espera atrás de outros clientes, e quem desenha o seu site é quem o desenvolve.',
          ],
        },
      ],
      faq: {
        title: 'Perguntas sobre prazo',
        items: [
          {
            q: 'Dá para fazer em menos de quatro semanas?',
            a: 'Às vezes, para um site pequeno com o conteúdo pronto. Diga isso na primeira mensagem e a proposta mostra se as datas funcionam.',
          },
          {
            q: 'Quando as datas são definidas?',
            a: 'Na proposta, junto com o escopo e o preço, antes de qualquer trabalho começar.',
          },
          {
            q: 'O que acontece depois do lançamento?',
            a: 'Uma conferência uma semana depois para ver o que as pessoas realmente fizeram no site, e suporte opcional depois disso, com preço por pedido.',
          },
        ],
      },
    },

    ownership: {
      meta: {
        title: 'De Quem É o Site? Seu, na Entrega',
        description:
          'Na entrega, o site pronto, o código-fonte e o domínio são seus, com uma apresentação de como tudo funciona. Nada fica retido para prender você ao estúdio.',
      },
      kicker: 'Propriedade',
      title: 'De quem é o site: seu, na entrega',
      lede: 'Quando o projeto termina, o site pronto, o código-fonte e o domínio são seus. Nada fica retido para prender você ao estúdio.',
      sections: [
        {
          heading: 'O que você recebe',
          body: [
            'O site pronto e o código-fonte, o domínio conectado e uma apresentação de como tudo funciona.',
            'Se logo ou identidade visual fizeram parte do projeto, os arquivos-fonte vêm junto, e não existe taxa de renovação para usá-los.',
          ],
        },
        {
          heading: 'Por que isso importa',
          body: [
            'Algumas plataformas e agências, na prática, alugam o site para você: parou de pagar, ele some; mudou de fornecedor, começa do zero. Ter o código-fonte significa que outro desenvolvedor pode assumir quando você quiser.',
          ],
        },
        {
          heading: 'O que fica com fornecedores externos',
          body: [
            'Hospedagem, registro do domínio e qualquer serviço externo são pagos aos seus fornecedores. A proposta lista cada um, para você saber o que tem e quem cobra.',
          ],
        },
      ],
      faq: {
        title: 'Perguntas sobre propriedade',
        items: [
          {
            q: 'Posso levar o site para outro desenvolvedor?',
            a: 'Sim. O código-fonte é seu, então outro desenvolvedor pode assumir.',
          },
          {
            q: 'A logo também é minha?',
            a: 'Sim, quando faz parte do projeto, incluindo os arquivos-fonte. Não há licença para renovar nem nada para pagar de novo.',
          },
          {
            q: 'Tenho que renovar algo com o estúdio?',
            a: 'Não. Hospedagem e domínio são renovados com os fornecedores; nada é renovado com o estúdio.',
          },
        ],
      },
    },

    multilingual: {
      meta: {
        title: 'Sites Multilíngues em Português, Inglês e Espanhol',
        description:
          'Sites em português, inglês e espanhol, cada idioma no seu próprio endereço, escritos e não traduzidos por máquina, e declarados aos mecanismos de busca.',
      },
      kicker: 'Idiomas',
      title: 'Sites em português, inglês e espanhol',
      lede: 'Para negócios cujos clientes falam mais de um idioma, o site pode ser publicado em português, inglês e espanhol, cada versão escrita para quem lê.',
      sections: [
        {
          heading: 'Cada idioma no seu endereço',
          body: [
            'Cada idioma tem as suas próprias páginas e endereços, com as palavras do endereço também traduzidas, então quem busca em português cai numa página escrita em português.',
            'As versões são ligadas entre si e declaradas aos mecanismos de busca, para cada uma ser mostrada a quem busca naquele idioma.',
          ],
        },
        {
          heading: 'Escrito, não traduzido por máquina',
          body: [
            'Cada versão é escrita, e não passada por um tradutor automático. Um cliente na Flórida e um comprador no Brasil não buscam com as mesmas palavras, e o texto acompanha como cada mercado realmente fala.',
          ],
        },
        {
          heading: 'Para quem é',
          body: [
            'Negócios que vivem entre dois países: um salão brasileiro na Flórida, uma artista que vende para o Rio e para Weston, um chef cujos clientes falam três idiomas entre eles.',
            'Você não precisa dos três. Publique nos idiomas que os seus clientes usam; o número de idiomas é uma das coisas que fazem o preço fechado variar.',
          ],
        },
      ],
      faq: {
        title: 'Perguntas sobre idiomas',
        items: [
          {
            q: 'Preciso dos três idiomas?',
            a: 'Não. Um, dois ou três, dependendo de quem são os seus clientes.',
          },
          {
            q: 'Cada idioma aparece no Google?',
            a: 'Cada versão é publicada no seu próprio endereço e declarada aos mecanismos de busca, então pode ser encontrada por quem busca naquele idioma. Ninguém pode prometer uma posição.',
          },
          {
            q: 'Quem escreve os outros idiomas?',
            a: 'O estúdio escreve cada versão no seu tom de voz, sem usar tradução automática.',
          },
        ],
      },
    },
  },
}
