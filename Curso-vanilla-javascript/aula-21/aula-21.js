//PROPRIEDADES E ATRIBUTOS

(function (window, document) {
  "use strict";

  //Selecionando atributo do CSS
  let body = document.querySelector("body")
  body.style.backgroundColor = "blue"

  //Selecionando propriedade html
  let image = document.querySelector("#cruzeiro")
  console.log(image.className)
  console.log(image.src)

  //Selecionando propriedade não padrão do html (dataset)
  console.log(image.dataset.info)//(info) é o nome definido no html


  //OUTRAS FORMAS
  //apresenta todas as propriedades do elemento
  console.log(image.attributes)

  //pesquisa por um atributo específico do elemento
  console.log(image.hasAttribute("data-info"))
  console.log(image.hasAttribute("data-info2"))

  //retorna o conteúdo de um atributo específico
  console.log(image.getAttribute("data-info"))

  //cria um atributo ou seta um valor para um atributo (1 parâmetro o atributo e 2 parâmetro o valor)
  console.log(image.setAttribute("data-color", "pink"))

  //remove um atributo do elemento
  image.removeAttribute("id")

})(window, document)