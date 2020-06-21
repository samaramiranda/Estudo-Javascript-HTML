function calcular () {
  var tambase = Number(document.getElementById("base").value)
  var tamalt = Number(document.getElementById("altura").value)
  var resul = document.getElementById("resultado")

  var calculo = tambase * tamalt

  resul.innerHTML = `A área do triângulo é de: ${calculo} cm²`
}