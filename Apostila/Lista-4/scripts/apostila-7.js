function verificar() {
  var num = Number(document.getElementById("numero").value)
  var resul = document.getElementById("resultado")

  
  if((num % 2) == 0){
    resul.innerHTML = "Número par"
  }else{
    resul.innerHTML = "Número ímpar"
  }
}