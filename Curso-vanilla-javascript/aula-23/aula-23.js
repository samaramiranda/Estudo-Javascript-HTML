//EXPRESSÕES REGULARES I

(function(){

  let msg = "A História do Brasil é dividida\n, consensualmente e para fins didáticos, em três períodos principais: Período Colonial, Período Imperial e Período Republicano. Entretanto, tais divisões existem apenas para organizar esquematicamente os principais conteúdos sobre a formação do Brasil, tendo como ponto de partida o ano do descobrimento, isto é, 1500. Entretanto, é sabido que, no território em que se “formou o Brasil”, havia, antes, várias tribos nativas com aspectos culturais muito particulares. Mesmo antes da formação dessas tribos, houve também povos primitivos que deixaram os vestígios de sua cultura em vários lugares do território brasileiro (Veja Pré-história brasileira) há milhares de anos. A esse período da História do Brasil cujo tema central é o estudo dos povos nativos, isto é, dos povos indígenas, dá-se o nome de Período Pré-Cabralino. Essa nomenclatura faz referência a Pedro Álvares Cabral, cuja chegada em terras brasileiras é considerada o marco inaugural da História do Brasil. A partir de então, de 1500 em diante, sobretudo a partir da década de 1530, teve início a fase do Brasil Colônia."
  console.log(msg)

  let regex = /ss?/gim
  //[] pega qualquer caractere do colchete
  //() pega especificamente o conjunto de dentro do parênteses 
  //{} indica a quantidade de caracteres seguidos
  //P|e OU [Pe] significa "P ou e"
  //[A-Z] significa "de A a Z maiúsculo"
  //[A-Za-z] significa "de A a Z maiúsculo ou minúsculo"
  //[0-9] OU \d significa todos os números
  //(Período) significa exatamente a palavra "Período"
  //(15) significa apenas o número "15"
  //+ um ou mais caracteres do antecessor dele
  //(150+) todos os números com um ou mais 0
  //. significa qualquer caractere 
  //.+ significa uma sequencia de quaisquer caracteres
  //^ indica o inicio da string
  //$ indica o final da string
  //(^a).+(dividida$) deve começar com "a", ter um intervalo de caracteres e terminar com "dividida"
  //r{2} busca 2 "r" seguidos na string
  //? indica que pode ter ou não o caractere antecessor (0 ou 1)
  //ss? significa "ss" seguidos ou "s" sozinho


  //MATCH
  let result = msg.match(regex)
  console.log(result)
  
})()