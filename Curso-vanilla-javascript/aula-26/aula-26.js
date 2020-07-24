//FORMULÁRIOS II

(function (window, document) {
  "use strict"

  let form1 = document.querySelector("#form1")
  let inpText = document.querySelector("#inpText")
  let txtArea = document.querySelector("#txtArea")
  let lengthArea = document.querySelector("#lengthArea")
  let check = document.querySelector("#check")

  form1.action = "teste.php"
  inpText.style.backgroundColor = "gray"


  //VALIDANDO INPUT VAZIO
  // if(inpText.value === ""){
  //   alert("Preencha o campo")
  // }
  //OU
  function validateInput(event){
    if(event.target.value == ""){
      return alert("Preencha o campo")
    }
  }
  inpText.addEventListener("blur", validateInput)


  //TEXT AREA
  //Validando textArea com a mesma função do input
  txtArea.addEventListener("blur", validateInput)

  //Contando a quantidade de caracteres digitados
  function countArea(event){
    lengthArea.innerHTML = event.target.textLength

    //se chegar a 30 caracteres o textArea é desabilitado
    if(event.target.textLength >= 30){
      txtArea.setAttribute("disabled", "disabled")
    }
  }
  txtArea.addEventListener("keydown", countArea)



  //CHECKBOX
  console.log(check.checked)
  if(check.checked == false){
    alert("Acdeite")
  }


})(window, document)