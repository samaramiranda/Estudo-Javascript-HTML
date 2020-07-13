//HOISTING
//Funções literais é possível acessar de qualquer parte do escopo

function hoisting() {
  let a = 2
  let b = 3

  inside() //mesmo que a função seja chamada antes da sua criação ela executa normalmente
  function inside() {
    console.log("Isso é um exemplo")
  }

  console.log(a * b)
}
hoisting()

//ERRO
function hoisting2() {
  let a = 2
  let b = 3
  //let func = undefined 
  //O js faz o içamento da variável para cima, mas o valor dela, no caso a funcão inside permanece no mesmo lugar

  func()//atribuindo função a variável o hoisting não funciona
  let func = function inside2() {
    console.log("Isso é um exemplo")
  }
}
hoisting2()