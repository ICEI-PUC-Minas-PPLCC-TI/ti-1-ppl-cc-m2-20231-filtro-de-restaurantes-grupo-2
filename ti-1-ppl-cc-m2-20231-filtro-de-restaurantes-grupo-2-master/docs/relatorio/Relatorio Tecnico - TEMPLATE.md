# Informações do Projeto
`TÍTULO DO PROJETO`  

Cheff Mustache

`CURSO`  

Ciências da Computação

## Participantes

- Clara Araújo Franco
- Izabella Romano Bezerra Seabra
- João Victor Romano Bezerra Seabra
- João Victor Silluzio Ferreira
- Pedro Guimarães Alves Freitas

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução
Bem-vindo ao nosso projeto de site de avaliação culinária! Aqui, nós somos apaixonados por comida e estamos em uma missão para compartilhar nossa paixão com o mundo. Nós fornecemos avaliações imparciais e honestas sobre restaurantes, pratos e receitas, ajudando você a descobrir novos lugares para comer e experimentar novos sabores. Queremos inspirar você a explorar novos sabores, expandir seus horizontes culinários e se tornar um verdadeiro gourmet. Então, junte-se a nós nesta jornada deliciosa e comece a explorar nosso site agora mesmo!
## Problema

  O problema que este estudo pretende solucionar é a dificuldade que os usuários enfrentam ao buscar um restaurante que atenda às suas necessidades específicas. A grande variedade de opções disponíveis pode ser confusa e, muitas vezes, as informações disponíveis sobre cada estabelecimento são limitadas ou imprecisas. Além disso, cada usuário tem suas próprias preferências, restrições alimentares e orçamento disponível, o que torna a escolha ainda mais desafiadora. Com base nas estratégias ligadas à Gestão de Branding, este estudo apresenta uma abordagem abrangente e atualizada sobre como planejar e executar uma experiência de busca de restaurantes bem-sucedida.

## Objetivos

  Os objetivos deste estudo incluem a análise de diferentes filtros disponíveis em aplicativos de busca de restaurantes, como tipo de cozinha, preço, localização, acessibilidade e outras características relevantes. Com base nessas informações, será possível avaliar quais filtros são mais úteis para os usuários e como eles podem ser aprimorados para tornar a experiência de busca mais eficiente e satisfatória. Além disso, o estudo também buscará identificar padrões e tendências no comportamento dos usuários ao buscar restaurantes, a fim de entender melhor suas preferências e necessidades. Em resumo, este estudo visa ajudar os usuários a tomar decisões informadas ao escolher um restaurante e consequentemente auxiliar empresas do ramo gastronômico a oferecer uma experiência de busca mais eficaz e satisfatória para seus clientes.

Objetivos Gerais:
O objetivo geral deste estudo é analisar a eficácia dos filtros de restaurantes disponíveis em aplicativos de busca. O estudo busca entender como os usuários interagem com essas ferramentas e como elas podem ser aprimoradas para tornar a experiência de busca mais satisfatória e eficiente. 

Objetivos Específicos:
Identificar os diferentes filtros disponíveis em aplicativos de busca, incluindo tipo de cozinha, preço, localização, avaliações, acessibilidade, entre outros.
Avaliar a eficácia de cada filtro na ajuda aos usuários a encontrar restaurantes que atendam às suas necessidades e preferências.
Investigar a importância dos filtros na decisão dos usuários em escolher um determinado restaurante, bem como a influência das avaliações de outros usuários na decisão de escolha.
Analisar os padrões e tendências de comportamento dos usuários ao buscar restaurantes, incluindo horários de busca, frequência de uso, tipos de filtros mais utilizados, entre outros.
Propor melhorias nos filtros existentes e sugestões de novos filtros para tornar a experiência de busca mais satisfatória e eficiente, considerando as necessidades e preferências dos usuários.
Contribuir para o desenvolvimento de estratégias de marketing para empresas do ramo gastronômico baseadas em uma análise aprofundada dos comportamentos e preferências dos usuários ao buscar restaurantes, incluindo sugestões de aprimoramento dos serviços oferecidos pelas empresas.


## Justificativa

  A justificativa para realizar um estudo sobre filtros de restaurantes é a crescente demanda por ferramentas digitais que facilitem a escolha de lugares para comer fora de casa. Além disso, com a popularização dos aplicativos de delivery, é importante compreender como os usuários interagem com essas plataformas e como a experiência de busca pode ser otimizada. É importante reconhecer que escolher um restaurante que atenda às necessidades específicas de cada usuário pode ser um processo árduo e nem sempre bem-sucedido, especialmente se não forem consideradas as ferramentas adequadas.


## Público-Alvo

  Tendo em vista que, o site terá restaurantes de Belo Horizonte, (MG), o público-alvo desse aplicativo serão os moradores e visitantes da cidade que buscam por uma experiência gastronômica diversificada e de qualidade. O público-alvo inclui pessoas de diferentes faixas etárias, classes sociais e estilos de vida, que têm interesse em conhecer os restaurantes na cidade, com as especificações desejadas por cada cliente. Além disso, o público-alvo também pode incluir turistas que visitam a cidade e procuram por experiências gastronômicas locais. O aplicativo pode ser direcionado especialmente para aqueles que valorizam a praticidade na busca de restaurantes em Belo Horizonte.

# Especificações do Projeto

  Nesta parte do documento, será apresentada a especificação do projeto de um site de avaliação de restaurantes. Serão utilizadas técnicas e ferramentas como análise de requisitos, mapa de empatia e de proposta de valor, além da enumeração de requisitos funcionais e não funcionais com base nas histórias de usuário. Também serão discutidas as restrições do projeto, como prazo e recursos disponíveis. Por fim, será apresentado um esboço da arquitetura do sistema, com os principais componentes e suas interações.

## Personas, Empatia e Proposta de Valor
>![image](images/Izabella.png.jpg)
>![image](images/Joao.png.jpg)
>![image](images/Pedro.png.jpg)
>![image](images/Eu.png.jpg)
>![image](images/Nome.png.jpg)
>![image](images/Clara.png.jpg)
## Histórias de Usuários

Maria Antonia, 25 anos, estudante de filosofia: <br/>
Objetivos: encontrar um restaurante bom e barato próximo a sua faculdade.<br/>
Desafios: se mudou recentemente para Belo Horizonte para concluir o curso e não conhece nada da região.<br/>
Como posso ajudá-la: mostrando os melhores e mais baratos restaurantes próximos a faculdade dela segundo as avaliações dos usuários.<br/>

Carlos Gabriel, 63 anos, empresário, casado, 4 filhos:<br/>
Objetivos: encontrar restaurantes agradáveis para um jantar em familia.<br/>
Desafios: Carlos possui muita dificuldade em utilizar dispositivos eletrônicos e não entende como eles funcionam.<br/>
Como posso ajudá-lo: com um aplicativo com uma interface minimalista e intuitiva.<br/>

Maria Gabriela, 17 anos, estudante:<br/>
Objetivo: encontrar um restaurante que possua pratos veganos no cardápio. <br/>
Desafios: encontrar um restaurante barato que caiba no seu orçamento.<br/>
Como posso ajuda-la: através do filtro de preço e de restrições alimentares.<br/>

João Gabriel, 23 anos, Uber:<br/>
Objetivos:  encontrar um restaurante que ofereça delivery e drive thru.<br/>
Desafios: baixo orçamento.<br/>
Como posso ajudá-lo: através do filtro que mostre os restaurantes com delivery ou opção de drive thru.<br/>

Carla Souza, 44 anos, Advogada, cadeirante:<br/>
Objetivo: encontrar um restaurante que possua um ambiente agradavel.<br/>
Desafio: Carla possui uma deficiência que a impossibilita de andar.<br/>
Como posso ajudá-la: filtrando restaurantes com opções de acessibilidade.<br/>

Pedro Maia, 30 anos, Analista de sistemas:<br/>
Objetivos: pedro busca achar algum lugar que ofereça café da manhã.<br/>
Desafios: pedro não possui automóveis portanto precisa ser próximo a sua casa ou trabalho.\n 
Como posso ajudá-lo: através do filtro de distância e de café da manhã.<br/>

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001|Os usuários devem ser capazes de pesquisar restaurantes por localização, tipo de cozinha, preço, avaliação e acessibilidade.| ALTA | 
|RF-002|Os usuários devem ser capazes de visualizar informações sobre cada restaurante, incluindo fotos, horário de funcionamento, endereço e avaliação.| ALTA |
|RF-003|O site deve permitir que os usuários façam comentários e avaliações dos restaurantes que visitaram.| MÉDIA | 
|RF-004|O site deve ser responsivo e ter um design atraente, minimalista e fácil de usar.| MÉDIA |
|RF-005|Os usuários devem ser capazes de salvar seus restaurantes favoritos para acesso fácil e rápido no futuro.| BAIXA | 
|RF-006|O site deve incluir um sistema de recomendação que sugere restaurantes com base nas preferências do usuário.| BAIXA |
### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|O site deve ser compatível com diferentes dispositivos e navegadores.| ALTA | 
|RNF-002|O site deve ser seguro e protegido contra ataques maliciosos.| ALTA | 
|RNF-003|O site deve estar em conformidade com as regulamentações de proteção de dados e privacidade.| ALTA |
|RNF-004|O site deve ter alta disponibilidade e ser capaz de lidar com picos de tráfego |  MÉDIA |
|RNF-005|O site deve ser fácil de manter e atualizar.| MÉDIA |
|RNF-006|O site deve ter um tempo de carregamento rápido e ser otimizado para SEO.| BAIXA|
|RNF-007|O site deve ter um sistema de backup regular para evitar a perda de dados.| BAIXA|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto não pode ser de dífil entendimento para o usuário|
|04| As informações a respeito dos restaurantes devem ser verídicas|

# Projeto de Interface

  Primeiramente nossa empresa optou por usar o aplicativo Discord para nossa gestão de projetos e comnunicação, por conta da sua versatilidade. La criamos uma tabela de nominação onde podemos colocar o que ja foi feito e o que estamos fazendo no momento, podendo até mesmo colocar o que ja foram feitos anteriormente por alguém da nossa equipe. Sem contar que grande parte do nosso time ja havia tido contato com a plataforma antes, tendo um bom conhecimento prévio antes do aplicativo ser implementada na gestão.<br/>
  Decidimos utilizar o Figma (para Wire Frame) por diversos fatore, sendo eles: Sua facilidade de teste de Wire frames sem código, compactação de criação sem perder a qualidade e facilidade, bastante intuitivo e prático.<br/>
  Decidimos utilizar o Miro (Desing  Thinking.) dadas as seguintes condições: O professor havia explicado como utilizar, disponibilizou o modelo do projeto e é bastante intuitivo. <br/>
  Utilizamos o google forms (Pesquisas) para fazer a pesquisa com o publico alvo, por apresentar uma facilidade na hora de responder e de fazer essa coletânea. E utilizamos o google; Ifood; Happen e Uber eats para a pesquisa qualitativa dos restaurantes.<br/>

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

![Exemplo de UserFlow](images/Mapa.png)

## Wireframes
>![image](images/Navigation.png)
>![image](images/pginicial.png)
>![image](images/login.png)
>![image](images/Footer.png)

# Metodologia

  Nossa empresa optou por usar o aplicativo Discord para nossa gestão de projetos, por conta da sua versatilidade. La criamos uma tabela de nominação onde podemos colocar o que ja foi feito e o que estamos fazendo no momento, podendo até mesmo colocar o que ja foram feitos anteriormente por alguém da nossa equipe. Sem contar que grande parte do nosso time ja havia tido contato com a plataforma antes, tendo um bom conhecimento prévio antes do aplicativo ser implementada na gestão.

## Divisão de Papéis

Pesquisas de de restaurantes e tipos e comida que irão contribuir com o site. - João Romano<br/>
Avaliar a eficácia de cada filtro. - Izabella Romano<br/>
Analisar e registrar  os padrões e tendências de comportamento dos usuários ao buscar restaurantes. - Pedro Guimarães<br/>
Propor melhorias com visão geral.(ajudando em todos) - João Silluzio<br/>
Desenvolver estratégias de marketing.  - Clara Fraco<br/>

## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Protótipo Interativo | Figma | https://figma.com/XXXXXXX | 
|Gestão do projeto e comunicação| Discord |https://discord.gg/XXXXXXXX|

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
