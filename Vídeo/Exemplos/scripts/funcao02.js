// function soma(n1, n2) {
//   return n1 + n2
// }

// console.log(soma(2, 5))

//OU
// let resul = soma(2, 5)
// console.log(resul)

//caso não passe o n1 ou n2 ele será definido como 0
function soma(n1 = 0, n2 = 0) {
  return n1 + n2
}

console.log(soma(7)) //passando apenas um parametro
