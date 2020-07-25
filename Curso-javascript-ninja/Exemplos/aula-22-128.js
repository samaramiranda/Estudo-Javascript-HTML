//PROPRIEDADES E MÉTODOS DE FUNÇÕES I

(function () {
  "use strict"

  //LENGTH
  //exibe a quantidade de parâmetros da função
  function myFunction(a, b, c) {
    return "Oi"
  }
  console.log(myFunction.length)


  //TOSTRING()
  //converte a função em string e apresenta ela inteira
  console.log(myFunction.toString())


  //CALL
  //invoca a função e pode passar "this" como parâmetro
  function myFunction2(a, b, c) {
    console.log(this.lastName)//retorna o "this" passado pelo "call"
  }
  var obj = {
    lastName: "Miranda"
  }
  myFunction2.call(obj)//está passando o "obj" como this da função
})()