function calcular() {
  var num1 = Number(document.getElementById("val1").value)
  var num2 = Number(document.getElementById("val2").value)
  var res = document.getElementById("resultado")

  if (num1 > num2) {
    var resultado = num1 / num2
    res.innerHTML = `O resultado do maior número: ${num1} dividido pelo menor número: ${num2} é: ${resultado}`
  } else {
    var resultado = num2 / num1
    res.innerHTML = `O resultado do maior número: ${num2} dividido pelo menor número: ${num1} é: ${resultado}`
  }
}