function verificar() {
  var num = Number(document.getElementById("mes").value)
  var resul = document.getElementById("resultado")

  switch (num) {
    case 1: 
      resul.innerHTML = "Janeiro"
      break
    case 2: 
      resul.innerHTML = "Fevereiro"
      break
    case 3:
      resul.innerHTML = "Março"
      break
    case 4: 
      resul.innerHTML = "Abril"
      break
    case 5: 
      resul.innerHTML = "Maio"
      break
    case 6: 
      resul.innerHTML = "Junho"
      break
    case 7:
      resul.innerHTML = "Julho"
      break
    case 8: 
      resul.innerHTML = "Agosto"
      break
    case 9: 
      resul.innerHTML = "Setembro"
      break
    case 10: 
      resul.innerHTML = "Outubro"
      break
    case 11:
      resul.innerHTML = "Novembro"
      break
    case 12: 
      resul.innerHTML = "Dezembro"
    default:
      resul.innerHTML = "Número inválido. Digite novamente."
  }
}