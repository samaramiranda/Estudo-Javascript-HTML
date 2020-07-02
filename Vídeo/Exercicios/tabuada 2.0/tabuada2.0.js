var numerotxt = document.getElementById("num")
var resul = document.getElementById("resultado")
var cont = 0

function adicao() {
  if (numerotxt.value.length == 0) {
    alert("Digite um número!")
  } else {
    let numero = Number(numerotxt.value)
    resul.innerHTML = ""
    for (cont; cont <= 10; cont++) {
      let item = document.createElement("option")
      item.text += `${numero} + ${cont} = ${numero + cont}`
      resul.appendChild(item)
    }
  }
  cont = 0
}

function subtracao() {
  if (numerotxt.value.length == 0) {
    alert("Digite um número!")
  } else {
    let numero = Number(numerotxt.value)
    resul.innerHTML = ""
    for (cont; cont <= 10; cont++) {
      let item = document.createElement("option")
      item.text += `${numero} - ${cont} = ${numero - cont}`
      resul.appendChild(item)
    }
  }
  cont = 0
}

function multiplicacao() {
  if (numerotxt.value.length == 0) {
    alert("Digite um número!")
  } else {
    let numero = Number(numerotxt.value)
    resul.innerHTML = ""
    for (cont; cont <= 10; cont++) {
      let item = document.createElement("option")
      item.text += `${numero} x ${cont} = ${numero * cont}`
      resul.appendChild(item)
    }
  }
  cont = 0
}

function divisao() {
  if (numerotxt.value.length == 0) {
    alert("Digite um número!")
  } else {
    var numero = Number(numerotxt.value)
    resul.innerHTML = ""

    for (cont; cont <= 10; cont++) {
      if (cont == 0) {
        let item = document.createElement("option")
        item.text = `Impossível dividir por zero`
        resul.appendChild(item)
        cont++
      }

      item = document.createElement("option")
      item.text += `${numero} / ${cont} = ${(numero / cont).toFixed(2)}`
      resul.appendChild(item)
    }
  }
  cont = 0
}
