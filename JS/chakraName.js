var container = document.getElementById("container_id");
var descricao = document.getElementById("descricao_id");
var wrapper = document.getElementById("chakra")
var heroImage = document.getElementById("hero-image");
var heroText = document.getElementById("hero-text");
var heroTitle = document.getElementById("hero-title");
var voltarBtn = document.getElementById("voltar_id");


document.getElementsByTagName

voltarBtn.onclick = function(){
    trocarTela();
}
function jintonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/jinton.gif')";
    heroText.innerHTML = "Jinton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:difference;');
}

function suitonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/suiton.gif')";
    heroText.innerHTML = "Suiton";
    heroTitle.setAttribute('style', 'color: brown; mix-blend-mode:none;');
}

function futonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/fuuton.gif')";
    heroText.innerHTML = "Futon";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
}
function katonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/katon.gif')";
    heroText.innerHTML = "Katon";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:none;');
}
function dotonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/doton.gif')";
    heroText.innerHTML = "Doton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
}
function raitonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/raiton.gif')";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:darken;');
    heroText.innerHTML = "Raiton";
}

function bakutonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/bakuton.gif')";
    heroText.innerHTML = "Bakuton";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:none;');

}

function rantonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/ranton.gif')";
    heroText.innerHTML = "Ranton";
    heroTitle.setAttribute('style', 'color: orange; mix-blend-mode:none;');
}

function shakutonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/shakuton.gif')";
    heroText.innerHTML = "Shakuton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');

}
function mokutonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/mokuton.gif')";
    heroText.innerHTML = "Mokuton";
}
function hyotonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/hyoton.gif')";
    heroText.innerHTML = "Hyoton";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:darken;');
}

function jitonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/jiton.gif')";
    heroText.innerHTML = "Jiton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
}
function futtonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/futton.gif')";
    heroText.innerHTML = "Futton";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:darken;');
}
function kagutsuchiClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/kagutsuchi.gif')";
    heroText.innerHTML = "Kagutsuchi";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
}
function intonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/inton.gif')";
    heroText.innerHTML = "Inton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
}
function yangClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/yang.gif')";
    heroText.innerHTML = "Ianton";
    heroTitle.setAttribute('style', 'color: black; mix-blend-mode:darken;');
}

function yinyangClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/yinyang.gif')";
    heroText.innerHTML = "Yin-Yang";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
}

function shotonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/shoton.gif')";
    heroText.innerHTML = "Shoton";
    heroTitle.setAttribute('style', 'color: white; mix-blend-mode:lighter;');
}

function yotonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/gifs/yoton.gif')";
    heroText.innerHTML = "Yoton";
    heroTitle.setAttribute('style', 'color: orange; mix-blend-mode:none;');
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