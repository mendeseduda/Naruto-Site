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


window.onload = function(){ 
    var votacao = document.getElementById("votacao_id");
    votacao.onclick = function(event) {
            if (typeof(Storage) !== undefined) {
                if (sessionStorage.narutocount || sessionStorage.sasukecount || sessionStorage.totalcount) {
                    sessionStorage.narutocount = Number(sessionStorage.narutocount);
                    sessionStorage.sasukecount = Number(sessionStorage.sasukecount);
                    sessionStorage.totalcount = Number(sessionStorage.totalcount);
                } else {
                    sessionStorage.narutocount = sessionStorage.narutocount;
                    sessionStorage.sasukecount = sessionStorage.sasukecount;
                    sessionStorage.totalcount = sessionStorage.totalcount;
                }
            }
            if (event.target == document.getElementById("naruto_id")){
                sessionStorage.narutocount++;
            } else if (event.target == document.getElementById("sasuke_id")){
                sessionStorage.sasukecount++;
            }
            sessionStorage.totalcount = sessionStorage.narutocount + sessionStorage.sasukecount;
            var porcentagemNaruto, porcentagemSasuke;
            porcentagemNaruto = Math.round((sessionStorage.narutocount / sessionStorage.totalcount) * 100);
            porcentagemSasuke = Math.round((sessionStorage.sasukecount / sessionStorage.totalcount) * 100); 
            console.log('Naruto votos = ' + porcentagemNaruto);
            console.log('Sasuke votos = ' + porcentagemSasuke);
            votacao.style.display = "none";
            var narutoBarra = document.getElementById("narutoBarra_id");
            narutoBarra.style.width = porcentagemNaruto + "%";
            narutoBarra.innerHTML = porcentagemNaruto + "%";
            document.getElementsByClassName("container-voto")[0].style.display = "block";   
    };
    //  sessionStorage.clear();    
}