
function somanotas() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);

  var soma = parseFloat(nota1 + nota2 + nota3)

  document.getElementById("soma")
    .setAttribute("value", soma)
}


function medianotas() {
  var nota1 = parseFloat(document.getElementById("nota1").value)
  var nota2 = parseFloat(document.getElementById("nota2").value)
  var nota3 = parseFloat(document.getElementById("nota3").value)

  var media = parseFloat((nota1 + nota2 + nota3) / 3)

  document.getElementById("media")
    .setAttribute("value", media)
}

function situacaoaluno() {
  var nota1 = parseFloat(document.getElementById("nota1").value)
  var nota2 = parseFloat(document.getElementById("nota2").value)
  var nota3 = parseFloat(document.getElementById("nota3").value)

  var soma = parseFloat(nota1 + nota2 + nota3)

  if(soma > 50){
    document.getElementById("situacao")
      .setAttribute("value", "Aprovado :D")
  } else {
    document.getElementById("situacao")
      .setAttribute("value", "Reprovado :(")
  }
}


