//AJAX COM NODEJS II

(function readyJS(window, document) {
  'use strict';

  let form1 = document.querySelector('#form1');
  let name = document.querySelector('#name');
  let response = document.querySelector('.response');

  //Enviando o form para o Node
  function sendForm(event) {
    event.preventDefault();
    let ajax = new XMLHttpRequest();
    let params = 'name=' + name.value;

    //MÉTODO POST COM AJAX
    ajax.open('POST', 'http://localhost:3000');
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        let arr = JSON.parse(ajax.responseText);
        response.innerHTML = "O usuário " + arr.name + " possui " + arr.age + " anos de idade.";
      }
    };
    ajax.send(params);
  }
  form1.addEventListener('submit', sendForm, false);
})(window, document);