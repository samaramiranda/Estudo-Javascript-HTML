function resulcalculo() {
  const nome = document.getElementById("nomefunc").value
  const salariobase = parseFloat(document.getElementById("salbase").value)
  const descont = parseFloat(document.getElementById("descontos").value)
  const acresc = parseFloat(document.getElementById("acrescimos").value)

  document.getElementById("resulnome")
    .setAttribute("value", nome)

  const salarioliq = parseFloat(salariobase - descont + acresc)


  document.getElementById("resulsalario")
    .setAttribute("value",   salarioliq.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    )
}