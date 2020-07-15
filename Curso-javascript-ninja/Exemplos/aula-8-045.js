//PROGRAMAÇÃO FUNCIONAL II

function adder(x) {
  return function (y) {
    return x + y
  }
}
/*o retorno da funçaõ adder vai ser uma segunda função, então
 o add2 vai se tornar uma função. */
var add2 = adder(2)

/*chamo a nova função "add2" (que na verdade é a function (y))
e passo o 3 como parâmetro para soma de (x+y)
o x já está salvo, pois foi passado como parâmetro na adder(2)*/
console.log(add2(3))

/*Primeira vez que chamo adder(2) ela retorna uma outra função,
então quando passo o segundo parâmetro ele já vai pra outra função direto*/
console.log(adder(7)(2))