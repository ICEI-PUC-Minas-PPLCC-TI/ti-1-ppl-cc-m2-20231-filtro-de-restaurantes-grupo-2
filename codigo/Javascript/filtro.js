function dadosRestaurantes() {
  let dados = localStorage.getItem("restaurantes")

  if (dados == null) {
    dados = {
      restaurantes: [
        {
          nome: "Restaurante Italiano Bella Italia",
          localizacao: "Rua das Pizzas, 123",
          telefone: "(31) 1234-5678",
          email: "contato@bellaitalia.com.br",
          tipo_cozinha: "Italiana",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 18h-23h",
          descricao: "O Restaurante Italiano Bella Italia oferece uma ampla variedade de pratos autênticos da culinária italiana, como massas, risotos e pizzas, em um ambiente elegante e acolhedor."
        },
        {
          nome: "Restaurante Mexicano Sabores do México",
          localizacao: "Avenida dos Sombreros, 456",
          telefone: "(31) 9876-5432",
          email: "contato@saboresdomexico.com.br",
          tipo_cozinha: "Mexicana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 17h-22h",
          descricao: "O Restaurante Mexicano Sabores do México oferece pratos autênticos da culinária mexicana, como tacos, burritos e guacamole, em um ambiente colorido e vibrante que remete ao México."
        },
        {
          nome: "Restaurante Japonês Sushi House",
          localizacao: "Rua dos Sakês, 789",
          telefone: "(31) 5678-9012",
          email: "contato@sushihouse.com.br",
          tipo_cozinha: "Japonesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 19h-23h",
          descricao: "O Restaurante Japonês Sushi House oferece uma variedade de pratos japoneses tradicionais, incluindo sushis, sashimis e temakis, preparados com ingredientes frescos e de alta qualidade."
        },
        {
          nome: "Restaurante Mexicano El Sol",
          localizacao: "Rua México, 567",
          telefone: "(31) 8765-4321",
          email: "contato@elsolmexicano.com.br",
          tipo_cozinha: "Mexicana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 18h-23h",
          descricao: "O Restaurante Mexicano El Sol oferece pratos autênticos da culinária mexicana, como tacos, burritos e nachos, com opções vegetarianas e veganas."
        },
        {
          nome: "Restaurante Árabe Aladdin",
          localizacao: "Av. das Mil e Uma Noites, 987",
          telefone: "(31) 5432-1098",
          email: "contato@aladdinrestaurante.com.br",
          tipo_cozinha: "Árabe",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 12h-15h, 19h-23h; Dom: 12h-16h",
          descricao: "O Restaurante Árabe Aladdin oferece uma variedade de pratos típicos da culinária árabe, como quibe, esfiha e homus, em um ambiente aconchegante."
        },
        {
          nome: "Restaurante Gourmet Fusion",
          localizacao: "Rua dos Chefs, 987"
        },
        {
          nome: "Restaurante Thai Siam",
          localizacao: "Rua Tailândia, 123",
          telefone: "(31) 9876-5432",
          email: "contato@thaisiamrestaurante.com.br",
          tipo_cozinha: "Tailandesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Thai Siam oferece pratos autênticos da culinária tailandesa, com opções de sabores picantes e exóticos."
        },
        {
          nome: "Restaurante Francês Le Petit",
          localizacao: "Av. Paris, 456",
          telefone: "(31) 6543-2109",
          email: "contato@lepetitrestaurante.com.br",
          tipo_cozinha: "Francesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Qua-Sáb: 19h-23h; Dom: 12h-15h",
          descricao: "O Restaurante Francês Le Petit oferece pratos sofisticados da culinária francesa, com uma seleção de vinhos para harmonizar."
        },
        {
          nome: "Restaurante Árabe Al Sharq",
          localizacao: "Av. das Especiarias, 789",
          telefone: "(31) 5432-1098",
          email: "contato@alsharqrestaurante.com.br",
          tipo_cozinha: "Árabe",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 18h-23h",
          descricao: "O Restaurante Árabe Al Sharq oferece uma experiência autêntica da culinária árabe, com pratos tradicionais e aromas encantadores."
        },
        {
          nome: "Restaurante Japonês Koi Sushi",
          localizacao: "Rua do Japão, 789",
          telefone: "(31) 9012-3456",
          email: "contato@koisushi.com.br",
          tipo_cozinha: "Japonesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 18h-23h",
          descricao: "O Restaurante Japonês Koi Sushi oferece uma ampla variedade de sushi, sashimi e pratos quentes, preparados com ingredientes frescos e de qualidade."
        },
        {
          nome: "Pizzaria Tradicional Bella Italia",
          localizacao: "Av. Italia, 1234",
          telefone: "(31) 2109-8765",
          email: "contato@bellaitaliapizza.com.br",
          tipo_cozinha: "Pizzaria",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 18h-23h",
          descricao: "A Pizzaria Tradicional Bella Italia oferece pizzas artesanais, com massa fina e crocante, e uma variedade de sabores tradicionais e especiais."
        },
        {
          nome: "Restaurante Espanhol El Olé",
          localizacao: "Rua Espanha, 456",
          telefone: "(31) 8765-4321",
          email: "contato@elolérestaurante.com.br",
          tipo_cozinha: "Espanhola",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Espanhol El Olé oferece pratos típicos da culinária espanhola, como paella, tapas e sangria, em um ambiente acolhedor."
        },
        {
          nome: "Restaurante Brasileiro Tapiocaria Brasil",
          localizacao: "Av. Brasil, 987",
          telefone: "(31) 6543-2109",
          email: "contato@tapiocariabrasil.com.br",
          tipo_cozinha: "Brasileira",
          favorito: "false",
          faixa_preco: "$ (Econômico)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h-15h, 18h-22h",
          descricao: "O Restaurante Brasileiro Tapiocaria Brasil oferece uma variedade de tapiocas doces e salgadas, com recheios típicos da culinária brasileira."
        },
        {
          nome: "Restaurante Gourmet Mediterrâneo",
          localizacao: "Rua das Oliveiras, 123",
          telefone: "(31) 5432-1098",
          email: "contato@gourmetmediterraneo.com.br",
          tipo_cozinha: "Mediterrânea",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Gourmet Mediterrâneo oferece pratos sofisticados inspirados na culinária dos países do Mediterrâneo, com sabores frescos e ingredientes de qualidade."
        },
        {
          nome: "Restaurante Tailandês Bangkok",
          localizacao: "Av. Tailândia, 456",
          telefone: "(31) 9012-3456",
          email: "contato@bangkokrestaurante.com.br",
          tipo_cozinha: "Tailandesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Tailandês Bangkok oferece uma experiência gastronômica autêntica, com pratos tradicionais e sabores marcantes da culinária tailandesa."
        },
        {
          nome: "Restaurante Vegano Consciência Verde",
          localizacao: "Rua dos Veganos, 987",
          telefone: "(31) 8765-4321",
          email: "contato@conscienciaverderestaurante.com.br",
          tipo_cozinha: "Vegana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Vegano Consciência Verde oferece opções deliciosas e saudáveis de pratos veganos, com ingredientes naturais e sustentáveis."
        },
        {
          nome: "Restaurante Coreano Seul",
          localizacao: "Av. Coreia do Sul, 567",
          telefone: "(31) 7654-3210",
          email: "contato@seulrestaurante.com.br",
          tipo_cozinha: "Coreana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Coreano Seul oferece pratos autênticos da culinária coreana, como bibimbap, bulgogi e kimchi, em um ambiente acolhedor e descontraído."
        },
        {
          nome: "Restaurante Árabe Mil e Uma Noites",
          localizacao: "Av. das Mil e Uma Noites, 123",
          telefone: "(31) 6543-2109",
          email: "contato@milumaarabe.com.br",
          tipo_cozinha: "Árabe",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h-15h, 18h-23h",
          descricao: "O Restaurante Árabe Mil e Uma Noites oferece uma experiência gastronômica com pratos típicos da culinária árabe, em um ambiente encantador."
        },
        {
          nome: "Restaurante Argentino El Gaucho",
          localizacao: "Rua Argentina, 456",
          telefone: "(31) 5432-1098",
          email: "contato@elgauchoargentino.com.br",
          tipo_cozinha: "Argentina",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Argentino El Gaucho oferece cortes de carne nobres, preparados na parrilla, e pratos típicos da culinária argentina, acompanhados de vinhos de qualidade."
        },
        {
          nome: "Restaurante Temático Anos 80",
          localizacao: "Rua dos Anos 80, 987",
          telefone: "(31) 8765-4321",
          email: "contato@anos80restaurante.com.br",
          tipo_cozinha: "Variada",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 18h-23h",
          descricao: "O Restaurante Temático Anos 80 oferece uma viagem no tempo com pratos inspirados na década de 1980, em um ambiente nostálgico e divertido."
        },
        {
          nome: "Restaurante Italiano Bella Napoli",
          localizacao: "Av. Napoli, 1234",
          telefone: "(31) 7654-3210",
          email: "contato@bellanapoliitaliano.com.br",
          tipo_cozinha: "Italiana",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 18h-23h",
          descricao: "O Restaurante Italiano Bella Napoli oferece pratos autênticos da culinária italiana, como massas frescas, risotos e tiramisu, em um ambiente aconchegante."
        },
        {
          nome: "Restaurante Mexicano La Fiesta",
          localizacao: "Rua México, 567",
          telefone: "(31) 9012-3456",
          email: "contato@lafiestamexicano.com.br",
          tipo_cozinha: "Mexicana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 18h-23h",
          descricao: "O Restaurante Mexicano La Fiesta oferece uma explosão de sabores da culinária mexicana, com pratos como tacos, quesadillas e margaritas."
        },
        {
          nome: "Restaurante Francês Le Bistro",
          localizacao: "Rua Paris, 456",
          telefone: "(31) 6543-2109",
          email: "contato@lebistrofrances.com.br",
          tipo_cozinha: "Francesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Qua-Sáb: 19h-23h; Dom: 12h-15h",
          descricao: "O Restaurante Francês Le Bistro oferece uma experiência gastronômica refinada, com pratos clássicos da culinária francesa e uma seleção de vinhos cuidadosamente escolhida."
        },
        {
          nome: "Restaurante Árabe Damasco",
          localizacao: "Av. Damasco, 987",
          telefone: "(31) 5432-1098",
          email: "contato@damascorestaurante.com.br",
          tipo_cozinha: "Árabe",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h-15h, 18h-23h",
          descricao: "O Restaurante Árabe Damasco oferece uma variedade de pratos tradicionais da culinária árabe, como falafel, kafta e coalhada, em um ambiente familiar e acolhedor."
        },
        {
          nome: "Restaurante Vegetariano Green Leaf",
          localizacao: "Rua das Folhas, 123",
          telefone: "(31) 8765-4321",
          email: "contato@greenleafrestaurante.com.br",
          tipo_cozinha: "Vegetariana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Vegetariano Green Leaf oferece uma variedade de pratos vegetarianos saudáveis e saborosos, com opções veganas e ingredientes orgânicos."
        },
        {
          nome: "Restaurante Japonês Sakura",
          localizacao: "Av. do Japão, 789",
          telefone: "(31) 7654-3210",
          email: "contato@sakurajp.com.br",
          tipo_cozinha: "Japonesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 18h-23h",
          descricao: "O Restaurante Japonês Sakura oferece uma ampla variedade de pratos japoneses, incluindo sushi, sashimi, tempura e muito mais, preparados com habilidade e frescor."
        },
        {
          nome: "Churrascaria Fogo de Chão",
          localizacao: "Av. dos Churrascos, 456",
          telefone: "(31) 9012-3456",
          email: "contato@fogodechao.com.br",
          tipo_cozinha: "Churrascaria",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Seg-Sáb: 12h-15h30, 18h-23h; Dom: 12h-16h",
          descricao: "A Churrascaria Fogo de Chão oferece um rodízio de carnes nobres, preparadas no estilo tradicional gaúcho, acompanhado de um buffet variado de saladas e acompanhamentos."
        },
        {
          nome: "Restaurante Mexicano La Cucaracha",
          localizacao: "Rua México, 567",
          telefone: "(31) 8765-4321",
          email: "contato@lacucarachamexicano.com.br",
          tipo_cozinha: "Mexicana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 18h-23h",
          descricao: "O Restaurante Mexicano La Cucaracha oferece pratos autênticos da culinária mexicana, como tacos, burritos e nachos, em um ambiente descontraído e festivo."
        },
        {
          nome: "Restaurante Italiano La Trattoria",
          localizacao: "Rua Itália, 1234",
          telefone: "(31) 7654-3210",
          email: "contato@latrattoriaitaliana.com.br",
          tipo_cozinha: "Italiana",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 18h-23h",
          descricao: "O Restaurante Italiano La Trattoria oferece pratos autênticos da culinária italiana, como massas frescas, risotos e tiramisu, em um ambiente aconchegante."
        },
        {
          nome: "Restaurante Árabe Aladdin",
          localizacao: "Av. das Mil e Uma Noites, 987",
          telefone: "(31) 6543-2109",
          email: "contato@aladdinrestaurante.com.br",
          tipo_cozinha: "Árabe",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h-15h, 18h-23h",
          descricao: "O Restaurante Árabe Aladdin oferece uma variedade de pratos da culinária árabe, como kibe, esfiha, tabule e muito mais, em um ambiente familiar e acolhedor."
        },
        {
          nome: "Restaurante Indiano Taj Mahal",
          localizacao: "Rua da Índia, 456",
          telefone: "(31) 5432-1098",
          email: "contato@tajmahalindiano.com.br",
          tipo_cozinha: "Indiana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Indiano Taj Mahal oferece uma experiência gastronômica com pratos tradicionais da culinária indiana, como curry, tandoori e biryani, em um ambiente exótico e encantador."
        },
        {
          nome: "Restaurante Mediterrâneo Oásis",
          localizacao: "Rua das Oliveiras, 123",
          telefone: "(31) 9012-3456",
          email: "contato@oasismediterraneo.com.br",
          tipo_cozinha: "Mediterrânea",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Mediterrâneo Oásis oferece pratos sofisticados e saudáveis inspirados na culinária dos países do Mediterrâneo, com ingredientes frescos e sabores únicos."
        },
        {
          nome: "Restaurante Vegetariano Green Leaf",
          localizacao: "Rua das Folhas, 123",
          telefone: "(31) 8765-4321",
          email: "contato@greenleafrestaurante.com.br",
          tipo_cozinha: "Vegetariana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Vegetariano Green Leaf oferece uma variedade de pratos vegetarianos saudáveis e saborosos, com opções veganas e ingredientes orgânicos."
        },
        {
          nome: "Restaurante Japonês Sakura",
          localizacao: "Av. do Japão, 789",
          telefone: "(31) 7654-3210",
          email: "contato@sakurajp.com.br",
          tipo_cozinha: "Japonesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 18h-23h",
          descricao: "O Restaurante Japonês Sakura oferece uma ampla variedade de pratos japoneses, incluindo sushi, sashimi, tempura e muito mais, preparados com habilidade e frescor."
        },
        {
          nome: "Churrascaria Fogo de Chão",
          localizacao: "Av. dos Churrascos, 456",
          telefone: "(31) 9012-3456",
          email: "contato@fogodechao.com.br",
          tipo_cozinha: "Churrascaria",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Seg-Sáb: 12h-15h30, 18h-23h; Dom: 12h-16h",
          descricao: "A Churrascaria Fogo de Chão oferece um rodízio de carnes nobres, preparadas no estilo tradicional gaúcho, acompanhado de um buffet variado de saladas e acompanhamentos."
        },
        {
          nome: "Restaurante Mexicano La Cucaracha",
          localizacao: "Rua México, 567",
          telefone: "(31) 8765-4321",
          email: "contato@lacucarachamexicano.com.br",
          tipo_cozinha: "Mexicana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 18h-23h",
          descricao: "O Restaurante Mexicano La Cucaracha oferece pratos autênticos da culinária mexicana, como tacos, burritos e nachos, em um ambiente descontraído e festivo."
        },
        {
          nome: "Restaurante Italiano La Trattoria",
          localizacao: "Rua Itália, 1234",
          telefone: "(31) 7654-3210",
          email: "contato@latrattoriaitaliana.com.br",
          tipo_cozinha: "Italiana",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 18h-23h",
          descricao: "O Restaurante Italiano La Trattoria oferece pratos autênticos da culinária italiana, como massas frescas, risotos e tiramisu, em um ambiente aconchegante."
        },
        {
          nome: "Restaurante Árabe Aladdin",
          localizacao: "Av. das Mil e Uma Noites, 987",
          telefone: "(31) 6543-2109",
          email: "contato@aladdinrestaurante.com.br",
          tipo_cozinha: "Árabe",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h-15h, 18h-23h",
          descricao: "O Restaurante Árabe Aladdin oferece uma variedade de pratos da culinária árabe, como kibe, esfiha, tabule e muito mais, em um ambiente familiar e acolhedor."
        },
        {
          nome: "Restaurante Indiano Taj Mahal",
          localizacao: "Rua da Índia, 456",
          telefone: "(31) 5432-1098",
          email: "contato@tajmahalindiano.com.br",
          tipo_cozinha: "Indiana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Indiano Taj Mahal oferece uma experiência gastronômica com pratos tradicionais da culinária indiana, como curry, tandoori e biryani, em um ambiente exótico e encantador."
        },
        {
          nome: "Restaurante Mediterrâneo Oásis",
          localizacao: "Rua das Oliveiras, 123",
          telefone: "(31) 9012-3456",
          email: "contato@oasismediterraneo.com.br",
          tipo_cozinha: "Mediterrânea",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Mediterrâneo Oásis oferece pratos sofisticados e saudáveis inspirados na culinária dos países do Mediterrâneo, com ingredientes frescos e sabores únicos."
        },
        {
          nome: "Restaurante Tailandês Thai Sabores",
          localizacao: "Av. Tailândia, 456",
          telefone: "(31) 8765-4321",
          email: "contato@thaisabores.com.br",
          tipo_cozinha: "Tailandesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h-15h, 18h-22h",
          descricao: "O Restaurante Tailandês Thai Sabores oferece uma variedade de pratos autênticos da culinária tailandesa, como pad thai, curry e rolinhos primavera, em um ambiente acolhedor e descontraído."
        },
        {
          nome: "Restaurante Vegano Sabor Natural",
          localizacao: "Rua dos Veganos, 987",
          telefone: "(31) 7654-3210",
          email: "contato@sabornaturalvegano.com.br",
          tipo_cozinha: "Vegana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Vegano Sabor Natural oferece opções deliciosas e saudáveis de pratos veganos, utilizando ingredientes naturais e orgânicos."
        },
        {
          nome: "Restaurante Brasileiro Sabores da Terra",
          localizacao: "Av. Brasil, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@saboresdaterrabrasileiro.com.br",
          tipo_cozinha: "Brasileira",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Brasileiro Sabores da Terra oferece pratos típicos da culinária brasileira, com opções de feijoada, bobó de camarão, acarajé e muito mais, em um ambiente acolhedor."
        },
        {
          nome: "Restaurante Libanês Cedro do Líbano",
          localizacao: "Rua do Cedro, 456",
          telefone: "(31) 8765-4321",
          email: "contato@cedrodolibano.com.br",
          tipo_cozinha: "Libanesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Libanês Cedro do Líbano oferece uma variedade de pratos tradicionais da culinária libanesa, como tabule, kafta, esfiha e muito mais, em um ambiente aconchegante."
        },
        {
          nome: "Restaurante Espanhol Tapas y Vino",
          localizacao: "Av. Espanha, 789",
          telefone: "(31) 7654-3210",
          email: "contato@tapasyvinoespanhol.com.br",
          tipo_cozinha: "Espanhola",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Dom: 18h-23h",
          descricao: "O Restaurante Espanhol Tapas y Vino oferece uma experiência gastronômica autêntica com pratos típicos da culinária espanhola, como tapas, paella e sangria, em um ambiente acolhedor e descontraído."
        },
        {
          nome: "Restaurante Asiático Jardim Oriental",
          localizacao: "Rua dos Jardins, 123",
          telefone: "(31) 6543-2109",
          email: "contato@jardimorientalasiatico.com.br",
          tipo_cozinha: "Asiática",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Asiático Jardim Oriental oferece uma variedade de pratos da culinária asiática, como sushi, yakisoba, tempura e muito mais, em um ambiente tranquilo e agradável."
        },
        {
          nome: "Restaurante Português Sabores de Portugal",
          localizacao: "Av. Portugal, 456",
          telefone: "(31) 9012-3456",
          email: "contato@saboresdeportugal.com.br",
          tipo_cozinha: "Portuguesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Português Sabores de Portugal oferece pratos autênticos da culinária portuguesa, como bacalhau, pastéis de nata e caldo verde, em um ambiente acolhedor e familiar."
        },
        {
          nome: "Restaurante Argentino El Gaúcho",
          localizacao: "Rua Argentina, 789",
          telefone: "(31) 8765-4321",
          email: "contato@elgauchorestaurante.com.br",
          tipo_cozinha: "Argentina",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Seg-Sáb: 18h-23h",
          descricao: "O Restaurante Argentino El Gaúcho oferece cortes de carne suculentos e autênticos da culinária argentina, preparados na parrilla e servidos com chimichurri, em um ambiente acolhedor e rústico."
        },
        {
          nome: "Restaurante Peruano Sabores do Peru",
          localizacao: "Rua do Peru, 1234",
          telefone: "(31) 7654-3210",
          email: "contato@saboresdoperu.com.br",
          tipo_cozinha: "Peruana",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h-15h, 18h-22h",
          descricao: "O Restaurante Peruano Sabores do Peru oferece pratos típicos da culinária peruana, como ceviche, lomo saltado e causa rellena, em um ambiente aconchegante e com influências culturais do Peru."
        },
        {
          nome: "Restaurante Chinês Grande Muralha",
          localizacao: "Av. da China, 456",
          telefone: "(31) 6543-2109",
          email: "contato@grandemuralhachines.com.br",
          tipo_cozinha: "Chinesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Chinês Grande Muralha oferece pratos autênticos da culinária chinesa, como frango xadrez, chop suey e rolinho primavera, em um ambiente tradicional e acolhedor."
        },
        {
          nome: "Restaurante Coreano Han Guk",
          localizacao: "Rua da Coreia, 789",
          telefone: "(31) 9012-3456",
          email: "contato@hangukrestaurante.com.br",
          tipo_cozinha: "Coreana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Sáb: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Coreano Han Guk oferece uma variedade de pratos típicos da culinária coreana, como bulgogi, kimchi e bibimbap, em um ambiente tradicional e acolhedor."
        },
        {
          nome: "Restaurante Alemão Bierhaus",
          localizacao: "Av. da Alemanha, 987",
          telefone: "(31) 8765-4321",
          email: "contato@bierhausalemao.com.br",
          tipo_cozinha: "Alemã",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 18h-23h",
          descricao: "O Restaurante Alemão Bierhaus oferece pratos tradicionais da culinária alemã, como salsichas, joelho de porco e chucrute, acompanhados de cervejas artesanais, em um ambiente inspirado nas cervejarias alemãs."
        },
        {
          nome: "Restaurante Grego Ouzeri",
          localizacao: "Rua da Grécia, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@ouzerigrego.com.br",
          tipo_cozinha: "Grega",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Grego Ouzeri oferece pratos autênticos da culinária grega, como moussaka, souvlaki e tzatziki, em um ambiente charmoso e descontraído."
        },
        {
          nome: "Restaurante Francês La Belle Cuisine",
          localizacao: "Av. França, 456",
          telefone: "(31) 8765-4321",
          email: "contato@labellecuisinefrancesa.com.br",
          tipo_cozinha: "Francesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Francês La Belle Cuisine oferece uma experiência gastronômica refinada com pratos clássicos da culinária francesa, como foie gras, coq au vin e crème brûlée, em um ambiente elegante e romântico."
        },
        {
          nome: "Restaurante Russo Samovar",
          localizacao: "Rua da Rússia, 789",
          telefone: "(31) 7654-3210",
          email: "contato@samovarrusso.com.br",
          tipo_cozinha: "Russa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Russo Samovar oferece pratos tradicionais da culinária russa, como borsch, stroganoff e blini, em um ambiente aconchegante e com decoração temática."
        },
        {
          nome: "Restaurante Marroquino Casablanca",
          localizacao: "Av. Marrocos, 456",
          telefone: "(31) 9012-3456",
          email: "contato@casablancamarroquino.com.br",
          tipo_cozinha: "Marroquina",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 18h-23h",
          descricao: "O Restaurante Marroquino Casablanca oferece uma viagem sensorial à cultura marroquina, com pratos como cuscuz, tagine e pastilla, em um ambiente exótico e encantador."
        },
        {
          nome: "Restaurante Caribenho Sabor Tropical",
          localizacao: "Rua do Caribe, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@sabortropicalcaribenho.com.br",
          tipo_cozinha: "Caribenha",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Caribenho Sabor Tropical oferece pratos típicos da culinária caribenha, como jerk chicken, arroz com feijão e guacamole, em um ambiente descontraído e vibrante."
        },
        {
          nome: "Restaurante Mexicano Sabores Mexicanos",
          localizacao: "Av. México, 789",
          telefone: "(31) 8765-4321",
          email: "contato@saboresmexicanos.com.br",
          tipo_cozinha: "Mexicana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Mexicano Sabores Mexicanos oferece pratos autênticos da culinária mexicana, como tacos, nachos, burritos e margaritas, em um ambiente colorido e animado."
        },
        {
          nome: "Restaurante Africano Sabores da Savana",
          localizacao: "Rua da Savana, 456",
          telefone: "(31) 7654-3210",
          email: "contato@saboresdasavana.com.br",
          tipo_cozinha: "Africana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Africano Sabores da Savana oferece pratos autênticos da culinária africana, como bobotie, muamba de galinha e injera, em um ambiente temático e acolhedor."
        },
        {
          nome: "Restaurante Australiano Down Under",
          localizacao: "Av. Austrália, 987",
          telefone: "(31) 9012-3456",
          email: "contato@downunderrestaurante.com.br",
          tipo_cozinha: "Australiana",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Australiano Down Under oferece pratos inspirados na culinária australiana, como barramundi grelhado, kangaroo steak e pavlova, em um ambiente descontraído e com influências da cultura australiana."
        },
        {
          nome: "Restaurante Vietnamita Saigon",
          localizacao: "Rua do Vietnã, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@saigonrestaurante.com.br",
          tipo_cozinha: "Vietnamita",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Vietnamita Saigon oferece pratos autênticos da culinária vietnamita, como pho, bun cha e nem nuong, em um ambiente acolhedor e com decoração inspirada no Vietnã."
        },
        {
          nome: "Restaurante Polonês Polônia na Mesa",
          localizacao: "Av. Polônia, 456",
          telefone: "(31) 8765-4321",
          email: "contato@polonianamesa.com.br",
          tipo_cozinha: "Polonesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Polonês Polônia na Mesa oferece pratos tradicionais da culinária polonesa, como pierogi, bigos e kielbasa, em um ambiente aconchegante e familiar."
        },
        {
          nome: "Restaurante Indiano Taj Mahal",
          localizacao: "Rua da Índia, 789",
          telefone: "(31) 7654-3210",
          email: "contato@tajmahalindiano.com.br",
          tipo_cozinha: "Indiana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Indiano Taj Mahal oferece pratos autênticos da culinária indiana, como curry, biryani e samosa, em um ambiente temático e com decoração inspirada na Índia."
        },
        {
          nome: "Restaurante Japonês Sakura",
          localizacao: "Av. do Japão, 456",
          telefone: "(31) 9012-3456",
          email: "contato@sakurajapones.com.br",
          tipo_cozinha: "Japonesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Japonês Sakura oferece uma variedade de pratos da culinária japonesa, como sushi, sashimi e tempurá, em um ambiente elegante e com sushi bar."
        },
        {
          nome: "Restaurante Espanhol Tapas y Vino",
          localizacao: "Rua da Espanha, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@tapasyvinoespanhol.com.br",
          tipo_cozinha: "Espanhola",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Espanhol Tapas y Vino oferece uma seleção de tapas e vinhos espanhóis, como paella, croquetas e gazpacho, em um ambiente descontraído e alegre."
        },
        {
          nome: "Restaurante Tailandês Thai Palace",
          localizacao: "Av. Tailândia, 987",
          telefone: "(31) 8765-4321",
          email: "contato@thaipalace.com.br",
          tipo_cozinha: "Tailandesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Tailandês Thai Palace oferece pratos autênticos da culinária tailandesa, como pad thai, curry e mango sticky rice, em um ambiente exótico e com decoração inspirada na Tailândia."
        },
        {
          nome: "Restaurante Libanês Cedro do Líbano",
          localizacao: "Rua do Líbano, 1234",
          telefone: "(31) 7654-3210",
          email: "contato@cedrodolibano.com.br",
          tipo_cozinha: "Libanesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Libanês Cedro do Líbano oferece pratos tradicionais da culinária libanesa, como tabule, kibe e falafel, em um ambiente acolhedor e com decoração típica."
        },
        {
          nome: "Restaurante Argentino Pampas Grill",
          localizacao: "Av. Argentina, 456",
          telefone: "(31) 9012-3456",
          email: "contato@pampasgrillargentino.com.br",
          tipo_cozinha: "Argentina",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Argentino Pampas Grill oferece cortes de carne argentina, como bife de chorizo, empanadas e chimichurri, em um ambiente rústico e com influências do país vizinho."
        },
        {
          nome: "Restaurante Árabe Aladdin",
          localizacao: "Rua da Arábia, 789",
          telefone: "(31) 8765-4321",
          email: "contato@aladdinrestaurante.com.br",
          tipo_cozinha: "Árabe",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Árabe Aladdin oferece pratos típicos da culinária árabe, como kafta, esfiha e homus, em um ambiente temático e com decoração inspirada no Oriente Médio."
        },
        {
          nome: "Restaurante Peruano Inka Grill",
          localizacao: "Av. Peru, 987",
          telefone: "(31) 9012-3456",
          email: "contato@inkagrillperuano.com.br",
          tipo_cozinha: "Peruana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Peruano Inka Grill oferece pratos tradicionais da culinária peruana, como ceviche, lomo saltado e causa, em um ambiente aconchegante e com influências da cultura peruana."
        },
        {
          nome: "Restaurante Coreano Seoul Garden",
          localizacao: "Rua da Coreia, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@seoulgarden.com.br",
          tipo_cozinha: "Coreana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Coreano Seoul Garden oferece pratos autênticos da culinária coreana, como bulgogi, bibimbap e kimchi, em um ambiente moderno e com decoração inspirada na Coreia do Sul."
        },
        {
          nome: "Restaurante Brasileiro Sabores do Brasil",
          localizacao: "Av. Brasil, 456",
          telefone: "(31) 8765-4321",
          email: "contato@saboresdobrasil.com.br",
          tipo_cozinha: "Brasileira",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Brasileiro Sabores do Brasil oferece pratos tradicionais da culinária brasileira, como feijoada, acarajé e picanha, em um ambiente descontraído e com sabores típicos do país."
        },
        {
          nome: "Restaurante Francês Le Petit Bistro",
          localizacao: "Rua da França, 789",
          telefone: "(31) 7654-3210",
          email: "contato@lepetitbistro.com.br",
          tipo_cozinha: "Francesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Dom: 19h-23h",
          descricao: "O Restaurante Francês Le Petit Bistro oferece pratos refinados da culinária francesa, como escargot, foie gras e bouillabaisse, em um ambiente elegante e romântico."
        },
        {
          nome: "Restaurante Mediterrâneo Sabores do Mar",
          localizacao: "Av. do Mediterrâneo, 456",
          telefone: "(31) 9012-3456",
          email: "contato@saboresdomar.com.br",
          tipo_cozinha: "Mediterrânea",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Mediterrâneo Sabores do Mar oferece pratos frescos e saborosos da culinária mediterrânea, como peixes, frutos do mar e saladas, em um ambiente sofisticado com vista para o mar."
        },
        {
          nome: "Restaurante Vegetariano Verde Vida",
          localizacao: "Rua Verde, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@verdevida.com.br",
          tipo_cozinha: "Vegetariana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Vegetariano Verde Vida oferece uma variedade de pratos saudáveis e deliciosos, como saladas, wraps e sucos naturais, em um ambiente aconchegante e sustentável."
        },
        {
          nome: "Restaurante Português Sabores de Portugal",
          localizacao: "Av. de Portugal, 987",
          telefone: "(31) 8765-4321",
          email: "contato@saboresdeportugal.com.br",
          tipo_cozinha: "Portuguesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Ter-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Português Sabores de Portugal oferece pratos autênticos da culinária portuguesa, como bacalhau, pastéis de nata e francesinha, em um ambiente acolhedor e com decoração típica."
        },
        {
          nome: "Restaurante Alemão Biergarten",
          localizacao: "Rua da Alemanha, 456",
          telefone: "(31) 9012-3456",
          email: "contato@biergartenrestaurante.com.br",
          tipo_cozinha: "Alemã",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Alemão Biergarten oferece pratos tradicionais da culinária alemã, como joelho de porco, salsichas e chucrute, em um ambiente rústico com cervejas artesanais."
        },
        {
          nome: "Restaurante Mexicano El Mariachi",
          localizacao: "Av. México, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@elmariachirestaurante.com.br",
          tipo_cozinha: "Mexicana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Mexicano El Mariachi oferece pratos autênticos da culinária mexicana, como tacos, burritos e guacamole, em um ambiente colorido e com música ao vivo."
        },
        {
          nome: "Restaurante Grego Ouzeri",
          localizacao: "Rua da Grécia, 789",
          telefone: "(31) 8765-4321",
          email: "contato@ouzerigrego.com.br",
          tipo_cozinha: "Grega",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Grego Ouzeri oferece pratos típicos da culinária grega, como moussaka, souvlaki e tzatziki, em um ambiente alegre e com decoração inspirada nas ilhas gregas."
        },
        {
          nome: "Restaurante Marroquino Marrakesh",
          localizacao: "Av. Marrocos, 987",
          telefone: "(31) 9012-3456",
          email: "contato@marrakeshrestaurante.com.br",
          tipo_cozinha: "Marroquina",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Marroquino Marrakesh oferece pratos autênticos da culinária marroquina, como couscous, tagines e pastilla, em um ambiente exótico e com decoração típica."
        },
        {
          nome: "Restaurante Russo Caviar & Vodka",
          localizacao: "Rua da Rússia, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@caviarevodka.com.br",
          tipo_cozinha: "Russa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Russo Caviar & Vodka oferece pratos sofisticados da culinária russa, como blinis, estrogonofe e caviar, em um ambiente elegante e com seleção de vodkas premium."
        },
        {
          nome: "Restaurante Típico Mineiro Sabor das Gerais",
          localizacao: "Av. das Gerais, 456",
          telefone: "(31) 8765-4321",
          email: "contato@sabordasgerais.com.br",
          tipo_cozinha: "Mineira",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Típico Mineiro Sabor das Gerais oferece pratos tradicionais da culinária mineira, como tutu de feijão, frango com quiabo e pão de queijo, em um ambiente aconchegante e familiar."
        },
        {
          nome: "Restaurante Indiano Taj Mahal",
          localizacao: "Rua da Índia, 789",
          telefone: "(31) 9012-3456",
          email: "contato@tajmahalrestaurante.com.br",
          tipo_cozinha: "Indiana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Indiano Taj Mahal oferece pratos autênticos da culinária indiana, como curry, biryani e samosas, em um ambiente decorado com elementos indianos e com música tradicional."
        },
        {
          nome: "Restaurante Espanhol La Sangria",
          localizacao: "Av. Espanha, 987",
          telefone: "(31) 8765-4321",
          email: "contato@lasangriarestaurante.com.br",
          tipo_cozinha: "Espanhola",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Dom: 19h-23h",
          descricao: "O Restaurante Espanhol La Sangria oferece pratos típicos da culinária espanhola, como paella, tapas e sangria, em um ambiente descontraído e com decoração inspirada na Espanha."
        },
        {
          nome: "Restaurante Japonês Sakura",
          localizacao: "Rua do Japão, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@sakurarestaurante.com.br",
          tipo_cozinha: "Japonesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Japonês Sakura oferece pratos autênticos da culinária japonesa, como sushi, sashimi e tempurá, em um ambiente moderno e com um menu variado."
        },
        {
          nome: "Restaurante Turco Istambul",
          localizacao: "Av. Turquia, 456",
          telefone: "(31) 9012-3456",
          email: "contato@istambulrestaurante.com.br",
          tipo_cozinha: "Turca",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Turco Istambul oferece pratos autênticos da culinária turca, como kebab, baklava e meze, em um ambiente acolhedor e com elementos da cultura turca."
        },
        {
          nome: "Restaurante Chinês Bambu Dourado",
          localizacao: "Rua da China, 789",
          telefone: "(31) 8765-4321",
          email: "contato@bambudourado.com.br",
          tipo_cozinha: "Chinesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Chinês Bambu Dourado oferece pratos autênticos da culinária chinesa, como frango xadrez, rolinho primavera e arroz chop suey, em um ambiente tradicional e com decoração oriental."
        },
        {
          nome: "Restaurante Coreano Seorabol",
          localizacao: "Av. da Coreia, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@seorabolrestaurante.com.br",
          tipo_cozinha: "Coreana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Coreano Seorabol oferece pratos autênticos da culinária coreana, como bibimbap, bulgogi e kimchi, em um ambiente moderno e com influências da cultura coreana."
        },
        {
          nome: "Restaurante Árabe Sabores do Oriente",
          localizacao: "Rua do Oriente, 456",
          telefone: "(31) 9012-3456",
          email: "contato@saboresdooriente.com.br",
          tipo_cozinha: "Árabe",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: true,
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Árabe Sabores do Oriente oferece pratos típicos da culinária árabe, como esfiha, kibe e homus, em um ambiente aconchegante e com decoração inspirada no Oriente Médio."
        },
        {
          nome: "Restaurante Peruano Machu Picchu",
          localizacao: "Av. do Peru, 987",
          telefone: "(31) 8765-4321",
          email: "contato@machupicchurestaurante.com.br",
          tipo_cozinha: "Peruana",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: false,
          horario_funcionamento: "Ter-Dom: 19h-23h",
          descricao: "O Restaurante Peruano Machu Picchu oferece pratos autênticos da culinária peruana, como ceviche, lomo saltado e causa, em um ambiente temático inspirado nas ruínas de Machu Picchu."
        },
        {
          nome: "Restaurante Argentino La Parrilla",
          localizacao: "Rua da Argentina, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@laparrillarestaurante.com.br",
          tipo_cozinha: "Argentina",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: "Sim",
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Argentino La Parrilla oferece pratos típicos da culinária argentina, como bife de chorizo, empanadas e chimichurri, em um ambiente rústico e com um toque do estilo argentino."
        },
        {
          nome: "Restaurante Árabe-Sírio Aladdin",
          localizacao: "Av. da Síria, 456",
          telefone: "(31) 9012-3456",
          email: "contato@aladdinrestaurante.com.br",
          tipo_cozinha: "Árabe-Síria",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: "Sim",
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Árabe-Sírio Aladdin oferece pratos autênticos da culinária árabe-síria, como tabule, esfiha e kafta, em um ambiente familiar e com um toque das tradições sírias."
        },
        {
          nome: "Restaurante Francês Le Bistro",
          localizacao: "Rua da França, 789",
          telefone: "(31) 8765-4321",
          email: "contato@lebistrorestaurante.com.br",
          tipo_cozinha: "Francesa",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: "Não",
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Francês Le Bistro oferece pratos sofisticados da culinária francesa, como foie gras, escargot e cassoulet, em um ambiente elegante e com um menu de vinhos selecionados."
        },
        {
          nome: "Restaurante Vegetariano Green Garden",
          localizacao: "Av. dos Vegetais, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@greengardenrestaurante.com.br",
          tipo_cozinha: "Vegetariana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: "Sim",
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Vegetariano Green Garden oferece pratos saudáveis e saborosos da culinária vegetariana, como saladas, wraps e hambúrgueres veganos, em um ambiente aconchegante e com opções para todos os gostos."
        },
        {
          nome: "Restaurante Libanês Cedro do Líbano",
          localizacao: "Rua do Líbano, 456",
          telefone: "(31) 9012-3456",
          email: "contato@cedrodolibano.com.br",
          tipo_cozinha: "Libanesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: "Sim",
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Libanês Cedro do Líbano oferece pratos autênticos da culinária libanesa, como homus, kafta e tabule, em um ambiente acolhedor e com decoração típica do Líbano."
        },
        {
          nome: "Restaurante Brasileiro Sabores do Brasil",
          localizacao: "Av. do Brasil, 987",
          telefone: "(31) 8765-4321",
          email: "contato@saboresdobrasil.com.br",
          tipo_cozinha: "Brasileira",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: "Sim",
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Brasileiro Sabores do Brasil oferece pratos tradicionais da culinária brasileira, como feijoada, moqueca e acarajé, em um ambiente alegre e com música brasileira ao vivo."
        },
        {
          nome: "Restaurante Mediterrâneo Mar Azul",
          localizacao: "Rua do Mar, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@marazulrestaurante.com.br",
          tipo_cozinha: "Mediterrânea",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: "Não",
          horario_funcionamento: "Ter-Sáb: 19h-23h",
          descricao: "O Restaurante Mediterrâneo Mar Azul oferece pratos inspirados na culinária mediterrânea, como peixes grelhados, saladas e moussaka, em um ambiente charmoso e com vista para o mar."
        },
        {
          nome: "Restaurante Mexicano La Cantina",
          localizacao: "Av. do México, 456",
          telefone: "(31) 9012-3456",
          email: "contato@lacantinarestaurante.com.br",
          tipo_cozinha: "Mexicana",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: "Sim",
          horario_funcionamento: "Seg-Dom: 12h-15h, 18h-22h",
          descricao: "O Restaurante Mexicano La Cantina oferece pratos autênticos da culinária mexicana, como tacos, burritos e guacamole, em um ambiente colorido e descontraído."
        },
        {
          nome: "Restaurante Italiano Bella Italia",
          localizacao: "Rua da Itália, 789",
          telefone: "(31) 8765-4321",
          email: "contato@bellaitaliarestaurante.com.br",
          tipo_cozinha: "Italiana",
          favorito: "false",
          faixa_preco: "$$$ (Caro)",
          delivery: "Sim",
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Italiano Bella Italia oferece pratos tradicionais da culinária italiana, como massas, risotos e pizzas artesanais, em um ambiente aconchegante e romântico."
        },
        {
          nome: "Restaurante Tailandês Thai Palace",
          localizacao: "Av. da Tailândia, 1234",
          telefone: "(31) 5432-1098",
          email: "contato@thaipalacerestaurante.com.br",
          tipo_cozinha: "Tailandesa",
          favorito: "false",
          faixa_preco: "$$ (Moderado)",
          delivery: "Sim",
          horario_funcionamento: "Seg-Dom: 11h30-15h, 18h-22h",
          descricao: "O Restaurante Tailandês Thai Palace oferece pratos autênticos da culinária tailandesa, como pad thai, curry e rolinhos primavera, em um ambiente decorado com elementos tailandeses."
        }
      ]
    }

    localStorage.setItem("restaurantes", JSON.stringify(dados))

  }

}

dadosRestaurantes()
function exibirrestaurante() {
  var tipo = document.getElementById("food-type").value
  var price = document.getElementById("price-level").value
  var delivery1 = document.getElementById("Deliveri").value
  let rest = ``
  let restaurantes = document.getElementById(`restaurantes`)
  let dados = localStorage.getItem("restaurantes")
  dados = JSON.parse(dados)


  for (i = 0; i < dados.restaurantes.length; i++) {
    const comidatipo = dados.restaurantes[i].tipo_cozinha
    const itemPriceLevel = dados.restaurantes[i].faixa_preco
    const delivery = dados.restaurantes[i].delivery

    const foodTypeMatch = tipo === 'todos' || tipo === comidatipo;
    const priceLevelMatch = price === 'todos' || price === itemPriceLevel;
    const locationMatch = delivery1 === 'todos' || delivery1 === delivery;

    if (foodTypeMatch && priceLevelMatch && locationMatch) {
      rest += `<div class="container">
    <div class="card">
      <h3>${dados.restaurantes[i].nome}</h3>
      <p>${dados.restaurantes[i].tipo_cozinha}</p>
      <p>Faixa de Preço:</p>
      <p>${dados.restaurantes[i].faixa_preco}</p>
        <button class="cta" onclick="vermais(${i})">
  <span>Ver Mais</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
<div class="con-like">
<input title="like" type="checkbox" class="like" onClick="favorito(${i})">
<div class="checkmark">
  <svg viewBox="0 0 24 24" class="outline" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="filled" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
  </svg>
  <svg class="celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="10,10 20,20" class="poly"></polygon>
    <polygon points="10,50 20,50" class="poly"></polygon>
    <polygon points="20,80 30,70" class="poly"></polygon>
    <polygon points="90,10 80,20" class="poly"></polygon>
    <polygon points="90,50 80,50" class="poly"></polygon>
    <polygon points="80,80 70,70" class="poly"></polygon>
  </svg>
</div>
</div>

    </div>
  </div>`

    }
  }
  restaurantes.innerHTML = rest
}
exibirrestaurante()
function vermais(restaurante) {
  window.location.href = `restaurante.html?rest=${restaurante}`
}

const foodTypeSelect = document.getElementById('food-type');
const priceLevelSelect = document.getElementById('price-level');
const locationSelect = document.getElementById('location');
const restaurantItems = document.querySelectorAll('.restaurant-item');

function favorito(i) {
  let dados = localStorage.getItem("restaurantes")
  dados = JSON.parse(dados)
  
    if(dados.restaurantes[i].favorito == "false")
    {
      dados.restaurantes[i].favorito = "true"
    }
   else if(dados.restaurantes[i].favorito == "true")
   {
    dados.restaurantes[i].favorito = "false"
   }
    localStorage.setItem("restaurantes", JSON.stringify(dados))
}



