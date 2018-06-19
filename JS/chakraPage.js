var container = document.getElementById("container_id");
var descricao = document.getElementById("descricao_id");
var wrapper = document.getElementById("chakra")
var heroImage = document.getElementById("hero-image");
var heroText = document.getElementById("hero-text");
var heroTitle = document.getElementById("hero-title");
var voltarBtn = document.getElementById("voltar_id");
var conteudo = document.getElementById("texto_id");


document.getElementsByTagName

voltarBtn.onclick = function(){
    trocarTela();
}
function jintonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/jinton.gif')";
    heroText.innerHTML = "Jinton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:difference;');
    conteudo.innerHTML = "Liberação de Poeira (塵遁, Jinton, Panini <b>'Estilo do Pó'</b>) é uma natureza " +
    "Kekkei Tōta, uma versão avançada de kekkei genkai, que é criada através do uso simultâneo " +
    " das naturezas terra, vento e fogo para criar o poder de pulverizar." + 
    " <h1>Curiosidades</h1>   <ul> <li><p> "+
" Como a <b>Liberação de Lava</b> e a <b>Liberação de Magnetismo</b>, a Liberação de Poeira tem mais de um usuário"+
" sem qualquer relação sanguínea aparente uns com os outros."+
   " </p></li>"+
   "<li><p> É possível que estas técnicas não sejam genéticas, já que Ōnoki afirmou que Mū passou os segredos da Liberação de Poeira para ele.</p></li>"  + 
   " </p></li></ul>";
}

function suitonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/suiton.gif')";
    heroText.innerHTML = "Suiton";
    heroTitle.setAttribute('style', 'color: brown; mix-blend-mode:none;');
    conteudo.innerHTML = "Liberação de Água (水遁, Suiton; TV Brasileira <b>'Estilo Água'</b>) é uma das cinco áreas elementares básicas de Transformação da Natureza que permite ao usuário manipular a água pré-existente, ou criá-la tornando o chakra em água. É necessário mais habilidade para criar água e expeli-la pela boca. A Liberação de Água é uma das mais versáteis das cinco naturezas de chakra básicas, técnicas Liberação de Água podem não só mudar sua forma como também seu estado. Além do mais, a água se torna mais sólida no processo também. A afinidade com o suiton é aparentemente mais comum entre shinobi de Kirigakure. Técnicas de Liberação de Água ofensivas parecem causar dano pela força repentina exercida por elas, que poderia causar um grande dano interno num humano." +
    "<h1>Curiosidades</h1> <ul> <li> <p>A Liberação de Água tem o mesmo nome de uma arte ninja real chamada <b>'suiton-no-jutsu'</b>. Um exemplo dessa prática é o <b>Ukigasu-gakure:</b> a prática de atirar lentilha-d'água sobre a água para ocultar qualquer movimento debaixo dela.</p></li> "+ 
    " <li><p>O Clã Hōzuki utiliza uma técnica conhecida como Técnica de Hidratação, que permite o usuário converter seu corpo em água; isso lhes dá também uma fraqueza adicional contra a Liberação de Relâmpago, pois a água conduz eletricidade.</p></li>"+ 
    " <li><p><b>Tobirama Senju</b> é considerado o usuário de Liberação de Água mais poderoso que já existiu por causa de sua habilidade de criar técnicas poderosas quando nem havia qualquer fonte de água.</p></li>"+ 
    "<li><p>O Ninjutsu de Bolha de Sabão de Utakata é uma variação da Liberação de Água.</p></li></ul>";
}

function futonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/fuuton.gif')";
    heroText.innerHTML = "Futon";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
    conteudo.innerHTML = "Liberação de Vento (風遁, Fūton; TV Brasileira <b>'Estilo Vento'</b>) é uma das cinco áreas elementares básicas de transformação da natureza. Ela é executada ao moldar o chakra para se tornar o mais afiado e fino possível. A Liberação de Vento consiste principalmente de técnicas ofensivas de curto a médio alcance que combinam força bruta e precisão para causar danos cortantes." + 
    "<p>Sendo uma raridade entre as cinco naturezas básicas, as técnicas de vento são realizadas geralmente com geração de circulação de ar e podem ser fortalecidas por esse método também. Chakra da natureza vento também pode ser canalizado em lâminas para aumentar seu poder de corte e alcance geral.";
}
function katonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/katon.gif')";
    heroText.innerHTML = "Katon";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:none;');
    conteudo.innerHTML = "Liberação de Fogo (火遁, Katon; TV Brasileira <b>'Estilo Fogo'</b>) é uma das cinco áreas elementares básicas de transformação da natureza. Ele é executado ao moldar chakra superaquecido dentro do estômago antes de soltá-lo pelos pulmões e boca. Também há variações para isso na forma de meios combustíveis, tais como pólvora, papel explosivo e fluxo de chakra numa arma." +
"<p>Geralmente afiliada ao selo Tigre, a Liberação de Fogo consiste de técnicas ofensivas de médio a longo alcance que causam dano combustível e explosivo. Fogo é uma natureza de chakra comum entre shinobi de Konohagakure, no País do Fogo, notavelmente com o clã Sarutobi e clã Uchiha, tendo este último sido notado por manter uma afinidade natural com ele</p> "}
function dotonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/doton.gif')";
    heroText.innerHTML = "Doton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
    conteudo.innerHTML = "Liberação de Terra (土遁, Doton; TV Brasileira <b>'Estilo Terra'</b>) é uma das cinco áreas elementares básicas de transformação da natureza que permite o usuário manipular a terra ao redor para alguns fins defensivos ou ofensivos, ou até mesmo criá-la; seja na forma de poeira, lama ou rocha." + 
    "<p>As técnicas de Liberação de Terra têm a capacidade de alterar a força e composição da terra para ser tão dura como metal ou tão suave como argila, bem como manipular da densidade, tornando-a mais pesada ou mais leve. Isso inclui permitir que o usuário viaje através do solo e da rocha de várias maneiras que podem ser essenciais tanto para transporte e montagem de ataques, como criar defesas ou para ataques. De fato, isso faz das técnicas doton uma das mais versáteis das técnicas elementais. Não é necessária a terra pré-existente, o usuário pode criá-la com o seu próprio chakra.</p>" + 
    "<p>Afinidades com Terra são mais comuns entre os ninjas de <b>Iwagakure</b>, que se associam com o selo Cobra e/ou batendo as mãos no chão.</p> ";
}
function raitonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/raiton.gif')";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:darken;');
    heroText.innerHTML = "Raiton";
    conteudo.innerHTML = "Liberação de Relâmpago (雷遁, Raiton; TV Brasileira <b>'Estilo Relâmpago'</b>) é uma das cinco áreas elementares básicas de transformação da natureza que permite ao usuário gerar relâmpagos aumentando as vibrações de alta frequência do chakra, permitindo dano perfurante e movimento rápido. A eletricidade paralisa o alvo para assim deixá-lo sem poder se mexer e vulnerável a um golpe final. Mesmo sendo incomum, relâmpago pode ser fundido a armas laminadas numa maneira parecida com o Vento pelo fluxo de chakra, aumentando poder perfurante através das vibrações, com o efeito adicional de causar entorpecimento. Quando a técnica é lançada do corpo, e com isso não precisando de contato físico, não é tão rápida como o relâmpago natural. Em vez disso, devido ao controle que o usuário deve exercer sobre ela, o relâmpago é muito mais lento, dando ao inimigo tempo para reagir. A Liberação de Relâmpago é comum para os ninjas em Kumogakure." + 
    "<h1>Curiosidade</h1><ul><li><p>No anime, <b>Ribalta</b> é considerada a mais poderosa e destrutiva técnica de Liberação de Relâmpago de todas.</p></li></ul>";
}

function bakutonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/bakuton.gif')";
    heroText.innerHTML = "Bakuton";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:none;');
    conteudo.innerHTML = "Liberação de Explosão (爆遁, Bakuton; Panini <b>'Estilo da Explosão'</b>) é uma kekkei genkai de natureza avançada de chakra. Esta natureza é inicialmente formada pela natureza de terra e outra ainda desconhecida, dando ao seu portador a capacidade de utilizar o chakra explosivo em combate, permitindo-lhes causar explosões em objetos em que entram em contato. Os únicos usuários conhecidos desta natureza eram membros do Corpo de Explosão de Iwagakure."+
    "<H1>Curiosidades</H1><ul><li><p>De acordo com Hanzō e ele mesmo, Deidara possui esta kekkei genkai. A argila explosiva é sugerida sendo relacionada a este, apesar de ser referida como sendo uma técnica baseada em Terra. É provável que Deidara utilize o kinjutsu que ele roubou para amassar seu chakra explosivo na argila.</p></li> " + 
    "<li><p>Como visto na série, a Liberação de Explosão é neutralizada pela Liberação de Relâmpago, o que gera uma controvérsia, é possível que a Liberação de Relâmpago componha a Liberação de Explosão</p></li></ul>"
}

function rantonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/ranton.gif')";
    heroText.innerHTML = "Ranton";
    heroTitle.setAttribute('style', 'color: orange; mix-blend-mode:none;');
    conteudo.innerHTML = "Liberação de Tempestade (嵐遁, Ranton; TV Brasileira <b>'Estilo Vendaval'</b> ou <b>'Estilo Tempestade</b>) é uma kekkei genkai de natureza avançada de chakra que combina chakra baseado em água através do braço direito e relâmpago através do esquerdo. Essa kekkei genkai faz parte do grupo-Liberação de Relâmpago (雷遁系, Raiton-kei)."
}

function shakutonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/shakuton.gif')";
    heroText.innerHTML = "Shakuton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
    conteudo.innerHTML = "Liberação de Calor (灼遁, Shakuton; Panini <b>'Estilo do Calor'</b>) é uma kekkei genkai da natureza avançada de chakra composta por técnicas que combina a base de fogo e vento. Esta natureza cria um chakra que é capaz de aquecer um inimigo ao ponto que todo o líquido no interior de seu corpo evapore, matando a vítima e deixando-a como um cadáver dessecado." + 
    "<ul><li><p>Durante a Quarta Guerra Mundial Ninja, ao tentar atacar o corpo principal do Dez-Caudas, Sasuke Uchiha e Naruto Uzumaki combinaram suas técnicas de fogo e vento com a índole na mesma proporção de chakra, resultando em uma técnica que foi chamada de <b>'Liberação de Calor'</b> por Minato Namikaze. Esta foi provavelmente devido ao fato de que as transformações da natureza do fogo e do vento compõem a kekkei genkai</p></li> "+
    " <li><p> No anime, este elemento se mostrou fraco contra técnicas de Liberação de Água.</p></li></ul>";
}
function mokutonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/mokuton.gif')";
    heroText.innerHTML = "Mokuton";
    conteudo.innerHTML = "Liberação de Madeira (木遁, Mokuton; Panini <b>'Estilo Madeira'</b>) é uma Kekkei Genkai de natureza avançada originada no clã Ōtsutsuki e que foi mais tarde transmitida para o clã Senju.Ela é formada através da combinação simultânea das naturezas de chakra de terra em uma mão e de água na outra para criar madeira, bem como plantas ou árvores que florescem através de simples sementes a partir de qualquer superfície. Técnicas de Liberação de Madeira (木遁の術, <b>Mokuton no Jutsu</b>) são comumente associadas com o selo cobra. "+
    "<h1>Curiosidades</h1>"+
    " <ul><li><p>Mokuton tem o mesmo nome de uma arte ninja real chamada <b>'mokuton no jutsu'</b>. Um exemplo dessa prática é o Tanuki-gakure: a prática de subir numa árvore e se camuflar em meio a folhagem.</p></li>"+
    " <li><p>Dentre todas as naturezas de chakra de kekkei genkai, a Liberação de Madeira foi a que teve o maior número de técnicas e usuários.</p></li>"+
    " <li><p>No anime, o Cogumelo de Modelagem parece sugar o chakra de usuários de Liberação de Madeira.</p></li>"+
    " <li><p>No anime, Hashirama deixou para trás um pergaminho que detalha suas várias técnicas de Liberação de Madeira. Danzō, mais tarde, obteve este pergaminho e o deu para Yamato, na esperança de que um dia ele iria aperfeiçoar sua Liberação de Madeira para o nível de Hashirama.</p></li>"+
    " <li><p>Tanto Danzō Shimura quanto Madara Uchiha, que assimilaram-se com o DNA de Hashirama por seus próprios métodos, possuem uma replica do rosto de Hashirama em seus corpos.</p></li></ul>";
}
function hyotonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/hyoton.gif')";
    heroText.innerHTML = "Hyoton";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:darken;');
    conteudo.innerHTML = "Liberação de Gelo (氷遁, Hyōton; Panini <b>'Estilo Gelo'</b>) é a kekkei genkai de natureza avançada do clã Yuki, e permite que os usuários combinem o chakra à base de vento e água para criar e manipular gelo, formando-os em várias estruturas." + 
    "<h1>Curiosidades</h1>"+
    "<ul><li><p>A tradução do Viz mangá para Liberação de Gelo foi inicialmente traduzida como <b>'Artes Secretas da Água'</b> de Haku. Mais tarde na série, com a revelação de novas kekkei genkai, como a Liberação de Madeira, etc., a tradução do Viz mangá foi dada como <b>'Estilo Gelo'</b> para manter a uniformidade.</p></li>" +
    "<li><p>No anime, é comum técnicas de Liberação de Água capazes de formar gelo:</p></li>" +
    "<dd><p>A Liberação de Água: Ataque de Água do Céu Frio de Kajika é capaz de disparar projéteis de gelo, embora seja uma técnica de água.</p></dd>" +
    "<dd><p>A Técnica de Ocultação na Geada de Chūkichi é capaz de congelar a umidade no ar através da queda de temperatura, que permite que seu usuário torne-se transparente em meio a ela.</p></dd></ul>";
}

function jitonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/jiton.gif')";
    heroText.innerHTML = "Jiton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
    conteudo.innerHTML = "Liberação de Magnetismo (磁遁, Jiton; Panini <b>'Estilo do Magnetismo'</b>) é uma natureza avançada de kekkei genkai transmitida, embora com certa raridade dentro do clã Kazekage de Sunagakure. Essa natureza permite criar forças magnéticas com diferentes propriedades e usos. Sugere-se que esta seja composta por técnicas que combinam a base de chakra de vento e terra. Alguns shinobi de Kumogakure e Ishigakure também possuíam esta kekkei genkai."
}
function futtonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/futton.gif')";
    heroText.innerHTML = "Futton";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:darken;');
    conteudo.innerHTML  ="Liberação de Fervura (沸遁, Futton; Panini <>'Estilo da Ebulição'</b>) é uma kekkei genkai de natureza avançada de chakra que combina as naturezas fogo e água para criar substâncias gasosas em diferentes propriedades e usos." +
    "<h1>Curiosidade</h1> <ul><li><p>Mesmo não possuindo a besta com cauda, Kokuō, selada em seu interior, Naruto se tornou um usuário autêntico dessa natureza, de acordo com o Jin no Sho. </p></li><ul>";
}
function kagutsuchiClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/kagutsuchi.gif')";
    heroText.innerHTML = "Kagutsuchi";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
    conteudo.innerHTML = "A Liberação de Chama: <b>'Kagutsuchi'</b> é uma técnica que consiste na aplicação da Transformação da Forma nas chamas negras do Amaterasu, que permite ao usuário manipulá-las à vontade. Sasuke é capaz de criar o Amaterasu a partir de seu olho esquerdo, enquanto manipula as chamas pelo seu olho direito; ao contrário de Indra Ōtsutsuki, que controla suas chamas pelo olho esquerdo. Depois de entrar em sua forma final, o Susanoo de Sasuke ganhou uma esfera de chamas negras, que serve como uma fonte alternativa de chamas para manipular com esta técnica. Esta técnica também permite ao usuário apagar essas chamas, bem como manipular as chamas já existentes do Amaterasu no campo de batalha, gastando uma quantidade de chakra menor.";
}
function intonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/inton.gif')";
    heroText.innerHTML = "Inton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
    conteudo.innerHTML = "As técnicas de Liberação de Yin (陰遁, Inton; Literalmente significa <b>'Estilo Sombra'</b>), são baseadas na energia espiritual que governa a imaginação, podem ser usadas para criarem forma do nada. Quando combinado com a Liberação de Yang, é possível usar a Liberação de Yin-Yang. O Inton é retratado preto no mangá, e vermelho no anime, que foi mencionado pela primeira vez por Yamato durante o treinamento do Rasenshuriken de Naruto, assim como o Yang. O Poder Yin do Seis Caminhos é simbolizado por uma lua crescente, representado na palma da mão esquerda do portador.";
}
function yangClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/yang.gif')";
    heroText.innerHTML = "Ianton";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:darken;');
    conteudo.innerHTML = "As técnicas de Liberação de Yang (陽遁, Yōton; Viz <b>'Estilo Luz'</b>), são baseadas na energia física que governa a vitalidade, podem ser usadas para criar vida à forma. Quando combinado com Liberação de Yin, permite o uso da Liberação de Yin–Yang. O elemento é representado branco no mangá, e azul no anime.";
}

function yinyangClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/yinyang.gif')";
    heroText.innerHTML = "Yin-Yang";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
    conteudo.innerHTML = "A Liberação de Yin–Yang (陰陽遁, Onmyōton, In'yōton; TV Brasileira <b>'Estilo Sombra e Luz'</b>) contextualiza suas técnicas com o uso simultâneo da Liberação de Yin e Liberação de Yang. A Liberação de Yin relaciona-se a energia espiritual e a Liberação de Yang se relaciona com a energia da física e é necessário utilizar ambos a fim de moldar o chakra para ninjutsu. De acordo com Yamato, a manipulação de Yin-Yang é a fonte de técnicas não-elementares, tais como a Técnica de Imitação das Sombras, Técnica do Tamanho Múltiplo, Iryō Ninjutsu, genjutsu, etc. Por outro lado, além de formar a base do uso de ninjutsu, Tobirama Senju observou, que o Onmyōton também tem a capacidade de anular os efeitos de todos os ninjutsu tornando-os inúteis.";
}

function shotonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/shoton.gif')";
    heroText.innerHTML = "Shoton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
    conteudo.innerHTML = "A Liberação de Cristal (晶遁, Shōton; TV Brasileira <b>'Estilo Cristal'</b>) é uma área única e completamente potente de Ninjutsu Elemental, sendo capaz de formar cristal, controlar cristais que contêm no campo de batalha, além de manipular matéria cristalina. Infelizmente, foi visto somente no anime, e a única usuária que se viu utilizando este elemento é Guren. Manifesta-se que, devido os dragões de cristais de Guren se desfazerem ao Kakashi utilizar o Corte Relâmpago e Kiba confundir uma técnica de liberação de cristal com a Liberação de Terra, é suposto que liberação de terra seja compactada com o Estilo Cristal.";
}

function yotonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/yoton.gif')";
    heroText.innerHTML = "Yoton";
    heroTitle.setAttribute('style', 'color: orange; mix-blend-mode:none;');
    conteudo.innerHTML = "Liberação de Lava (熔遁; 溶遁, Yōton; Panini <b>'Estilo da Lava'</b> ou <b>'Estilo do Magma'</b>) é uma kekkei genkai de natureza avançada de chakra que combina as naturezas do chakra fogo e terra para criar lava e substâncias relacionadas, que podem servir a múltiplos propósitos." + 
    "<h1>Curiosidade</h1><ul><li><p>Quando a Liberação de Lava de Rōshi é mencionada primeiramente, o kanji 熔, com o radical de “fogo” (火), é usado. Em referências posteriores, quando a versão de Mei é usada, o kanji 溶, com o radical de “água” (水), é usado no lugar. Quando ambos Kurotsuchi e Dodai o usam, o radical de fogo é usado novamente. Isso parece indicar que a Liberação de Lava de Iwagakure e Kumogakure usa o radical de fogo, enquanto a de Kirigakure usa o radical de água. Porém, em databooks e fan books, ambos os kanji são usados para se referirem à Liberação de Lava de Rōshi.</p></li></ul>";
}


function trocarTela(){
    if (descricao.style.display !== "flex"){
        descricao.style.display = "flex";
        wrapper.style.display = "none";
        container.setAttribute('style', 'margin: 0 !important');
    } else {
        descricao.style.display = "none";
        wrapper.style.display = "block";

        container.setAttribute('style', 'margin: 60px auto !important');
    }
    topPage();
}

function topPage(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}