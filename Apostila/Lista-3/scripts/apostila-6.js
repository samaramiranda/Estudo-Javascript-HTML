function calcular() {
  var n1 = Number(document.getElementById("nota1").value)
  var n2 = Number(document.getElementById("nota2").value)
  var n3 = Number(document.getElementById("nota3").value)
  var n4 = Number(document.getElementById("nota4").value)
  var resul = document.getElementById("resultado")

  var media = (n1 + n2 + n3 + n4)/5

  if (media >= 50){
    resul.innerHTML = `Sua média foi: ${media}. APROVADO!`
  }else {
    resul.innerHTML = `Sua média foi: ${media}. REPROVADO!`
  }
}