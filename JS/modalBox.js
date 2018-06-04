var modal = document.getElementById("Eduardo-modal");
var eduardoBtn = document.getElementById("Eduardo_id");
var span = document.getElementsByClassName("close")[0];

eduardoBtn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

