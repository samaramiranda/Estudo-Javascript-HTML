document.getElementById("calcular")
  .addEventListener("click", calculo)

function calculo(){
  var qtedias = Number(document.getElementById("dias").value)

  var ponthoras = qtedias
  var pontmin = ponthoras * 24
  var pontseg = pontmin * 60

  var resul = document.getElementById("resultado")
  resul.classList.toggle("resultado")
  resul.innerHTML = `O ponteiro de horas dá ${ponthoras} voltas 
    <br>O ponto de minutos dá ${pontmin} voltas
    <br>O ponteiro de segundos dá ${pontseg} voltas`
}