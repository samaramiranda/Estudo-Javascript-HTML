//PARÂMETRO DE FUNÇÕES COM ARRAYS E OBJETOS

//ARRAYS
var arr = [1, 2, 3]

//retornando um array pela função
function myFunction(arg){
  return arg
}
//passando um vetor como parâmetro da função
console.log(myFunction(arr))//por variável
console.log(myFunction(["samara", 21, 4]))//direto na função

//retornando uma posição específica do array pela função
function myFunction2(arg){
  return arg[1]//definindo a posição
}
console.log(myFunction2(arr))
console.log(myFunction2([5, 4, 3, 2]))


//OBJETOS
var obj = {
  prop: "samara",
  curso: "javascript ninja",
  ninja: true
}

//Retornando um objeto pela função
function myFunctionObj(arg){
  return arg
}
//Passando um objeto como parâmetro
console.log(myFunctionObj(obj))

//pegando uma propriedade específica do objeto
console.log(myFunctionObj(obj).prop)

//retornando um propriedade específica do objeto pela função
function myFunctionObj2(arg){
  return arg.curso
}
console.log(myFunctionObj2(obj))



