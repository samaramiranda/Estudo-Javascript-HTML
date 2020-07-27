//PERCORRENDO O DOM II

(function () {
  "use strict"

  var main = document.querySelector(".main")
  var mainContent = document.querySelector(".main-content")

  //mostra apenas os nós HTML do elemento de classe "main" (não mostra text e comentários)
  console.log(main.children)


  //mostra o primeiro nó HTML filho da classe mainContent
  console.log(mainContent.firstElementChild)


  //mostra o ultimo nó HTML filho da classe mainContent
  console.log(mainContent.firstElementChild)


  //mostra o nó HTML irmão da classe main
  console.log(main.nextElementSibling)


  //mostra a quantidade de filhos HTML da classe main
  console.log(main.childElementCount)
  console.log(main.children.length)


  //MÉTODOS
  //verifica se o elemento tem um atributo específico
  console.log(main.hasAttribute("class"))

  //verifica se o elemento tem qualquer atributo
  console.log(main.hasAttributes)
})()