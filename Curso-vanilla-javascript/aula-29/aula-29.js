//AJAX COM JSON

(function (window, document) {
  "use strict";

  let btn = document.querySelector("#btnDb")

  //Exibe o banco de dados JSON
  function showDb() {
    let ajax = new XMLHttpRequest()
    //abrindo a requisição
    ajax.open("GET", "db.json")
    ajax.onreadystatechange = function () {
      //verificando se requisição teve sucesso e se está no ultimo estado
      if (ajax.status === 200 && ajax.readyState === 4) {
        //exibindo o status da requisição
        console.log(ajax.status)
        //exibindo em qual estado está
        console.log(ajax.readyState)
        console.log("Tudo OK")
        //retorna o db em texto
        console.log(ajax.responseText)
        //transforma a resposta ajax em objeto
        let res = JSON.parse(ajax.responseText)
        console.log(res)
        //salvando o objeto car do db em variável
        let car = res.car
        //exibindo as cores e os anos dos carros
        for (let i = 0; i < car.length; i++) {
          console.log(car[i].color)
          console.log(car[i].year)
        }
      }

    }
    //enviando a requisição
    ajax.send()
  }
  btn.addEventListener("click", showDb)

})(window, document)