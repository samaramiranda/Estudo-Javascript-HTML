function calculovalor() {
  const preco = Number(document.getElementById("preçolt").value) 
  const qtelt = Number(document.getElementById("qtelitros").value)

  const resultado = Number(preco * qtelt)

  document.getElementById("valfinal")
    .setAttribute("value", resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
}