var akatsukiGroup = document.getElementById("akatsuki-group_id");
var textoPrincipal = document.getElementById("texto_id");
var audio = document.getElementById("audioTheme");
audio.play();

function akatsukiOver(membro){
    textoPrincipal.innerHTML = membro;
}

function akatsukiout(){
    textoPrincipal.innerHTML = "Akatsuki";
}

function muteAudio(){
    if (audio.muted){
        audio.muted = false;
    } else {
        audio.muted = true;
    }
}