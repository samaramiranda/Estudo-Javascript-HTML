//PERCORRENDO O DOM I

(function () {
  "use strict"

  var main = document.querySelector(".main")
  var mainContent = document.querySelector(".main-content")

  //mostra o tipo de nó do elemento de classe "main"
  //cada número representa um tipo de elemento (ex element = 1)
  console.log(main.nodeType)


  //pega o texto dos elementos "text" e "comentário" do primeiro filho da classe "main-content"
  console.log(mainContent.firstChild.nodeValue)
  //pega o texto do irmão do elemento acima
  console.log(mainContent.firstChild.nextSibling.nodeValue)


  //mostra o nome do nó do elemento de classe "main"
  console.log(main.nodeName)
})()