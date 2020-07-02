var valores = []
var select = document.getElementById("selectresul")
var resul = document.getElementById("resultado")

function adicionar() {
  let numero = Number(document.getElementById("num").value)

  if (numero < 1 || numero > 100) {
    alert("Digite um número entre 1 e 100!")
  } else {
    if (valores.indexOf(numero) != -1) {
      alert("Número informado já existente na lista!")
    } else {
      valores.push(numero)
      let item = document.createElement("option")
      item.text = `Valor ${numero} adicionado.`
      select.appendChild(item)
      resul.innerHTML = ""
    }
  }
}

function finalizar() {
  if (select.length == 0) {
    alert("Lista vazia! Adicione um número.")
  } else {
    let somaresul = 0;

    function soma() {
      for (let pos in valores) {
        somaresul += valores[pos]
      }
      return somaresul
    }

    let totalsoma = soma(valores)
    let media = totalsoma / valores.length

    valores.sort()

    resul.innerHTML = `Ao todo temos ${valores.length} números cadastrados. <br>
      O maior valor informado foi ${valores[valores.length - 1]}. <br>
      O menor valor informado foi ${valores[0]}. <br>
      Somando todos os valores, temos ${totalsoma}. <br>
      A média dos valores digitados é ${media}.`
  }
}