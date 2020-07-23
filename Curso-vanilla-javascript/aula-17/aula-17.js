//SELECIONANDO ELEMENTOS

(function (window, document) {
  "use strict";

  let teste = document.getElementById("teste")
  teste.className = "New Class"
  teste.style.color = "pink"


  let myClass = document.getElementsByClassName("btn")
  console.log(myClass[0].innerHTML)


  let byName = document.getElementsByName("img")
  console.log(byName)


  let byQuerry = document.querySelector(".divClass")
  console.log(byQuerry)

  let byQuerryAtri = document.querySelector("[alt='Testando']")
  console.log(byQuerryAtri)


  let byQuerryAll = document.querySelectorAll(".btn")
  for (let i = 0; i < byQuerryAll.length; i++) {
    byQuerryAll[i].addEventListener("click", function () {
      alert(`Botão clicado ${this.innerHTML}`)
      document.querySelector("body").style.backgroundColor = this.getAttribute("data-color")
    })
  }
})(window, document)