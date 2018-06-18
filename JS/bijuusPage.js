var container = document.getElementById("container_id");
var descricao = document.getElementById("descricao_id");
var wrapper = document.getElementById("wrapper")
var heroImage = document.getElementById("hero-image");
var heroText = document.getElementById("hero-text");
var voltarBtn = document.getElementById("voltar_id");

document.getElementsByTagName

voltarBtn.onclick = function(){
    trocarTela();
}

function shukakuClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Shukaku_Fundo.png')";
    heroText.innerHTML = "Shukaku";
}

function matatabiClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Matatabi_Fundo.png')";
    heroImage.style.backgroundPositionY = "-95px";
    heroText.innerHTML = "Matatabi";
}

function isobuClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Isobu_Fundo.png')";
    heroText.innerHTML = "Isobu";
}

function sonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Son_Fundo.png')";
    heroImage.style.backgroundPosition = "0 0";
    heroText.innerHTML = "Son";
}

function kokuoClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Kokuo_Fundo.png')";
    heroText.innerHTML = "Kokuo";
}

function saikenClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Saiken_Fundo.png')";
    heroImage.style.backgroundPosition = "0 0";
    heroText.innerHTML = "Saiken";
}

function chomeiClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Chomei_Fundo.png')";
    heroImage.style.backgroundPosition = "0 0";
    heroText.innerHTML = "Chomei";
}

function gyukiClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Gyuki_Fundo.png')";
    heroImage.style.backgroundPositionY = "10px";
    heroImage.style.backgroundPositionX = "-136px";
    heroText.innerHTML = "Gyuki";
}

function kuramaClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Kurama_Fundo.png')";
    heroImage.style.backgroundPositionY = "-35px";
    heroText.innerHTML = "Kurama";
}

function shinjuClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Shinju.png')";
    heroImage.style.backgroundPositionY = "-215px";
    heroImage.style.backgroundPositionX = "-115px";
    heroText.innerHTML = "Shinju";
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