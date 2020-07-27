(function () {
  "use strict"

  var main = document.querySelector(".main")
  var mainContent = document.querySelector(".main-content")

  //pega o elemento pai do elemento de classe "main"
  console.log(main.parentNode)


  //pega todos os nós filhos do nó de classe "main"
  //quebra de linha e texto solto conta como nó filho também
  console.log(main.childNodes)


  //pega o primeiro filho do nó de classe "main"
  console.log(main.firstChild)


  //pega o último filho do nó de classe "main"
  console.log(main.lastChild)


  //mostra o próximo irmão do elemento de classe "main"
  console.log(main.nextSibling)


  //mostra o irmão anterior do elemento de classe "mainContent"
  console.log(mainContent.previousSibling)
})()