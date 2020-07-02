function contagem() {
  var start = Number(document.getElementById("inicio").value)
  var end = Number(document.getElementById("fim").value)
  var passonum = Number(document.getElementById("passo").value)
  var resul = document.getElementById("resultado")

  if (start == "" || end == "") {
    resul.innerHTML = "Impossível contar. Verifique os dados!"
  } else {
    resul.innerHTML = "Contando: <br>"
    if (passonum == 0) {
      alert("Impossível passar 0! Será considerado como 1!")
      passonum = 1;
    }
    if (start < end) {
      while (start <= end) {
        resul.innerHTML += `${start} 👉`
        start += passonum
      }

      // for(start; start < end; passonum){
      //   resul.innerHTML += `${start} 👉`
      //   start-=passonum
      // }

    } else {
      while (start >= end) {
        resul.innerHTML += `${start} 👉`
        start -= passonum
      }
    }
    resul.innerHTML += `🏁`
  }

}

