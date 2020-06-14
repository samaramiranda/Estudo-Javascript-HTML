function calcular() {
  var rec = Number(document.getElementById("receita").value)
  var des = Number(document.getElementById("despesa").value)
  var resu = document.getElementById("resultado")

  if (rec > des) {
    resu.innerHTML = "Você ganhou lucro!"
  } else {
    resu.innerHTML = "Você levou prejuízo!"
  }
}