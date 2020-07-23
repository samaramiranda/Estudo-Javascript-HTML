//DELEGAÇÃO DE EVENTOS

(function (window, document) {
  "use strict";

  let btn = document.querySelector("#btn")
  let main = document.querySelector(".main")

  //quando clico no primeiro botão é criado outro novo
  function createElement() {
    const newButton = document.createElement("button")
    //atribuindo um id ao botão criado
    newButton.id = ("newButton")
    newButton.innerHTML = "New Button"

    main.appendChild(newButton)
  }

  function alertar(event) {
    //apenas se o id do local clicado for "newButton" é exibido o alerta
    if (event.target.id == "newButton") {
      alert("Novo botão clicado")
    }
  }

  btn.addEventListener("click", createElement)

  /*Para chamar a função de alertar quando clico no botão é necessário
  delegar o evento a classe pai do botão novo, no caso a div "main"*/
  main.addEventListener("click", alertar)

  //OUTRA FORMA DE FAZER
  /*Crio uma lista dos eventos que podem existir dentro do main*/
  // function optEvents() {
  //   if (event.target.id == "newButton") {
  //     alert("Novo botão clicado")
  //   } else if (event.target.id == "btn") {
  //     createElement()
  //   }
  // }

  // //Delegando as opções de evento a classe pai
  // main.addEventListener("click", optEvents)

})(window, document)