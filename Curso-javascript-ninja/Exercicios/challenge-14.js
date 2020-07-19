/*
Envolva todo o código desse desafio em uma IIFE.
*/
(function () {
  /*
  Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
  elemento será um objeto no formato:
  { number: [NUMBER] }
  Os números devem ser de 1 a 10.
  Mostre esse array no console.
  */
  let numberObjects = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
  ]
  console.log('Number Objects Array:')
  console.log(numberObjects)

  /*
  Crie um array chamado `justNumbers`, que terá como elementos somente os
  números do array criado acima. Mostre esse novo array no console.
  */
  let justNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log('\nJust Numbers:')
  console.log(justNumbers)

  /*
  Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
  somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
  no console.
  */
  let justMod2Or3 = justNumbers.filter(function (elem) {
    return (elem % 2 === 0 || elem % 3 === 0)
  })
  console.log('\nJust module of division by 2 or 3:')
  console.log(justMod2Or3)

  /*
  Declare uma variável chamada operation que receba, do array criado acima,
  um valor reduzido pela seguinte operação:
  - Somar 1 ao último valor retornado;
  - Multiplicar o resultado pelo valor atual.
  O cálculo deve começar com zero.
  Mostre o resultado no console.
  */
  console.log('\nOperation:');


})()