document.getElementById("calcular")
  .addEventListener("click", calculo)

function calculo() {
  var kmlt = Number(document.getElementById("kmporlt").value)
  var odoini = Number(document.getElementById("valinicial").value)
  var odofin = Number(document.getElementById("valfinal").value)

  var kmfeitos = odofin - odoini
  var resulgasto = kmfeitos / kmlt

  var resul = document.getElementById("resultado")
  resul.classList.toggle("resultado")
  resul.innerHTML = `${resulgasto} Litros gastos`
}