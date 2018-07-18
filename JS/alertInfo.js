window.onload = function() {
    var modalAlert = document.createElement('div');
    var modalContent = document.createElement('div');
    var h1 = document.createElement('h1');
    var texto = document.createElement('p');
    var container = this.document.querySelector('.container-area');
    modalAlert.classList.add('modal-box');
    modalContent.classList.add('modal-content');
    h1.classList.add('notas-h1');
    modalAlert.style.display = 'block';
    h1.textContent = 'Notas';
    texto.innerHTML = "O site ainda não foi finalizado. Esperamos que goste mesmo em sua situação atual. Não temos planos de atualiza-lo por enquanto," +
    " mas quando este for atualizado, tenha certeza que terá um grande aumento em sua qualidade." + 
    "<p>Até então o maior problema do site é sua falta de responsividade, que será consertada em um futuro próximo.</p>" + 
    "Por fim agradecemos a sua visita, e tenha um bom aproveitamento neste humilde site do Naruto.  -Dattebayo!";
    texto.style.marginTop = '80px';
    modalContent.appendChild(h1);
    modalContent.appendChild(texto);
    modalAlert.appendChild(modalContent);
    container.appendChild(modalAlert);
    window.addEventListener('click', function(event){
        if (event.target == modalAlert){
            modalAlert.parentElement.removeChild(modalAlert);
        }
    });
}