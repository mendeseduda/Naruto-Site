var aberto = false;

function openNav() {
    if (aberto === false){
        document.getElementById("Sidenav_id").style.width = "250px";
        aberto = true;
        console.log(aberto);
    } else {
        closeNav();
    }
}

function closeNav() {
    document.getElementById("Sidenav_id").style.width = "0";
    aberto = false;
}