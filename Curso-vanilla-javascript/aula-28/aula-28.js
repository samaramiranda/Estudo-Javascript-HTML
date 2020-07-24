//EVENTLOOP, SETTIMEOUT E SETINTERVAL

(function (window, document) {
  "use strict";

  let btn = document.querySelector("#btn")

  console.log("Hello")

  //Forma assíncrona, só é executado se clicar no botão
  function counter(event) {
    for (let i = 0; i < 10; i++) {
      console.log(i)
    }
  }
  btn.addEventListener("click", counter)

  console.log("World")


  //**setTimeOut**
  //executa a função só depois do tempo passado no parâmetro
  setTimeout(counter, 3000)


  //**setInterval**
  //funciona igual o setTimeOut, mas se repete de acordo com a contagem
  setInterval(counter, 3000)


  //**setTimeOut recursivo**
  let i = 0
  function counter2() {
    i++
    console.log(i)

    //comando e parada para o setTimeOut
    if (i >= 5) {
      return
    }

    //setTimeOut chamando a função de forma recursiva
    setTimeout(counter2, 1000)
  }
  counter2()

})(window, document)