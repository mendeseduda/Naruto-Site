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
    heroImage.style.backgroundPosition = "-200px";
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
    heroImage.style.backgroundPositionY = "-70px";
    heroText.innerHTML = "Isobu";
}

function sonClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Son_Fundo.png')";
    heroImage.style.backgroundPosition = "0";
    heroImage.style.backgroundSize = "contain";
    heroText.innerHTML = "Son";
}

function kokuoClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Kokuo_Fundo.png')";
    heroImage.style.backgroundPositionY = "-220px";
    heroImage.style.backgroundPositionX = "120px";
    heroImage.style.backgroundSize = "contain";
    heroText.innerHTML = "Kokuo";
}

function saikenClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Saiken_Fundo.png')";
    heroImage.style.backgroundPositionY = "80px";
    heroImage.style.backgroundPositionX = "160px";
    heroImage.style.backgroundSize = "contain";
    heroText.innerHTML = "Saiken";
}

function chomeiClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Chomei_Fundo.png')";
    heroImage.style.backgroundPositionY = "-75px";
    heroImage.style.backgroundPositionX = "90px";
    heroImage.style.backgroundSize = "contain";
    heroText.innerHTML = "Chomei";
}

function gyukiClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Gyuki_Fundo.png')";
    heroImage.style.backgroundPositionY = "10px";
    heroImage.style.backgroundPositionX = "-136px";
    heroImage.style.backgroundSize = "contain";
    heroText.innerHTML = "Gyuki";
}

function kuramaClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Kurama_Fundo.png')";
    heroImage.style.backgroundPositionY = "-35px";
    heroImage.style.backgroundSize = "contain";
    heroText.innerHTML = "Kurama";
}

function shinjuClick(){
    trocarTela();
    heroImage.style.backgroundImage = "url('Resources/Bijuus/Shinju.png')";
    heroImage.style.backgroundPositionY = "-215px";
    heroImage.style.backgroundPositionX = "-115px";
    heroImage.style.backgroundSize = "contain";
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
}