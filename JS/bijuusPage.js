var descricao = document.getElementById("descricao_id");
var wrapper = document.getElementById("wrapper")
var heroImage = document.getElementById("hero-image");
var heroText = document.getElementById("hero-text");

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
    heroImage.style.backgroundPositionY = "55px";
    heroImage.style.backgroundPositionX = "130px";
    heroImage.style.backgroundSize = "contain";
    heroText.innerHTML = "Saiken";
}

function chomeiClick(){
    trocarTela();
}

function gyukiClick(){
    trocarTela();
}

function kuramaClick(){
    trocarTela();
}

function shinjuClick(){
    trocarTela();
}

function trocarTela(){
    descricao.style.display = "flex";
    wrapper.style.display = "none";
}