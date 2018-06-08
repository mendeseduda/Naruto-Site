var aberto = null;

document.getElementById("Eduardo_id").onclick = function(){
    var modal = document.getElementById("Eduardo-modal");
    modal.style.display = "block";
    aberto = modal;
}

document.getElementById("Maia_id").onclick = function(){
    var modal = document.getElementById("Maia-modal");
    modal.style.display = "block";
    aberto = modal;
}

document.getElementById("Aldeia_id").onclick = function(){
    var modal = document.getElementById("Aldeia-Juliana-modal");
    modal.style.display = "block";
    aberto = modal;
}

function closeModal(){
    aberto.style.display = "none";
}

window.onclick = function(){
    if (event.target == aberto){
        aberto.style.display = "none";
    }
}
