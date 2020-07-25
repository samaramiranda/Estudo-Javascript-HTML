//PROPRIEDADES E MÉTODOS DE FUNÇÕES II

(function(){
  "use strict"

  //CALL COM PARÂMETROS
  //invoca a funçãO. 1º parâmetro é o "this" e os outros são parâmetros normais da função
  function myFunction2(a, b, c) {
    console.log(this.lastName, a, b, c)//retorna o "this" passado pelo "call"
  }
  var obj = {
    lastName: "Miranda"
  }
  myFunction2.call(obj, "Aa", "Bb", "Cc")//primeiro parâmetro é o "this"
  myFunction2.call({}, "1", "2", "3")//parar não passar o this o primeiro parâmetro deve ser "{}"


  //APPLY
  //funciona igual o "call", mas posso passar array nos argumentos onde cada item do array será um argumento
  var arr = [1, 2, 3]
  myFunction2.apply(obj, arr)
  myFunction2.apply(obj, [1, "b", {"objeto": "prop"}])
})()