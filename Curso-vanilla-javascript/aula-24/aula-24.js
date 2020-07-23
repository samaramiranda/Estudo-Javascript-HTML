//EXPRESSÕES REGULARES II

(function () {

  let msg = "A História do Brasil é dividida\n, consensualmente e para fins didáticos, em três períodos principais: Período Colonial, Período Imperial e Período Republicano. Entretanto, tais divisões existem apenas para organizar esquematicamente os principais conteúdos sobre a formação do Brasil, tendo como ponto de partida o ano do descobrimento, isto é, 1500. Entretanto, é sabido que, no território em que se “formou o Brasil”, havia, antes, várias tribos nativas com aspectos culturais muito particulares. Mesmo antes da formação dessas tribos, houve também povos primitivos que deixaram os vestígios de sua cultura em vários lugares do território brasileiro (Veja Pré-história brasileira) há milhares de anos. A esse período da História do Brasil cujo tema central é o estudo dos povos nativos, isto é, dos povos indígenas, dá-se o nome de Período Pré-Cabralino. Essa nomenclatura faz referência a Pedro Álvares Cabral, cuja chegada em terras brasileiras é considerada o marco inaugural da História do Brasil. A partir de então, de 1500 em diante, sobretudo a partir da década de 1530, teve início a fase do Brasil Colônia."
  let email = "sam.ara@gmail.com"

  console.log(msg)
  console.log(email)

  let regexTexto = /\d/gim
  let regexEmail = /^[a-zA-z0-9.]+@[a-zA-z]+\.[a-z]+(\.[a-z]+)?$/g

  //\w significa todos os caracteres alfanuméricos e _
  //\W negação do alfanumérico 
  //\s significa todos os espaços e quebra de linha
  //\S negação do "\s" acima


  //MATCH (busca na string)
  let result = msg.match(regexTexto)
  console.log(result)

  //SPLIT (corta na string)
  let result = msg.split(regexTexto)
  console.log(result)

  //REPLACE (substitui na string)
  let result = msg.replace(regexTexto, "teste")
  console.log(result)

  let result = msg.replace(regexTexto, function (x) {//o "x" é o caractere que será pego na regex, por exemplo "\d"
    return "___" + x.toUpperCase() + "___"
  })
  console.log(result)

  //SEARCH (retorna o índice do caractere encontrado, assim como indexOf)
  let result = msg.search(regexTexto)
  console.log(result)

  //verifica se o email é valido
  let resulEmail = email.match(regexEmail)
  if (resulEmail !== null) {
    console.log("Email válido")
    console.log(resulEmail)
  } else {
    console.log("Email inválido")
  }

})()