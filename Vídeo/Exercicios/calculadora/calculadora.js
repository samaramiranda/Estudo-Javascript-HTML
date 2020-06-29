
document.getElementById("somar")
  .addEventListener("click", soma)
function soma() {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var resultadosoma = Number(numero1 + numero2)

  document.getElementById("resulsoma")
    .setAttribute("value", resultadosoma)
}

document.getElementById("subtrair")
  .addEventListener("click", subtracao)
function subtracao()  {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var resultadosubtracao = numero1 - numero2

  document.getElementById("resulsubtracao")
    .setAttribute("value", resultadosubtracao)
}

document.getElementById("multiplicar")
  .addEventListener("click", multiplicacaonum)
function multiplicacaonum() {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var resultadomultiplicao = numero1 * numero2

  document.getElementById("resulmultiplicacao")
    .setAttribute("value", resultadomultiplicao)
}

document.getElementById("dividirinteiro")
  .addEventListener("click", divisaointeiro)
function divisaointeiro() {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var resultadodivinteiro = numero1 % numero2

  document.getElementById("resuldivisaoint")
    .setAttribute("value", resultadodivinteiro)
}

document.getElementById("dividirdecimal")
  .addEventListener("click", divisaodecimal)
function divisaodecimal() {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var resultadodivdecimal = numero1 / numero2

  document.getElementById("resuldivisaodec")
    .setAttribute("value", resultadodivdecimal)
}