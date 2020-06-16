function calcular() {
  var nomeconta = document.getElementById("nome").value
  var enderecoconta = document.getElementById("endereco").value
  var numeroconta = Number(document.getElementById("numero").value)
  var qtelig = Number(document.getElementById("ligacoes").value)
  var qteliginter = Number(document.getElementById("ligacoesinter").value)
  var desp = Number(document.getElementById("despertador").value)
  var msgfone = Number(document.getElementById("msgfonadas").value)
  var resul = document.getElementById("resultado")

  if (qtelig < 90) {
    var vallig = 15
  }else {
    var vallig = ((qtelig - 90) * 0.25)
  }

  var valligint = qteliginter * 0.65
  var valdesp = desp * 4
  var valmsgfone = msgfone * 3

  resul.innerHTML = `Nome do titular: ${nomeconta}
  <br>Endereço do titular: ${enderecoconta}
  <br>Número do titular: ${numeroconta}
  <br>Valor de ligações urbanas: ${vallig.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
  <br>Valor de ligações interurbanas: ${valligint.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
  <br>Valor de serviçoes de despertador: ${valdesp.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
  <br>Valor de mensagens fonadas: ${valmsgfone.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
  <br><br>VALOR TOTAL DA CONTA: ${(vallig + valligint + valdesp + valmsgfone).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`
}