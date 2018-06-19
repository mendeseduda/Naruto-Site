var akatsukiGroup = document.getElementById("akatsuki-group_id");
var section = document.getElementById("sectionPricipal_id");
var textoPrincipal = document.getElementById("textoCentral_id");
var voltarBtn = document.getElementById("voltar_id");
var h1 = document.getElementById("texto_id")
var audio = document.getElementById("audioTheme");

voltarBtn.onclick = function(){
    trocarTela();
}

function akatsukiClick(membro){
    trocarTela(membro);
}

function trocarTela(texto){
    if (akatsukiGroup.style.display !== "none"){
        akatsukiGroup.style.display = "none";
        textoPrincipal.style.transform = "none";
        section.setAttribute('style', 'display: block !important');
        textoPrincipal.style.position = "static";
        textoPrincipal.style.border = "none";
        h1.innerHTML = texto;
    } else {
        akatsukiGroup.style.display = "flex";
        section.setAttribute('style', 'display: none !important');
        textoPrincipal.style.position = "absolute";
        textoPrincipal.style.transform = "translate(-50%, -50%)";
        h1.innerHTML = "Akatsuki";
    }
}

function muteAudio(){
    audio.muted = !audio.muted;
}