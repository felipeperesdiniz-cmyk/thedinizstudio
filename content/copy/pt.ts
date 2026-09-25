import type { Dictionary } from './types'

export const pt: Dictionary = {
  meta: {
    siteName: 'The Diniz Studio',
    tagline: 'Criação de sites, identidade visual e marketing, em três idiomas.',
  },

  nav: {
    work: 'Projetos',
    services: 'Serviços',
    about: 'Estúdio',
    contact: 'Contato',
    language: 'Idioma',
    skip: 'Ir para o conteúdo',
  },

  cta: {
    label: 'Começar um projeto',
    title: 'Precisa de um site novo?',
    text: 'Conte o que você vende e para quem. Você recebe uma resposta direta sobre escopo e prazo, e um orçamento fechado por escrito. Apenas contatos sérios.',
  },

  home: {
    meta: {
      title: 'The Diniz Studio | Criação de Sites, Identidade Visual e Marketing',
      description:
        'Estúdio de criação de sites sob medida, identidade visual e o marketing em volta disso. Trabalho em português, inglês e espanhol para pequenos negócios no Brasil e nos Estados Unidos.',
    },
    h1: 'The Diniz Studio. Criação de sites, identidade visual e marketing.',
    intro: {
      kicker: 'O que é isto',
      title: 'Um estúdio para o site, a marca e o marketing',
      body: [
        'A maioria dos pequenos negócios acaba com três fornecedores que nunca se falam: um faz o site, outro desenha a logo, outro publica no Instagram. Nada combina e ninguém responde pela pergunta que importa, que é se o telefone toca.',
        'Aqui os três saem do mesmo lugar. A logo, o site e os posts nascem das mesmas decisões, então quem encontra você no Google, no Instagram ou por indicação encontra sempre o mesmo negócio.',
        'Cada site é escrito e programado do zero, em português, inglês e espanhol quando o público precisa, e preparado para ser lido corretamente por buscadores e por assistentes de inteligência artificial.',
      ],
    },
    services: {
      kicker: 'Serviços',
      title: 'Três coisas, bem feitas',
      text: 'Um site que vende, uma identidade que segura tudo junto, e o trabalho de busca e redes que traz gente até lá.',
      link: 'Ver todos os serviços',
    },
    work: {
      kicker: 'Projetos selecionados',
      title: 'Quatro negócios, quatro problemas',
      text: 'Uma bordadeira, um salão, um fotógrafo e uma confeiteira. Cada projeto conta o que foi feito e o que mudou depois.',
      link: 'Ver todos os projetos',
    },
    answers: {
      kicker: 'Respostas diretas',
      title: 'O que perguntam antes de contratar',
      link: 'Ver todas as perguntas',
      items: [
        {
          slug: 'como-eu-recebo-um-orcamento',
          q: 'Como eu recebo um orçamento?',
          a: 'Cada projeto é orçado sozinho, porque um site de uma página e um site trilíngue com logo e fotografia não são o mesmo trabalho. Conte o que você precisa e recebe um preço fechado por escrito antes de qualquer coisa começar. Contatos sérios, por favor.',
        },
        {
          slug: 'quanto-tempo-leva',
          q: 'Quanto tempo leva?',
          a: 'De quatro a oito semanas na maioria dos projetos, da primeira conversa até o ar. A parte lenta nunca é o código, são as decisões e o conteúdo, e o processo é montado para tirar isso de você logo no começo.',
        },
        {
          slug: 'voce-faz-em-mais-de-um-idioma',
          q: 'Você faz em mais de um idioma?',
          a: 'Faço. Português, inglês e espanhol, cada um no seu endereço e declarado ao Google, para que uma busca em qualquer um dos três caia em uma página escrita naquele idioma, e não em uma tradução automática.',
        },
        {
          slug: 'voce-so-faz-sites',
          q: 'Você só faz sites?',
          a: 'Não. Também logo e identidade visual, direção de fotografia, redes sociais, Perfil da Empresa no Google e SEO local. Muitos clientes começam pelo site e seguem com o estúdio cuidando do marketing.',
        },
        {
          slug: 'com-o-que-voce-constroi',
          q: 'Com o que você constrói?',
          a: 'Código próprio, não construtor de páginas. É por isso que esses sites carregam rápido, aparecem bem na busca e podem ser alterados sem depender de assinatura nenhuma.',
        },
      ],
    },
  },

  work: {
    meta: {
      title: 'Projetos | Sites, Identidade Visual e Marketing',
      description:
        'Casos do The Diniz Studio: sites sob medida, logos e identidade visual, redes sociais e SEO local para uma bordadeira, um salão de beleza, um fotógrafo e uma confeiteira.',
    },
    kicker: 'Projetos',
    title: 'Cada projeto, por inteiro',
    lede: 'O que o negócio precisava, o que foi feito e o que mudou. Cada projeto leva ao site no ar.',
    viewProject: 'Ver o caso',
    caseStudy: 'Ver o caso',
    visitSite: 'Visitar o site',
    allWork: 'Todos os projetos',
    nextProject: 'Próximo projeto',
  },

  caseStudy: {
    scope: 'Escopo',
    where: 'Onde',
    live: 'No ar',
    identity: 'Identidade',
    type: 'Tipografia',
    theSite: 'O site',
  },

  player: {
    soundOn: 'Ligar som',
    soundOff: 'Desligar som',
  },

  services: {
    meta: {
      title: 'Serviços | Criação de Sites, Identidade Visual e Marketing',
      description:
        'Criação e desenvolvimento de sites sob medida, logo e identidade visual, e o marketing que vem depois: redes sociais, Perfil da Empresa no Google e SEO local. Em português, inglês e espanhol.',
    },
    kicker: 'Serviços',
    title: 'O que o estúdio faz',
    lede: 'Três serviços que funcionam como um. Leve tudo, ou só a parte que está faltando.',
    cards: {
      'web-design': {
        title: 'Criação de sites',
        text: 'Sites escritos do zero: rápidos, multilíngues e feitos para transformar visita em contato.',
        proof: [
          { value: '3', label: 'Idiomas por site' },
          { value: '~1s', label: 'Carregamento no celular' },
          { value: '0', label: 'Modelos prontos' },
        ],
      },
      'brand-identity': {
        title: 'Identidade visual',
        text: 'Logo, cor, tipografia e as regras que seguram tudo, desenhadas para como o seu negócio realmente vende.',
        proof: [
          { value: '0', label: 'Mensalidade de licença' },
          { value: 'Seus', label: 'Arquivos de origem inclusos' },
        ],
      },
      'marketing-seo': {
        title: 'Marketing e SEO',
        text: 'Ser encontrado e ser seguido: busca local, Perfil da Empresa no Google, redes sociais e o conteúdo por trás disso.',
        proof: [
          { value: '+200%', label: 'Crescimento no Instagram de cliente' },
          { value: '1,5 mil+', label: 'Seguidores do estúdio' },
          { value: '27', label: 'Avaliações cinco estrelas conquistadas' },
        ],
      },
    },
    readMore: 'Ler mais',
    related: 'Projetos deste serviço',
    reels: 'Reels feitos para clientes',
  },

  servicePages: {
    'web-design': {
      meta: {
        title: 'Criação de Sites | Sites Sob Medida para Pequenos Negócios',
        description:
          'Criação e desenvolvimento de sites sob medida para pequenos negócios. Feitos à mão, rápidos, multilíngues e pensados para o cliente achar você e fechar. Português, inglês e espanhol.',
      },
      kicker: 'Serviço',
      title: 'Criação de sites',
      lede: 'Um site feito para o seu negócio, e não adaptado de um modelo que outra pessoa já está usando.',
      body: [
        'Quem procura um site novo normalmente está resolvendo um de três problemas: o site atual não tem a mesma qualidade do trabalho, ele é lento ou quebrado no celular, ou as pessoas entram e nunca entram em contato. Os três têm solução, e os três dependem da mesma coisa: decidir para que serve o site antes de alguém abrir qualquer programa de design.',
        'Cada página aqui é escrita e programada à mão. Sem construtor de páginas, sem tema pronto, sem licença mensal de um plugin que um dia quebra. É por isso que esses sites carregam em cerca de um segundo no celular, se sustentam no Google e podem ser lidos com clareza por assistentes de inteligência artificial quando alguém pede uma indicação.',
        'Quando faz sentido, o site é publicado em português, inglês e espanhol. Cada idioma ganha o seu endereço e o seu texto, escrito e não traduzido por máquina, que é o que faz você aparecer em uma busca feita em qualquer um dos três.',
      ],
      included: {
        title: 'O que você recebe',
        items: [
          {
            title: 'Uma estrutura construída em volta da venda',
            text: 'Páginas na ordem em que o cliente decide de verdade, terminando em um agendamento, um orçamento ou uma mensagem, e não em um beco sem saída.',
          },
          {
            title: 'Design e desenvolvimento',
            text: 'Layout, tipografia, movimento e código. Tudo responsivo, testado em celulares de verdade, e seu para sempre.',
          },
          {
            title: 'Textos que trabalham',
            text: 'Redação na sua voz, incluindo as páginas de serviço que respondem ao que as pessoas digitam na busca.',
          },
          {
            title: 'Um, dois ou três idiomas',
            text: 'Português, inglês e espanhol, cada um publicado do jeito certo e declarado aos buscadores.',
          },
          {
            title: 'SEO técnico desde o início',
            text: 'Dados estruturados, sitemap, títulos limpos, imagens leves. As coisas que decidem se você é encontrado.',
          },
          {
            title: 'Entrega e suporte',
            text: 'Você recebe o código, a configuração do domínio e uma explicação. Alterações depois são cobradas por serviço, nunca por assinatura obrigatória.',
          },
        ],
      },
      process: {
        title: 'Como funciona',
        steps: [
          {
            title: 'Conversa',
            text: 'O que você vende, quem compra, o que atrapalha. Trinta minutos, sem custo e sem apresentação de vendas.',
          },
          {
            title: 'Proposta',
            text: 'Escopo, preço fechado e datas por escrito. Se a resposta for que você não precisa de um site novo, você também ouve isso.',
          },
          {
            title: 'Design',
            text: 'A home primeiro, para você ver a direção antes de tudo estar construído.',
          },
          {
            title: 'Construção',
            text: 'Desenvolvimento, conteúdo, idiomas e testes, com um link para você acompanhar.',
          },
          {
            title: 'Lançamento',
            text: 'Domínio, analytics, configuração de busca e uma conferida uma semana depois para ver o que as pessoas realmente fizeram.',
          },
        ],
      },
      faq: {
        title: 'Perguntas',
        items: [
          {
            slug: 'preciso-de-um-site-novo-por-onde-comecar',
            q: 'Preciso de um site novo. Por onde a gente começa?',
            a: 'Por uma conversa sobre o negócio, não sobre o site. Mande uma mensagem dizendo o que você faz e de onde vêm os clientes hoje, e em um ou dois dias você recebe escopo e preço.',
          },
          {
            slug: 'como-o-projeto-e-orcado',
            q: 'Como o projeto é orçado?',
            a: 'Como um preço fechado para o trabalho inteiro, por escrito, antes de começar. Ele muda com o número de páginas, de idiomas e com a inclusão de fotografia e logo. O valor da proposta é o valor que você paga, e não existe cobrança por hora depois.',
          },
          {
            slug: 'da-para-reformar-o-site-que-eu-ja-tenho',
            q: 'Dá para reformar o site que eu já tenho?',
            a: 'Dá, e muitas vezes é a resposta mais barata. Se a estrutura está boa e o problema é design e velocidade, a reforma é mais rápida e custa menos do que começar do zero.',
          },
          {
            slug: 'preciso-de-wordpress-wix-ou-squarespace',
            q: 'Eu preciso de Wordpress, Wix ou Squarespace?',
            a: 'Não precisa. Essas ferramentas fazem sentido quando ninguém vai cuidar do site. Um site feito à mão entrega um resultado mais rápido e mais seguro, sem mensalidade, e sem prender você a uma plataforma que muda de preço quando quer.',
          },
          {
            slug: 'vou-conseguir-atualizar-o-site-sozinho',
            q: 'Vou conseguir atualizar sozinho?',
            a: 'Se você quiser editar textos e imagens, o site vem com um editor simples por trás. Muitos clientes preferem mandar as alterações, e isso é cobrado por serviço.',
          },
          {
            slug: 'como-sei-que-vai-aparecer-no-google',
            q: 'Como eu sei que vai aparecer no Google?',
            a: 'Quem decide isso é estrutura, velocidade e conteúdo, e os três fazem parte da construção: uma página por coisa que você vende, títulos limpos, dados estruturados e um Perfil da Empresa no Google se você atende uma cidade. Posição se conquista ao longo de meses, e você acompanha isso nos relatórios.',
          },
        ],
      },
    },

    'brand-identity': {
      meta: {
        title: 'Identidade Visual e Criação de Logo para Pequenos Negócios',
        description:
          'Criação de logo e identidade visual: cor, tipografia e as regras que seguram tudo, desenhadas para pequenos negócios e feitas para funcionar da vitrine ao site e ao Instagram.',
      },
      kicker: 'Serviço',
      title: 'Identidade visual',
      lede: 'A logo é a menor parte disso. A identidade é o que faz o cliente reconhecer você na segunda vez.',
      body: [
        'A maioria chega aqui com uma logo feita às pressas, uma cor que só existe em um arquivo e nenhuma ideia de qual fonte usar para imprimir um cardápio. Funciona até você precisar de site, tabela de preços e feed no Instagram ao mesmo tempo, e nada combinar.',
        'Uma identidade resolve isso decidindo poucas coisas e sustentando essas poucas coisas: uma ou duas tipografias, uma paleta que funciona na tela e no papel, uma marca que se lê no tamanho de um ícone de celular, e regras simples do que vai onde.',
        'O trabalho é desenhado em cima do que você vende de verdade. Uma bordadeira e um salão precisam de coisas diferentes de uma logo, e nenhum dos dois precisa de um símbolo que poderia ser de uma empresa de tecnologia.',
      ],
      included: {
        title: 'O que você recebe',
        items: [
          {
            title: 'A marca',
            text: 'Uma logo desenhada para o seu ramo, entregue em todos os formatos que vão te pedir, em cor e em preto.',
          },
          {
            title: 'Cor e tipografia',
            text: 'Uma paleta com valores exatos e um par de tipografias licenciadas para impressão, web e redes.',
          },
          {
            title: 'Como usar',
            text: 'Regras claras de espaço, tamanhos e do que não fazer, para uma gráfica ou um fotógrafo seguirem sem te ligar.',
          },
          {
            title: 'Aplicada em algo real',
            text: 'A identidade funcionando nas coisas que você usa: o site, um cartão, uma etiqueta, um feed.',
          },
        ],
      },
      process: {
        title: 'Como funciona',
        steps: [
          {
            title: 'Perguntas',
            text: 'Quem compra de você, com quem te comparam, e o que você quer que a pessoa sinta ao ver o seu nome.',
          },
          {
            title: 'Direção',
            text: 'Dois caminhos, mostrados em aplicações reais e não em uma tela em branco.',
          },
          {
            title: 'Desenho',
            text: 'Um caminho levado até o fim: a marca, a paleta, a tipografia e as regras.',
          },
          {
            title: 'Entrega',
            text: 'Todos os arquivos organizados, mais um guia curto que qualquer pessoa que você contratar consegue seguir.',
          },
        ],
      },
      faq: {
        title: 'Perguntas',
        items: [
          {
            slug: 'a-logo-e-orcada-separada',
            q: 'A logo é orçada separada?',
            a: 'Pode ser, mas a maior parte do trabalho de identidade aqui é orçada junto com o site. Fazer os dois de uma vez custa menos do que comprar separado e evita que um contradiga o outro.',
          },
          {
            slug: 'ja-tenho-uma-logo-da-para-manter',
            q: 'Já tenho uma logo. Dá para manter?',
            a: 'Dá, e acontece bastante. A marca fica e tudo em volta é construído para ela finalmente ter onde morar. O Blend Hair Boutique, na seção de projetos, é exatamente isso.',
          },
          {
            slug: 'quanto-tempo-leva-uma-logo',
            q: 'Quanto tempo leva?',
            a: 'De duas a quatro semanas sozinha, ou dentro do prazo do site se você fizer os dois.',
          },
          {
            slug: 'a-logo-e-minha',
            q: 'A logo é minha?',
            a: 'É, inteiramente, incluindo os arquivos de origem. Não há licença para renovar nem nada para pagar de novo.',
          },
        ],
      },
    },

    'marketing-seo': {
      meta: {
        title: 'Marketing e SEO Local para Pequenos Negócios',
        description:
          'SEO local, criação e gestão do Perfil da Empresa no Google, redes sociais e conteúdo. Seja encontrado quando procurarem o que você vende, em português, inglês ou espanhol.',
      },
      kicker: 'Serviço',
      title: 'Marketing e SEO',
      lede: 'Um site que ninguém acha é um cartão de visita. Esta é a parte que leva gente até ele.',
      body: [
        'Ser encontrado deixou de ser uma coisa só. A pessoa pode digitar o serviço e a cidade no Google, pedir uma indicação a um assistente de inteligência artificial, ou passar por você no Instagram. Os três se ganham com o mesmo material: páginas claras que respondem perguntas reais, um perfil completo e ativo, e posts com a cara do negócio a que pertencem.',
        'O trabalho começa pelas buscas que os seus clientes realmente fazem, no idioma em que fazem. Elas viram páginas, e as páginas viram o que o Google mostra e o que um assistente cita quando responde.',
        'Para quem vende para a própria cidade, o Perfil da Empresa no Google costuma valer mais do que qualquer outra coisa desta lista. Ele é criado do jeito certo, preenchido com fotografia e mantido vivo com publicações e respostas.',
      ],
      included: {
        title: 'O que entra',
        items: [
          {
            title: 'SEO local',
            text: 'Uma página por coisa que você vende, dados estruturados e os sinais locais que decidem se você aparece no mapa.',
          },
          {
            title: 'Perfil da Empresa no Google',
            text: 'Criado ou arrumado, categorias e área de atendimento corretas, fotografia carregada, publicações e respostas a avaliações.',
          },
          {
            title: 'Redes sociais',
            text: 'Direção, fotografia, legendas e agendamento, nas mesmas cores e tipografia de tudo o que é seu.',
          },
          {
            title: 'Conteúdo que responde',
            text: 'As perguntas que o cliente faz antes de comprar, escritas direito, que é o que buscadores e assistentes premiam.',
          },
          {
            title: 'Relatório em português claro',
            text: 'O que buscaram, o que clicaram e o que fizeram depois. Sem painel que você precisa decifrar.',
          },
        ],
      },
      process: {
        title: 'Como funciona',
        steps: [
          {
            title: 'Diagnóstico',
            text: 'Onde você aparece hoje, o que está faltando e o que os concorrentes estão ganhando que você não.',
          },
          {
            title: 'Arrumar a base',
            text: 'O site, o perfil e os dados estruturados, nessa ordem. Não adianta divulgar uma página que não pode ser lida.',
          },
          {
            title: 'Publicar',
            text: 'Páginas de serviço, respostas e posts, em um calendário que você enxerga.',
          },
          {
            title: 'Revisar',
            text: 'Todo mês, em linguagem simples, com o mês seguinte decidido pelo que aconteceu no anterior.',
          },
        ],
      },
      faq: {
        title: 'Perguntas',
        items: [
          {
            slug: 'em-quanto-tempo-vejo-resultado-de-seo',
            q: 'Em quanto tempo vejo resultado?',
            a: 'Um Perfil da Empresa no Google pode mudar o volume de ligações em semanas. Colocar uma página de serviço no topo costuma levar de dois a seis meses, dependendo da concorrência na sua cidade.',
          },
          {
            slug: 'da-para-aparecer-no-chatgpt-e-em-outras-respostas-de-ia',
            q: 'Dá para aparecer no ChatGPT e em outras respostas de IA?',
            a: 'Ninguém garante isso, e quem garante está vendendo alguma coisa. O que funciona é ser a fonte mais clara sobre o assunto: páginas que dizem com todas as letras o que você faz, para quem faz e onde, marcadas para uma máquina conseguir ler. É assim que este site é feito, e é assim que o seu será.',
          },
          {
            slug: 'preciso-assinar-por-varios-meses',
            q: 'Preciso assinar por vários meses?',
            a: 'Não. O diagnóstico e os ajustes são um serviço avulso. O acompanhamento é mensal e você pode parar quando quiser.',
          },
          {
            slug: 'em-qual-idioma-eu-devo-publicar',
            q: 'Em qual idioma eu devo publicar?',
            a: 'No idioma em que os seus clientes buscam, que muitas vezes é mais de um. No sul da Flórida isso costuma significar inglês, português e espanhol, e cada um é uma chance a mais de ser encontrado.',
          },
        ],
      },
    },
  },

  about: {
    meta: {
      title: 'O Estúdio | Quem Você Está Contratando',
      description:
        'The Diniz Studio é um estúdio pequeno de criação de sites e identidade visual, trabalhando em português, inglês e espanhol para pequenos negócios no Brasil e nos Estados Unidos.',
    },
    kicker: 'Estúdio',
    title: 'Você contrata uma pessoa, não um departamento',
    lede: 'Um designer e programador, poucos projetos por vez, e nenhum gerente de contas entre você e o trabalho.',
    body: [
      'O The Diniz Studio é tocado por Felipe Diniz. A mesma pessoa responde a sua primeira mensagem, desenha o site, escreve o código e atende o telefone seis meses depois quando você quiser mudar alguma coisa.',
      'É por isso que são poucos projetos ao mesmo tempo. Você não fica atrás de uma fila, e nada é repassado para um estagiário numa sexta à tarde.',
      'O estúdio trabalha em português, inglês e espanhol, e é por isso que tanta coisa aqui é para negócios que vivem entre dois países: um salão brasileiro na Flórida, uma artista que vende para o Rio e para Weston, uma chef cujos clientes falam três idiomas entre eles.',
      'O trabalho é honesto sobre o que consegue fazer. Se um site novo não é o que o seu negócio precisa, você ouve isso na primeira conversa, e não custa nada.',
    ],
    facts: [
      { label: 'Fundado por', value: 'Felipe Diniz' },
      { label: 'Idiomas', value: 'Português, inglês, espanhol' },
      { label: 'Clientes em', value: 'Brasil e Estados Unidos' },
      { label: 'Projetos por vez', value: 'Um ou dois' },
      { label: 'Feito com', value: 'Código próprio, sem construtor de páginas' },
    ],
  },

  faq: {
    meta: {
      title: 'Perguntas Frequentes | Respostas Diretas Antes de Contratar',
      description:
        'Preço, prazo, idiomas e o que está incluso, respondido sem enrolação antes de você chamar. Uma página por pergunta.',
    },
    kicker: 'Perguntas',
    title: 'Respostas diretas',
    lede: 'O que perguntam antes de contratar, respondido por completo — uma página por pergunta.',
    backLink: 'Todas as perguntas',
    moreQuestions: 'Mais perguntas',
  },

  contact: {
    meta: {
      title: 'Contato | Começar um Projeto',
      description:
        'Conte o que você precisa: um site novo, logo e identidade visual, ou o marketing em volta disso. Resposta normalmente em um dia, em português, inglês ou espanhol.',
    },
    kicker: 'Contato',
    title: 'Começar um projeto',
    lede: 'Isso começa com uma conversa, não um formulário. Você recebe uma resposta direta sobre escopo e prazo, um orçamento fechado por escrito, e retorno em até um dia útil — da pessoa que de fato faz o trabalho.',
    form: {
      name: 'Seu nome',
      email: 'E-mail',
      project: 'Do que você precisa?',
      projectOptions: [
        'Um site novo',
        'Reformar o meu site',
        'Logo e identidade visual',
        'Marketing e SEO',
        'Outra coisa',
      ],
      message: 'Conte um pouco',
      submit: 'Enviar',
      note: 'Isto abre o seu aplicativo de e-mail com a mensagem pronta para enviar.',
      errors: {
        name: 'Digite seu nome.',
        email: 'Digite um e-mail válido.',
        message: 'Conte um pouco sobre o projeto.',
      },
    },
    direct: { email: 'E-mail', whatsapp: 'WhatsApp', instagram: 'Instagram' },
  },

  footer: {
    sections: { work: 'Projetos', services: 'Serviços', studio: 'Estúdio' },
    rights: 'Todos os direitos reservados.',
  },

  projects: {
    'bordados-com-amor-by-mari': {
      meta: {
        title: 'Bordados com Amor | Site, Logo e Redes Sociais',
        description:
          'Site trilíngue, logo bordada e Instagram gerenciado para uma artista do bordado à mão. A conta triplicou desde o lançamento, sem um centavo de anúncio.',
      },
      sector: 'Bordado à mão',
      highlight: '+200% de crescimento no Instagram, tudo orgânico',
      lede: 'Uma logo bordada, um site em três idiomas e um Instagram que triplicou sem um centavo de anúncio.',
      description:
        'Bordado à mão, uma peça por vez. O site é construído no ritmo do trabalho: um processo contado em cinco movimentos e um arquivo catalogado em que cada peça carrega as palavras bordadas nela. Publicado em português, inglês e espanhol.',
      alt: 'bordadoscomamorbymari.com, site de artista do bordado à mão criado pelo The Diniz Studio',
      location: 'Weston, FL e Rio de Janeiro',
      services: [
        'Criação de logo',
        'Identidade visual',
        'Redes sociais',
        'Direção de arte',
        'Design do site',
        'Desenvolvimento',
      ],
      identity: {
        title: 'Uma logo feita do jeito que o trabalho é feito',
        text: 'Cada letra é bordada em vez de desenhada, então a logo mostra o ofício em vez de descrevê-lo. Ela se sustenta no tamanho de uma foto de perfil e em uma etiqueta costurada na peça, que é o que uma artesã realmente precisa de uma marca.',
        type: [
          { name: 'Cormorant Garamond', role: 'Títulos' },
          { name: 'Instrument Sans', role: 'Interface' },
        ],
      },
      figures: [
        {
          value: '+200%',
          label: 'Crescimento no Instagram',
          note: 'Desde o lançamento, sem anúncio.',
        },
        { value: '3', label: 'Idiomas', note: 'Português, inglês e espanhol.' },
        { value: '1', label: 'Estúdio, de ponta a ponta', note: 'Logo, feed, legendas e site.' },
      ],
      chapters: [
        {
          kicker: 'Redes sociais',
          title: 'Crescido, não comprado',
          text: 'O estúdio cuida da conta de ponta a ponta: direção, fotografia, escrita e agendamento. Ela triplicou desde o lançamento sem um único post patrocinado, e cada peça disso conversa com o site.',
        },
        {
          kicker: 'Fotografia e vídeo',
          title: 'Cada peça carrega uma palavra',
          text: 'Uma frase lida de madrugada, bordada à mão e depois fotografada onde ela pertence: na grama, contra a casca da árvore, na última luz da tarde. Uma sessão alimenta o feed, os stories e o site.',
          captions: [
            '“Nada é em vão. Se não é benção, é lição.”',
            'Uma peça emoldurada, esperando na grama',
            '“Amor”, em uma folha recolhida do chão',
            '“Gratidão”, bordada em uma folha preservada',
            'A mesma folha, levada para a luz',
          ],
          videoCaption: 'Reels produzido para a conta dela',
        },
      ],
      screens: ['Home', 'Folhas Bordadas', 'Processo', 'Arquivo'],
      quote: {
        text: 'Eu queria algo limpo, mas ainda feito à mão e pessoal, e ele entendeu exatamente o que eu quis dizer. Até os detalhinhos parecem pertencer à marca. Finalmente parece o meu site.',
        name: 'Mariana',
        role: 'Bordados com Amor by Mari',
      },
    },

    'blend-hair-boutique': {
      meta: {
        title: 'Blend Hair Boutique | Site de Salão e SEO Local',
        description:
          'Site trilíngue para um salão em Plantation, Flórida, com agendamento online, oito páginas de serviço e o SEO local por trás de uma nota 4,9 em mais de 1.230 avaliações.',
      },
      sector: 'Salão de beleza',
      highlight: '4,9 estrelas em mais de 1.230 avaliações no Google',
      lede: 'Um site trilíngue para um salão brasileiro na Flórida, onde cada página termina em um agendamento feito sem pegar o telefone.',
      description:
        'Um salão tocado por brasileiras no sul da Flórida, com uma equipe que está lá quase toda desde a inauguração. Páginas de serviço que respondem a pergunta antes de ela ser feita, perfis das profissionais e agendamento ao alcance de qualquer página: uma barra fixa de ligar, agendar e WhatsApp no celular. Publicado em três idiomas.',
      alt: 'blendhairboutique.com, site de salão de beleza criado pelo The Diniz Studio',
      location: 'Plantation, FL',
      services: [
        'Direção de arte',
        'Design do site',
        'Desenvolvimento',
        'SEO local',
        'Integração de agendamento',
        'Redação',
      ],
      identity: {
        title: 'Construído em volta de uma marca que já era deles',
        text: 'A logo manuscrita era deles e ficou. Tudo em volta foi desenhado para ela finalmente ter onde se apoiar: fundos calmos, um único acento metálico e uma tipografia que faz uma tabela de preços e uma página de serviço parecerem o mesmo negócio.',
        type: [
          { name: 'Cormorant Garamond', role: 'Títulos' },
          { name: 'Inter', role: 'Interface' },
        ],
      },
      figures: [
        {
          value: '4,9',
          label: 'Mais de 1.230 avaliações',
          note: 'Mostradas na página e declaradas à busca.',
        },
        {
          value: '8',
          label: 'Páginas de serviço',
          note: 'Uma por procedimento, cada uma respondendo a uma busca.',
        },
        { value: '3', label: 'Idiomas', note: 'Inglês, português e espanhol.' },
      ],
      chapters: [
        {
          kicker: 'Vídeo',
          title: 'A sala, antes do texto',
          text: 'Um loop do salão numa tarde de trabalho abre a home: espelhos, cadeiras, a equipe no meio do turno. Ele diz o que o salão é em três segundos e depois sai da frente para o agendamento acontecer.',
          videoCaption: 'O vídeo que abre a home',
        },
        {
          kicker: 'Agendamento',
          title: 'Toda página termina em um agendamento',
          text: 'De coloração e mechas a noivas, cada página de serviço explica um procedimento e entrega direto ao sistema de agendamento. WhatsApp e telefone ficam a um toque na barra que acompanha você no celular.',
        },
        {
          kicker: 'Busca local',
          title: 'Legível para um buscador',
          text: 'O Blend já tinha conquistado as avaliações. O site tornou isso contável: endereço, horários, serviços e nota marcados para o Google, uma página por procedimento para responder ao que as pessoas digitam, e uma página de avaliações que mostra a nota em vez de afirmá-la.',
        },
      ],
      screens: ['Serviços', 'Transformações', 'As profissionais', 'Avaliações'],
      quote: {
        text: 'Ficou profissional, funciona muito bem no celular e as clientes conseguem achar tudo sem precisar mandar mensagem antes. Recebemos muito retorno positivo desde que entrou no ar.',
        name: 'Juliana',
        role: 'Sócia, Blend Hair Boutique',
      },
    },

    'rafa-diniz': {
      meta: {
        title: 'Rafa Diniz | Site de Portfólio de Fotógrafo e Cineasta',
        description:
          'Portfólio feito à mão para um fotógrafo e cineasta: dois curtas, um arquivo filtrado por assunto e uma assinatura desenhada à mão como logo.',
      },
      sector: 'Fotografia e cinema',
      highlight: 'Uma assinatura à mão, dois filmes, um acento',
      lede: 'Uma assinatura desenhada à mão, uma única cor de acento que nunca disputa com o trabalho, e um site feito para colocar fotografia e cinema na frente.',
      description:
        'Um fotógrafo e cineasta que trabalha entre o Brasil e os Estados Unidos. Os filmes vêm primeiro, dois que ele dirigiu, filmou e montou, seguidos de um arquivo fotográfico que você filtra por assunto. Um showreel de cinquenta e três segundos fica na abertura e em nenhum outro lugar.',
      alt: 'byrafadiniz.com, portfólio de fotógrafo e cineasta criado pelo The Diniz Studio',
      location: 'Gainesville, FL',
      services: [
        'Criação de logo',
        'Direção de arte',
        'Correção de cor',
        'Design do site',
        'Desenvolvimento',
        'Movimento',
      ],
      identity: {
        title: 'A assinatura é a logo',
        text: 'Um fotógrafo assina o próprio trabalho, então a marca é a assinatura dele, desenhada à mão sobre caixas-altas espaçadas. Um acento atravessa a interface como a única cor do site que não é uma fotografia.',
        type: [
          { name: 'Instrument Serif', role: 'Títulos' },
          { name: 'Archivo', role: 'Interface' },
        ],
      },
      figures: [
        { value: '2', label: 'Curtas', note: 'Dirigidos, filmados e montados por Rafael.' },
        { value: '53s', label: 'Showreel', note: 'Na abertura, e em nenhum outro lugar.' },
        { value: '0', label: 'Modelos prontos', note: 'Estático e feito à mão do início ao fim.' },
      ],
      chapters: [
        {
          kicker: 'Cinema',
          title: 'Os filmes vêm primeiro',
          text: 'Dois curtas abrem o site antes de qualquer fotografia. Um é um documentário sobre devoção, o outro um filme de marca para uma fazenda. Os frames dos dois foram tratados para viver no mesmo mundo do arquivo logo abaixo.',
          captions: [
            'Paixão Calejada, um curta documental. Dirigido, filmado e montado por Rafael',
            'B2B Ranch, um filme de marca',
          ],
        },
        {
          kicker: 'Arquivo',
          title: 'Organizado por assunto, não por data',
          text: 'As fotografias são filtradas pelo que elas são, então quem chegou por arquitetura nunca precisa passar por um casamento para encontrar.',
        },
        {
          kicker: 'Construção',
          title: 'Estático, e feito à mão',
          text: 'Sem modelo pronto e sem construtor de páginas, e é por isso que uma fotografia do tamanho de uma parede ainda chega em cerca de um segundo.',
        },
      ],
      screens: ['Filmes', 'Arquivo', 'Sobre', 'Serviços'],
      quote: {
        text: 'Cheguei com um monte de referências e ideias pela metade. Tinha coisa no design final que eu nunca teria pensado em pedir, e agora não consigo imaginar o site sem elas.',
        name: 'Rafael',
        role: 'Fotógrafo e cineasta',
      },
    },

    'renata-estrella-patisserie': {
      meta: {
        title: 'Renata Estrella Pâtisserie | Marca, Site e Perfil no Google',
        description:
          'Identidade visual, site, e-book e Perfil da Empresa no Google para uma pâtisserie de luxo no Rio de Janeiro. O perfil criado pelo estúdio já tem 27 avaliações cinco estrelas.',
      },
      sector: 'Pâtisserie',
      highlight: '27 avaliações cinco estrelas em um perfil criado do zero',
      lede: 'Tudo desenhado do zero: a logo, o site, um e-book de receitas e o perfil no Google que hoje carrega 27 avaliações cinco estrelas.',
      description:
        'Formada pela Ferrandi Paris, pelo Ritz Escoffier e pelo Le Cordon Bleu, Renata cria confeitaria sob encomenda para eventos. O site precisava ler do jeito que o trabalho é: exato, sem pressa, francês na contenção. Um vídeo na abertura, um arquivo editorial de criações e um caminho de contato que funciona como uma consultoria, não como um carrinho de compras.',
      alt: 'renataestrellapatisserie.com, site de pâtisserie de luxo criado pelo The Diniz Studio',
      location: 'Rio de Janeiro, BR',
      services: [
        'Criação de logo',
        'Identidade visual',
        'Perfil da Empresa no Google',
        'Design de e-book',
        'Design do site',
        'Desenvolvimento',
      ],
      identity: {
        title: 'Desenhado do zero',
        text: 'Não havia logo, tipografia nem regras, então tudo foi feito: um monograma, um fundo escuro que faz o dourado ler como metal e não como amarelo, e um par de tipografias que atravessa do site para o e-book e para o perfil no Google sem precisar ser redesenhado a cada vez.',
        wordmark: { name: 'Renata Estrella', sub: 'Pâtisserie' },
        type: [
          { name: 'Cormorant Garamond', role: 'Títulos' },
          { name: 'Manrope', role: 'Interface' },
        ],
      },
      figures: [
        {
          value: '27',
          label: 'Avaliações cinco estrelas',
          note: 'No perfil do Google que o estúdio criou e mantém.',
        },
        { value: '9', label: 'Receitas', note: 'Em um e-book vendido pelo site.' },
        { value: '3', label: 'Escolas', note: 'Ferrandi, Ritz Escoffier, Le Cordon Bleu.' },
      ],
      chapters: [
        {
          kicker: 'E-book',
          title: 'Sopas e Cremes',
          text: 'Nove receitas, desenhadas como um motivo para deixar um e-mail. Fotografadas, diagramadas e compostas no mesmo sistema do site, e depois vendidas e entregues por ele.',
          captions: [
            'A capa, no dourado e marfim da marca',
            'Receita 02, Vichyssoise',
            'Receita 05, Sopa de Cebola',
            'A receita bônus, chocolate quente',
          ],
        },
        {
          kicker: 'Busca e redes',
          title: 'Ser encontrada, não admirada',
          text: 'Para quem vende para a própria cidade, um perfil vale mais do que aplauso. O estúdio criou o Perfil da Empresa no Google e ainda cuida dele: categorias, áreas de atendimento, fotografia, publicações e respostas, junto com os dados estruturados do site.',
        },
      ],
      screens: ['A promessa', 'Origens', 'Criações', 'Eventos'],
      quote: {
        text: 'Eu não queria um site cheio de texto disputando com os doces. O Felipe entendeu na hora. Ele deu espaço para a fotografia respirar e construiu todo o resto em volta dela.',
        name: 'Renata',
        role: 'Renata Estrella Pâtisserie',
      },
    },
  },
}
