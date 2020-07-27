//PERCORRENDO O DOM - ATRIBUTOS

(function () {
  "use strict"

  var main = document.querySelector(".main")

  //pegando o id de um elemento
  console.log(main.id)

  //modificando o nome da classe do elemento
  console.log(main.className = "teste")


  //pega qualquer atributo do elemento, no caso a class
  console.log(main.getAttribute("class"))


  //cria ou modifica um atributo
  console.log(main.setAttribute("data-js", "main-datajs"))


})()