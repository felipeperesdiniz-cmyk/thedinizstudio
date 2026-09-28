import type { Dictionary } from './types'
import { industriesPt } from './industries-pt'

export const pt: Dictionary = {
  meta: {
    siteName: 'The Diniz Studio',
    tagline: 'Um estúdio conduzido pelo fundador, para negócios de serviço e criativos, em três idiomas.',
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
    title: 'Tem um projeto em mente?',
    text: 'Conte o que você vende e para quem. Você recebe uma resposta direta sobre escopo e prazo, e um orçamento fechado por escrito.',
    bookCall: 'Agendar uma conversa de 30 minutos',
  },

  home: {
    meta: {
      title: 'The Diniz Studio | Criação de Sites, Identidade Visual e Marketing',
      description:
        'Um estúdio conduzido pelo fundador: sites, identidade visual e marketing para negócios de serviço e criativos no Brasil e nos EUA. Em português, inglês e espanhol.',
    },
    heroLine: 'Um estúdio conduzido pelo fundador, para negócios de serviço e criativos. Sites, marcas e marketing em português, inglês e espanhol.',
    heroScroll: 'Role',
    h1: 'The Diniz Studio. Criação de sites, identidade visual e marketing para negócios de serviço e criativos.',
    intro: {
      kicker: 'Por que um estúdio só',
      title: 'Três fornecedores que nunca se falam',
      body: [
        'Um faz o site, outro desenha a logo, outro publica no Instagram. Nada combina, e ninguém está olhando para o conjunto.',
        'Aqui o site, a identidade e o marketing saem da mesma pessoa e das mesmas decisões, então quem encontra você no Google, no Instagram ou por indicação encontra sempre o mesmo negócio. Você não precisa dos três: leve a parte que falta, e ela vai conversar com o que você já tem.',
        'O estúdio trabalha com negócios de serviço e criativos, como salões, artesãos, fotógrafos e chefs, e principalmente com quem atende clientes que falam mais de um idioma. Os sites são escritos em português, inglês e espanhol sempre que o público precisa.',
      ],
    },
    founder: {
      kicker: 'Com quem você trabalha',
      title: 'Felipe Diniz, fundador',
      body: [
        'O The Diniz Studio é tocado por Felipe Diniz. A mesma pessoa responde a sua primeira mensagem, desenha o site, escreve o código e atende o telefone meses depois quando você quiser mudar alguma coisa.',
        'Um ou dois projetos por vez, em português, inglês e espanhol, para negócios no Brasil e nos Estados Unidos. Nenhum gerente de contas entre você e o trabalho.',
      ],
      link: 'Mais sobre o estúdio',
    },
    quote: {
      kicker: 'Palavra de cliente',
      project: 'blend-hair-boutique',
      link: 'Ler o caso do Blend',
    },
    services: {
      kicker: 'Serviços',
      title: 'Três coisas, bem feitas',
      text: 'Um site, uma identidade que segura tudo junto, e o trabalho de busca e redes em volta deles. Contrate o estúdio para um só, ou combine.',
      link: 'Ver todos os serviços',
    },
    work: {
      kicker: 'Projetos selecionados',
      title: 'Quatro negócios, quatro problemas',
      text: 'Uma bordadeira, um salão, um fotógrafo e uma confeiteira. Cada caso separa o que foi feito do que foi medido.',
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
          a: 'Cada projeto é orçado sozinho, porque um site de uma página e um site trilíngue com logo e fotografia não são o mesmo trabalho. Conte o que você precisa e recebe um preço fechado por escrito antes de qualquer coisa começar. Hospedagem, domínio e ferramentas de terceiros são cobrados pelos próprios fornecedores, e o orçamento diz quais se aplicam.',
        },
        {
          slug: 'quanto-tempo-leva',
          q: 'Quanto tempo leva?',
          a: 'De quatro a oito semanas na maioria dos projetos, da primeira conversa até o ar. A parte lenta nunca é o código, são as decisões e o conteúdo, e o processo é montado para tirar isso de você logo no começo.',
        },
        {
          slug: 'voce-faz-em-mais-de-um-idioma',
          q: 'Você faz em mais de um idioma?',
          a: 'Faço. Português, inglês e espanhol, cada um no seu endereço e declarado aos buscadores, para que eles consigam associar cada página a quem busca naquele idioma. Cada versão é escrita, não traduzida por máquina.',
        },
        {
          slug: 'voce-so-faz-sites',
          q: 'Você só faz sites?',
          a: 'Não. Também logo e identidade visual, direção de fotografia, redes sociais, Perfil da Empresa no Google e SEO local. Você pode contratar só uma dessas coisas, ou combinar. Ninguém precisa de tudo.',
        },
        {
          slug: 'com-o-que-voce-constroi',
          q: 'Com o que você constrói?',
          a: 'Código próprio, não construtor de páginas. Isso mantém as páginas leves e rápidas, e não há assinatura de construtor para continuar pagando. Hospedagem e domínio continuam sendo pagos aos fornecedores, como em qualquer site.',
        },
      ],
    },
  },

  work: {
    meta: {
      title: 'Projetos | Sites, Identidade Visual e Marketing',
      description:
        'Casos: sites, logos, redes sociais e SEO local para uma bordadeira, um salão de beleza, um fotógrafo e uma confeiteira.',
    },
    kicker: 'Projetos',
    title: 'Cada projeto, por inteiro',
    lede: 'O que o negócio precisava e o que foi feito. Cada número diz o que está medindo, e cada projeto leva ao site no ar.',
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
    figureKind: { delivered: 'Entregue', measured: 'Medido', client: 'Sobre o cliente' },
  },

  player: {
    soundOn: 'Ligar som',
    soundOff: 'Desligar som',
    watch: 'Assistir ao filme',
    close: 'Fechar',
  },

  services: {
    meta: {
      title: 'Serviços | Criação de Sites, Identidade Visual e Marketing',
      description:
        'Sites sob medida, logo e identidade visual, e o marketing que vem depois: redes sociais, Perfil da Empresa no Google e SEO local. Em três idiomas.',
    },
    kicker: 'Serviços',
    title: 'O que o estúdio faz',
    lede: 'Três serviços pensados para funcionar juntos. Contrate o estúdio para um deles, ou combine.',
    cards: {
      'web-design': {
        title: 'Criação de sites',
        text: 'Sites escritos do zero: rápidos, multilíngues e feitos para transformar visita em contato.',
        proof: [
          { value: 'Até 3', label: 'Idiomas por site' },
          { value: '100%', label: 'Código entregue a você' },
          { value: '0', label: 'Modelos prontos' },
        ],
      },
      'brand-identity': {
        title: 'Identidade visual',
        text: 'Logo, cor, tipografia e as regras que seguram tudo, desenhadas para como o seu negócio realmente vende.',
        proof: [
          { value: '0', label: 'Taxa de renovação da logo' },
          { value: 'Seus', label: 'Arquivos de origem inclusos' },
        ],
      },
      'marketing-seo': {
        title: 'Marketing e SEO',
        text: 'Ser encontrado e ser seguido: busca local, Perfil da Empresa no Google, redes sociais e o conteúdo por trás disso.',
        proof: [
          { value: '200', label: 'Seguidores em uma conta de cliente que o estúdio cuida' },
          { value: '1,5 mil', label: 'Seguidores na conta do próprio estúdio' },
          { value: 'Avulso', label: 'Diagnóstico e ajustes; mensal opcional' },
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
        title: 'Criação de Sites | Sites Sob Medida e Multilíngues',
        description:
          'Sites sob medida para negócios de serviço e criativos. Feitos à mão, rápidos e multilíngues, com entrega clara e a base técnica de que os buscadores precisam.',
      },
      kicker: 'Serviço',
      title: 'Criação de sites',
      lede: 'Um site feito para o seu negócio, e não adaptado de um modelo que outra pessoa já está usando.',
      body: [
        'Quem procura um site novo normalmente está resolvendo um de três problemas: o site atual não tem a mesma qualidade do trabalho, ele é lento ou quebrado no celular, ou as pessoas entram e nunca entram em contato. Os três têm solução, e os três dependem da mesma coisa: decidir para que serve o site antes de alguém abrir qualquer programa de design.',
        'Cada página aqui é escrita e programada à mão. Sem construtor de páginas, sem tema pronto, sem licença mensal de um plugin que um dia quebra. Isso mantém o site leve no celular e entrega a buscadores e assistentes de inteligência artificial páginas limpas e estruturadas para ler. Ajuda a ser descoberto; não garante posição nem menção.',
        'Quando faz sentido, o site é publicado em português, inglês e espanhol. Cada idioma ganha o seu endereço e o seu texto, escrito e não traduzido por máquina, para que os buscadores associem cada versão a quem busca naquele idioma.',
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
            text: 'Layout, tipografia, movimento e código. Tudo responsivo e testado em celulares de verdade.',
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
            text: 'Dados estruturados, sitemap, títulos limpos, imagens leves: a base de que os buscadores precisam para ler o site direito. Ajuda a ser encontrado; a posição ainda depende de concorrência e de tempo.',
          },
          {
            title: 'O que é seu na entrega',
            text: 'O site pronto e o código-fonte, o domínio conectado e uma explicação de como tudo funciona. Nada fica retido para prender você ao estúdio.',
          },
          {
            title: 'Suporte opcional depois',
            text: 'O suporte depois do lançamento é opcional. Alterações são orçadas por serviço, ou em condições combinadas por escrito se você quiser ajuda regular. Não há mensalidade obrigatória.',
          },
          {
            title: 'Custos de terceiros, avisados antes',
            text: 'Hospedagem, domínio, plataforma de agendamento ou qualquer outro serviço externo é cobrado pelo próprio fornecedor e pode ter taxas próprias. A proposta lista quais o seu site vai usar.',
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
            a: 'Como um preço fechado para o trabalho inteiro, por escrito, antes de começar. Ele muda com o número de páginas, de idiomas e com a inclusão de fotografia e logo. O valor da proposta é o valor que você paga, e não existe cobrança por hora depois. Custos de terceiros, como hospedagem, domínio ou plataforma de agendamento, ficam fora desse valor e aparecem separados.',
          },
          {
            slug: 'da-para-reformar-o-site-que-eu-ja-tenho',
            q: 'Dá para reformar o site que eu já tenho?',
            a: 'Dá, e muitas vezes é a resposta mais barata. Se a estrutura está boa e o problema é design e velocidade, a reforma é mais rápida e custa menos do que começar do zero.',
          },
          {
            slug: 'preciso-de-wordpress-wix-ou-squarespace',
            q: 'Eu preciso de Wordpress, Wix ou Squarespace?',
            a: 'Não precisa. Essas ferramentas fazem sentido se você quer montar e editar tudo sozinho. Um site feito à mão dispensa a assinatura do construtor e a manutenção de plugins, e não prende você a uma plataforma que muda de preço quando quer. Hospedagem e domínio continuam sendo pagos, como em qualquer site.',
          },
          {
            slug: 'vou-conseguir-atualizar-o-site-sozinho',
            q: 'Vou conseguir atualizar sozinho?',
            a: 'Se você quiser. Um editor de conteúdo simples entra quando está previsto na proposta, o que vale a pena se você vai mudar textos, imagens, preços ou listas com frequência. Sem ele, você manda as alterações e elas são feitas para você, cobradas por serviço. Você sabe qual é o caso antes de o projeto começar.',
          },
          {
            slug: 'o-que-recebo-na-entrega-e-o-que-e-cobrado-a-parte',
            q: 'O que eu recebo na entrega, e o que é cobrado à parte?',
            a: 'Você recebe o site pronto, o código-fonte, o domínio conectado e uma explicação de como tudo funciona. Hospedagem, o próprio domínio, plataforma de agendamento ou qualquer outro serviço externo são pagos ao fornecedor e podem ter taxas próprias; a proposta lista cada um. O suporte depois do lançamento é opcional, cobrado por serviço ou em condições combinadas por escrito.',
          },
          {
            slug: 'como-sei-que-vai-aparecer-no-google',
            q: 'Como eu sei que vai aparecer no Google?',
            a: 'Ninguém pode prometer uma posição no Google. O que a construção faz é dar aos buscadores o que eles precisam para ler o site: uma página por coisa que você vende, títulos limpos, dados estruturados, páginas rápidas e um Perfil da Empresa no Google se você atende uma cidade. Onde você aparece depois depende de concorrência, avaliações e tempo, sem prazo fixo, e você acompanha isso nos relatórios.',
          },
        ],
      },
    },

    'brand-identity': {
      meta: {
        title: 'Identidade Visual e Logo, Feitos para o Seu Negócio',
        description:
          'Logo e identidade visual para negócios de serviço e criativos: cor, tipografia e as regras que seguram tudo, da vitrine ao site e ao Instagram.',
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
        title: 'Marketing e SEO Local | Configuração Avulsa ou Mensal',
        description:
          'SEO local, Perfil da Empresa no Google, redes sociais e conteúdo: diagnóstico e configuração avulsos, com trabalho mensal opcional. Em português, inglês ou espanhol.',
      },
      kicker: 'Serviço',
      title: 'Marketing e SEO',
      lede: 'Um site que ninguém acha é um cartão de visita. Esta é a parte que ajuda as pessoas a encontrá-lo.',
      body: [
        'Ser encontrado deixou de ser uma coisa só. A pessoa pode digitar o serviço e a cidade no Google, pedir uma indicação a um assistente de inteligência artificial, ou passar por você no Instagram. O mesmo material ajuda nos três casos: páginas claras que respondem perguntas reais, um perfil completo e ativo, e posts com a cara do negócio a que pertencem.',
        'O trabalho tem duas partes. Primeiro, um diagnóstico e uma configuração avulsos: onde você aparece hoje, o que está faltando, e a base arrumada a partir das buscas que os seus clientes fazem, no idioma em que fazem. Depois, só se você quiser, um trabalho mensal para continuar publicando e manter o perfil em dia. Para quem vende para a própria cidade, o Perfil da Empresa no Google costuma ser o melhor ponto de partida.',
        'Nada disso garante posição, presença em respostas de IA ou prazo para resultado. Buscadores e assistentes decidem o que mostram, e a concorrência onde você atua pesa. O que o estúdio controla é o quanto as suas informações estão claras, completas e atualizadas quando eles olham.',
      ],
      included: {
        title: 'O que entra',
        items: [
          {
            title: 'Avulso: o diagnóstico',
            text: 'Uma análise por escrito de onde você aparece hoje na busca, no mapa e nas redes, do que está faltando ou errado, e do que arrumar primeiro.',
          },
          {
            title: 'Avulso: a configuração',
            text: 'Páginas de serviço e dados estruturados no site; o Perfil da Empresa no Google criado ou arrumado, com categorias, área de atendimento, horários e fotografia; perfis nas redes alinhados à sua identidade.',
          },
          {
            title: 'Mensal, se você quiser: publicação',
            text: 'Posts nas redes (direção, fotografia, legendas e agendamento), publicações no Perfil da Empresa no Google e páginas novas que respondem ao que o cliente pergunta antes de comprar. O que entra em cada mês é combinado com você por escrito.',
          },
          {
            title: 'Mensal, se você quiser: manutenção',
            text: 'Horários, serviços e fotos sempre atualizados, e respostas às avaliações quando você pedir que o estúdio cuide disso.',
          },
          {
            title: 'Sua aprovação primeiro',
            text: 'Posts, páginas e mudanças no perfil são enviados a você antes de irem ao ar. Nada é publicado em seu nome sem a sua aprovação.',
          },
          {
            title: 'Relatório em português claro',
            text: 'No trabalho mensal: o que buscaram, o que clicaram e o que fizeram depois. Sem painel que você precisa decifrar.',
          },
        ],
      },
      process: {
        title: 'Como funciona',
        steps: [
          {
            title: 'Diagnóstico (avulso)',
            text: 'Onde você aparece hoje, o que está faltando e o que os concorrentes estão ganhando que você não.',
          },
          {
            title: 'Arrumar a base (avulso)',
            text: 'O site, o perfil e os dados estruturados, nessa ordem. Não adianta divulgar uma página que não pode ser lida. Você pode parar aqui.',
          },
          {
            title: 'Aprovar e publicar (mensal, opcional)',
            text: 'Páginas de serviço, respostas e posts são preparados, enviados para a sua aprovação e publicados em um calendário que você enxerga.',
          },
          {
            title: 'Revisar (mensal, opcional)',
            text: 'Um relatório em linguagem simples, com o mês seguinte decidido pelo que aconteceu no anterior.',
          },
        ],
      },
      faq: {
        title: 'Perguntas',
        items: [
          {
            slug: 'em-quanto-tempo-vejo-resultado-de-seo',
            q: 'Em quanto tempo vejo resultado?',
            a: 'Não existe prazo fixo, e ninguém pode prometer um com honestidade. Alguns negócios começam a aparecer em novas buscas poucas semanas depois da configuração; outros levam meses. Depende da concorrência onde você atua, das suas avaliações e do quanto os buscadores já sabem sobre você. Se você mantiver o trabalho mensal, os relatórios mostram o que está mudando.',
          },
          {
            slug: 'da-para-aparecer-no-chatgpt-e-em-outras-respostas-de-ia',
            q: 'Dá para aparecer no ChatGPT e em outras respostas de IA?',
            a: 'Ninguém garante isso, e quem garante está vendendo alguma coisa. Os assistentes de IA decidem sozinhos o que mencionar. O que o estúdio pode fazer é deixar as suas informações fáceis de entender: páginas que dizem com todas as letras o que você faz, para quem faz e onde, marcadas para uma máquina conseguir ler. Isso aumenta a chance de você ser descrito corretamente; não promete uma menção.',
          },
          {
            slug: 'preciso-assinar-por-varios-meses',
            q: 'Preciso assinar por vários meses?',
            a: 'Não. O diagnóstico e a configuração são um serviço avulso, com orçamento próprio. O trabalho mensal é opcional, tem escopo combinado por escrito, e você pode parar quando quiser.',
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
        'Um estúdio independente de sites e identidade visual, em português, inglês e espanhol, para negócios no Brasil e nos Estados Unidos.',
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
        'Conte o que você precisa: um site, logo e identidade visual, ou o marketing em volta disso. Resposta em até um dia, em português, inglês ou espanhol.',
    },
    kicker: 'Contato',
    title: 'Começar um projeto',
    lede: 'Todo projeto começa com uma conversa. Você recebe uma resposta direta sobre escopo e prazo, um orçamento fechado por escrito, e retorno em até um dia útil — da pessoa que de fato faz o trabalho.',
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
      note: 'Vai direto para a minha caixa de entrada. Resposta em até um dia útil.',
      sending: 'Enviando…',
      success: 'Obrigado, sua mensagem chegou. Você recebe resposta em até um dia útil.',
      failure: 'Não foi possível enviar. Escreva direto para',
      errors: {
        name: 'Digite seu nome.',
        email: 'Digite um e-mail válido.',
        message: 'Conte um pouco sobre o projeto.',
      },
    },
    direct: {
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      meeting: 'Conversa',
      meetingText: 'Agendar 30 minutos',
    },
  },

  ...industriesPt,

  footer: {
    sections: { work: 'Projetos', services: 'Serviços', industries: 'Segmentos', studio: 'Estúdio' },
    rights: 'Todos os direitos reservados.',
  },

  projects: {
    'bordados-com-amor-by-mari': {
      meta: {
        title: 'Bordados com Amor | Site, Logo e Redes Sociais',
        description:
          'Site trilíngue, logo bordada e Instagram gerenciado para uma artista do bordado à mão. A conta, cuidada pelo estúdio, saiu do zero para 200 seguidores sem anúncio.',
      },
      sector: 'Bordado à mão',
      highlight: 'Instagram cuidado pelo estúdio: do zero a 200 seguidores, sem anúncio',
      lede: 'Uma logo bordada, um site em três idiomas e um Instagram construído do zero sem um centavo de anúncio.',
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
          value: '200',
          label: 'Seguidores no Instagram',
          note: 'Na conta que o estúdio cuida desde que começou do zero, sem anúncio. Um número de seguidores, não de vendas.',
          kind: 'measured',
        },
        {
          value: '3',
          label: 'Idiomas',
          note: 'Português, inglês e espanhol.',
          kind: 'delivered',
        },
        {
          value: '1',
          label: 'Estúdio, de ponta a ponta',
          note: 'Logo, feed, legendas e site.',
          kind: 'delivered',
        },
      ],
      chapters: [
        {
          kicker: 'Redes sociais',
          title: 'Crescido, não comprado',
          text: 'O estúdio cuida da conta de ponta a ponta: direção, fotografia, escrita e agendamento. Ela saiu do zero para 200 seguidores sem um único post patrocinado, e cada peça disso conversa com o site.',
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
        name: 'Mariana Peres',
        role: 'Bordados com Amor by Mari',
      },
    },

    'blend-hair-boutique': {
      meta: {
        title: 'Blend Hair Boutique | Site de Salão e SEO Local',
        description:
          'Site trilíngue para um salão em Plantation, Flórida, com agendamento online, oito páginas de serviço e dados estruturados que mostram aos buscadores a nota 4,9 que o salão já tinha.',
      },
      sector: 'Salão de beleza',
      highlight: 'Oito páginas de serviço, agendamento em todas',
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
          label: 'Nota no Google, mais de 1.230 avaliações',
          note: 'Conquistada pelo salão, não pelo estúdio. O site mostra a nota e a marca para a busca.',
          kind: 'client',
        },
        {
          value: '8',
          label: 'Páginas de serviço',
          note: 'Uma por procedimento, cada uma respondendo a uma busca.',
          kind: 'delivered',
        },
        {
          value: '3',
          label: 'Idiomas',
          note: 'Inglês, português e espanhol.',
          kind: 'delivered',
        },
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
          text: 'O Blend já tinha conquistado as avaliações antes de o estúdio chegar. O site as tornou legíveis para os buscadores: endereço, horários, serviços e nota marcados para o Google, uma página por procedimento para responder ao que as pessoas digitam, e uma página de avaliações que mostra a nota em vez de afirmá-la.',
        },
      ],
      screens: ['Serviços', 'Transformações', 'As profissionais', 'Avaliações'],
      quote: {
        text: 'Ficou profissional, funciona muito bem no celular e as clientes conseguem achar tudo sem precisar mandar mensagem antes. Recebemos muito retorno positivo desde que entrou no ar.',
        name: 'Juliana Chen',
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
        {
          value: '2',
          label: 'Curtas',
          note: 'Dirigidos, filmados e montados por Rafael. O site os apresenta.',
          kind: 'client',
        },
        {
          value: '53s',
          label: 'Showreel',
          note: 'O reel do Rafael, na abertura e em nenhum outro lugar.',
          kind: 'client',
        },
        {
          value: '0',
          label: 'Modelos prontos',
          note: 'Estático e feito à mão do início ao fim.',
          kind: 'delivered',
        },
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
          text: 'Sem modelo pronto e sem construtor de páginas, o que mantém as páginas leves mesmo com fotografias do tamanho de uma parede.',
        },
      ],
      screens: ['Filmes', 'Arquivo', 'Sobre', 'Serviços'],
      quote: {
        text: 'Cheguei com um monte de referências e ideias pela metade. Tinha coisa no design final que eu nunca teria pensado em pedir, e agora não consigo imaginar o site sem elas.',
        name: 'Rafael',
        role: 'Fotógrafo e cineasta',
        disclosure: 'Rafael é irmão de Felipe Diniz.',
      },
    },

    'renata-estrella-patisserie': {
      meta: {
        title: 'Renata Estrella Pâtisserie | Marca, Site e Perfil no Google',
        description:
          'Identidade visual, site, e-book de receitas e Perfil da Empresa no Google para uma pâtisserie de luxo no Rio, tudo criado do zero pelo estúdio.',
      },
      sector: 'Pâtisserie',
      highlight: 'Logo, site, e-book e perfil no Google, criados do zero',
      lede: 'Tudo desenhado do zero: a logo, o site, um e-book de receitas e o Perfil da Empresa no Google que o estúdio criou e ainda administra.',
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
          label: 'Avaliações cinco estrelas no Google',
          note: 'Deixadas por clientes da Renata no perfil que o estúdio criou e administra. O mérito é da Renata, não do estúdio.',
          kind: 'measured',
        },
        {
          value: '9',
          label: 'Receitas',
          note: 'Em um e-book desenhado pelo estúdio e vendido pelo site.',
          kind: 'delivered',
        },
        {
          value: '3',
          label: 'Escolas',
          note: 'Ferrandi, Ritz Escoffier, Le Cordon Bleu.',
          kind: 'client',
        },
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
        name: 'Renata Estrella',
        role: 'Renata Estrella Pâtisserie',
      },
    },
  },
}
