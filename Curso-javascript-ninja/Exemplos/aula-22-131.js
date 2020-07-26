//ARRAY-LIKE
//Ex de array-lie: arguments, node list

(function () {
  "use strict"

  //Percorrendo os itens de um ARRAY-LIKE de arguments
  function myFunction() {
    //passando o "arguments" como "this" do call
    Array.prototype.forEach.call(arguments, function (item, index) {
      console.log(item)
    })
  }
  myFunction(1, 2, 3, 4)

  //Outra forma de percorrer
  function myFunction2() {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i])
    }
  }
  myFunction2(1, 2, 3, 4, 5)


  //reduce em ARRAY-LIKE de arguments
  function myFunction3() {
    //passando o "arguments" como "this" do call e a função de reduce
    var result = Array.prototype.reduce.call(arguments, function (acumulado, atual, index) {
      return (acumulado + atual)
    })
    console.log(result)
  }
  myFunction3(1, 2, 3, 4)
})()