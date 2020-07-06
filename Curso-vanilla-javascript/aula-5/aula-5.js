// //FUNÇÕES OU MÉTODOS

// //Primeira forma de declarar
// function NumberMult(x, y) {
//   let resul = x * y
//   return resul
// }
// console.log(NumberMult(10, 2))


// //Segunda forma de declarar
// let mult = function (x, y) {
//   let resul = x * y
//   return resul
// }
// console.log(mult(4, 3))


// //terceira forma de declarar (com objeto)
// let objectMult = {
//   func: function (x, y) {
//     let resul = x * y
//     return resul
//   }
// }
// console.log(objectMult.func(7, 2))

//FUNÇÕES ANINHADAS
function myName(val) {
  let name //variáveis na função externa podem ser acessar na função interna

  function setName() {//a função externa não acessa variáveis da função interna
    if (val == 1) {
      name = "Samara"
    } else if (val == 2) {
      name = "Maria"
    } else {
      name = "Nenhum dado"
    }
    return name
  }

  return setName()//Tenho que chamar a função interna dentro da externa
}

console.log(myName(1))
