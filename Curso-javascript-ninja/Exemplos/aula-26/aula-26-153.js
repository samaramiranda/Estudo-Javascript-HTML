//PERCORRENDO O DOM - MÉTODOS I

(function () {
  "use strict"

  var mainHeader = document.querySelector(".main-header")
  var mainContent = document.querySelector(".main-content")
  var firstText = mainContent.firstChild

  //move um elemento para dentro de outro (filho de outro)
  console.log(mainContent.appendChild(mainHeader))  

  
  //insere um elemento antes de outro elemento dentro da classe mainContent
  mainContent.insertBefore(mainHeader, firstText)


  //clona um elemento já existente (true copia o conteúdo do elemento também, e false não)
  var cloneMainHeader =  mainHeader.cloneNode(true)
  mainContent.appendChild(cloneMainHeader)//inserindo o elemento criado na classe mainContent
  console.log(document.querySelectorAll(".main-header").length)


  //verifica se o elemento tem algum nó filho (texto ou não)
  console.log(mainContent.hasChildNodes())



})()