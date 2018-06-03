var aberto = false;

window.onclick = function(event) {
    if (event.target == document.getElementById("Sidenav_id")) {
        closeNav();
    }
}

function openNav() {
    if (aberto === false){
        document.getElementById("Sidenav_id").style.width = "250px";
        aberto = true;
    } else {
        closeNav();
    }
}

function closeNav() {
    document.getElementById("Sidenav_id").style.width = "0";
    aberto = false;
}
