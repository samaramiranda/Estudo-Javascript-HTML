//PERCORRENDO O DOM - MÉTODOS II

(function () {
  "use strict"

  var main = document.querySelector(".main")
  var mainHeader = document.querySelector(".main-header")
  var cloneMainHeader = mainHeader.cloneNode(true)
  var mainContent = document.querySelector(".main-content")
  var h1 = mainHeader.firstElementChild
  var mainFooter = document.querySelector(".main-footer")

  //remove um filho do elemento
  // mainHeader.removeChild(h1)


  //substitui um elemento filho por outro
  //substituindo o mainFooter pelo cloneMainHeader
  main.replaceChild(cloneMainHeader, mainFooter)


  //cria um nó de texto e insere na classe "main"
  var newText = document.createTextNode("Oi")
  main.appendChild(newText)


  //cria um novo elemento e insere nele o texto criado acima
  var newP = document.createElement("p")
  newP.appendChild(newText)
  main.appendChild(newP)//inserindo o novo elemento na classe "main"


})()