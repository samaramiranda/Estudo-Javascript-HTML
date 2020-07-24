//FORMULÁRIOS II

(function (window, document) {
  "use strict"

  let form1 = document.querySelector("#form1")
  let inpText = document.querySelector("#inpText")
  let txtArea = document.querySelector("#txtArea")
  let lengthArea = document.querySelector("#lengthArea")
  let check = document.querySelector("#check")
  let radio = document.getElementsByName("gender")
  let sel = document.querySelector("#sel")
  let btn = document.querySelector("#btn")

  form1.action = "teste.php"
  inpText.style.backgroundColor = "gray"


  //VALIDANDO INPUT VAZIO
  // if(inpText.value === ""){
  //   alert("Preencha o campo")
  // }
  //OU
  function validateInput(event) {
    if (event.target.value == "") {
      return alert("Preencha o campo")
    }
  }
  inpText.addEventListener("blur", validateInput)


  //TEXT AREA
  //Validando textArea com a mesma função do input
  txtArea.addEventListener("blur", validateInput)

  //Contando a quantidade de caracteres digitados
  function countArea(event) {
    lengthArea.innerHTML = event.target.textLength

    //se chegar a 30 caracteres o textArea é desabilitado
    if (event.target.textLength >= 30) {
      txtArea.setAttribute("disabled", "disabled")
    }
  }
  txtArea.addEventListener("keydown", countArea)


  //CHECKBOX
  function checar(event) {
    if (event.target.checked) {
      alert("Checado")
    }
  }
  check.addEventListener("click", checar)


  //RADIO
  function radioTest(event) {
    if (event.target.value == "Male") {
      alert("Masculino")
    } else {
      alert("Feminino")
    }
  }
  //deve usar o "for" por existirem 2 "radios" de mesmo nome
  for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener("click", radioTest)
  }


  //SELECT
  function selValidate(event) {
    if (event.target.selectedIndex == 0) {
      alert("Selecione uma opção")
    } else {
      alert(`Opção selecionada ${event.target.value}`)
    }
  }
  sel.addEventListener("change", selValidate)


  //BUTTON
  function submitForm(event){
    event.preventDefault()
    console.log("Botão clicado")
  }
  btn.addEventListener("click", submitForm)

})(window, document)