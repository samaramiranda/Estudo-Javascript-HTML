function loading() {
  var msgdia = document.getElementById("dia")
  var msg = document.getElementById("msg")
  var img = document.getElementById("img")
  var data = new Date()
  var dia = data.getDay()
  var hora = data.getHours()
  var minuto = data.getMinutes()
  var seg = data.getSeconds()

  switch (dia) {
    case 0:
      msgdia.innerHTML = "Segunda-feira"
      break
    case 1:
      msgdia.innerHTML = "Segunda-feira"
      break
    case 2:
      msgdia.innerHTML = "Terça-feira"
      break
    case 3:
      msgdia.innerHTML = "Quarta-feira"
      break
    case 4:
      msgdia.innerHTML = "Quinta-feira"
      break
    case 5:
      msgdia.innerHTML = "Sexta-feira"
      break
    case 6:
      msgdia.innerHTML = "Sábado"
      break
    case 7:
      msgdia.innerHTML = "Domingo"
  }

  msg.innerHTML = `${hora}:${minuto}`

  if (hora >= 00 && hora < 12) {
    img.src = "../relogio/assets/manha.jpg"
    document.body.style.background = "#FFDEAD"
  } else if (hora >= 12 && hora <= 18) {
    img.src = "../relogio/assets/tarde.jpg"
    document.body.style.background = "#d99789"
  } else {
    img.src = "../relogio/assets/noite.jpg"
    document.body.style.background = "#808080"
  }
}