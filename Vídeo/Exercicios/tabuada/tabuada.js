function tabuada() {
  var numerotxt = document.getElementById("num")
  var resul = document.getElementById("resultado")

  if (numerotxt.value.length != 0) {
    var numero = Number(numerotxt.value)
    var cont = 0;
    resul.innerHTML = ""
    while (cont <= 10) {
      var item = document.createElement("option")
      item.text += `${numero} x ${cont} = ${numero * cont}`
      resul.appendChild(item)
      cont++
    }

    // for (cont; cont <= 10; cont++){
    //   var item = document.createElement("option")
    //   item.text += `${numero} x ${cont} = ${numero * cont}`
    //   resul.appendChild(item)
    // }

  } else {
    alert("Digite um número!")
  }
}