function verificar() {
  var cod = Number(document.getElementById("codigo").value)
  var resul = document.getElementById("resultado")

  switch (cod) {
    case 1:
      resul.innerHTML = `${cod} - Liquidificador`
      break
    case 2:
      resul.innerHTML = `${cod} - Aspirador de pó`
      break
    case 3:
      resul.innerHTML = `${cod} - Máquina de lavar`
      break
    default: 
    resul.innerHTML = `${cod} - CÓDIGO INVÁLIDO!`
  }
}