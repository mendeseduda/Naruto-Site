window.onload = function(){ 
    //sessionStorage.clear();
    var votacao = document.getElementById("votacao_id");
    var votosNaruto = 0, votosSasuke = 0, totalVotos = 0;
    votacao.onclick = function(event) {
            if (sessionStorage.getItem("narutoVotos") === null || sessionStorage.getItem("sasukeVotos") === null
            || sessionStorage.getItem("totalVotos") === null){
                sessionStorage.setItem("narutoVotos", 0);
                sessionStorage.setItem("sasukeVotos", 0);
                sessionStorage.setItem("totalVotos", 0);
            } else {
                votosNaruto = Number(sessionStorage.getItem("narutoVotos"));
                votosSasuke = Number(sessionStorage.getItem("sasukeVotos"));
                totalVotos = Number(sessionStorage.getItem("totalVotos"));
            }
            console.log(votosNaruto);
            console.log(votosSasuke);
            console.log(totalVotos);
            if (event.target == document.getElementById("naruto_id")){
                votosNaruto++;
            } else if (event.target == document.getElementById("sasuke_id")){
                votosSasuke++;
            } else {
                return;
            }
            totalVotos = votosNaruto + votosSasuke;
            var porcentagemNaruto, porcentagemSasuke;
            porcentagemNaruto = Math.round((votosNaruto / totalVotos) * 100);
            porcentagemSasuke = Math.round((votosSasuke / totalVotos) * 100); 
            console.log('Naruto votos = ' + porcentagemNaruto);
            console.log('Sasuke votos = ' + porcentagemSasuke);
            votacao.style.display = "none";
            var voteBarra = document.getElementById("voteBarra_id");
            voteBarra.style.width = porcentagemNaruto + "%";
            voteBarra.innerHTML = porcentagemNaruto + "%";
            document.getElementById("votacao").style.display = "flex";  
            sessionStorage.setItem("narutoVotos", votosNaruto);
            sessionStorage.setItem("sasukeVotos", votosSasuke);
            sessionStorage.setItem("totalVotos", totalVotos);
    };    
}