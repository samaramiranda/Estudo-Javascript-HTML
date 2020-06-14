document.getElementById("calcular")
  .addEventListener("click", calculo)

  function calculo() {
    var valcarro = Number(document.getElementById("valcar").value)
    var multas = Number(document.getElementById("valmultas").value)

    var ipva = valcarro * 0.02
    var seguro = ipva * 0.2
    var total = ipva + multas + seguro

    var resul = document.getElementById("resultados")
    resul.classList.toggle("resultados")
    resul.innerHTML = `Valor IPVA: ${ipva.toLocaleString ("pt-Br", {style: "currency", currency: "BRL" })} 
      <br> Valor de multas: ${multas.toLocaleString ("pt-Br", {style: "currency", currency: "BRL" })} 
      <br> Valor do seguro: ${seguro.toLocaleString ("pt-Br", {style: "currency", currency: "BRL" })} 
      <br> <br> VALOR TOTAL: ${total.toLocaleString ("pt-Br", {style: "currency", currency: "BRL" })}`

  }