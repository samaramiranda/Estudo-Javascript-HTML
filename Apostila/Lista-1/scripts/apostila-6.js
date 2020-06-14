function calculevalfinal() {
  const valaluguelhr = Number(document.getElementById("aluguelhora").value)
  const horasjogadas = Number(document.getElementById("horasjog").value)
  const quantpessoas = Number(document.getElementById("qtepessoas").value)

  const valortotal = Number(valaluguelhr * horasjogadas)
  const valorindiv = Number(valortotal / quantpessoas)

  document.getElementById("valtotal")
    .setAttribute("value", valortotal.toFixed(2))

  document.getElementById("valindividual")
    .setAttribute("value", valorindiv.toFixed(2))
}