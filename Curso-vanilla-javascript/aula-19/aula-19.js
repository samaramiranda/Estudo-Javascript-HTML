//EVENTOS E POLIMORFISMO

(function (window, document) {

  let btn = document.querySelectorAll(".button")
  let body = document.querySelector("body")

  function changeColors(event) {
    //altera para a cor do data-color que defini no button html
    //dataset pega o "data-color" no html
    body.style.backgroundColor = event.target.dataset.color
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", changeColors)
  }
}(window, document))