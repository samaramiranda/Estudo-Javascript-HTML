
function soma() {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)
  
  var resultadosoma = numero1 + numero2

  document.getElementById("resulsoma")
    .setAttribute("value", resultadosoma)
}

function subtracao()  {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var resultadosubtracao = numero1 - numero2

  document.getElementById("resulsubtracao")
    .setAttribute("value", resultadosubtracao)
}

function multiplicacaonum() {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var resultadomultiplicao = numero1 * numero2

  document.getElementById("resulmultiplicacao")
    .setAttribute("value", resultadomultiplicao)
}

function divisaointeiro() {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var resultadodivinteiro = numero1 % numero2

  document.getElementById("resuldivisaoint")
    .setAttribute("value", resultadodivinteiro)
}

function divisaodecimal() {
  var numero1 = Number(document.getElementById("num1").value)
  var numero2 = Number(document.getElementById("num2").value)

  var resultadodivdecimal = numero1 / numero2

  document.getElementById("resuldivisaodec")
    .setAttribute("value", resultadodivdecimal)
}