document.getElementById("verificar")
  .addEventListener("click", verifique)

  function verifique() {
    var cod = Number(document.getElementById("codigo").value)
    var resul = document.getElementById("resultado")

    switch (cod) {
      case 1: 
        resul.innerHTML = `${cod} - sabão`
        break
      case 2:
        resul.innerHTML = `${cod} - vassoura`
        break
      case 3:
        resul.innerHTML = `${cod} - sabonete`
        break
      case 4: 
        resul.innerHTML = `${cod} - detergente`
        break
      case 5: 
        resul.innerHTML = `${cod} - desinfetante`
        break
      case 6:
        resul.innerHTML = `${cod} - caderno`
        break
      case 7:
        resul.innerHTML = `${cod} - caneta`
        break
      default: 
        resul.innerHTML = `${cod} - CÓDIGO INVÁLIDO!`
    }
  }