//RETORNO DE FUNÇÕES COM ARRAYS E OBJETOS

//Arrays
function myFunction1(){
  return [1, 2, 3, "teste"]
}

console.log(myFunction1())
console.log(myFunction1()[2])


//Objetos
function myFunction(){
  return {
    prop1: 1,
    prop2: "Sam",
    prop3: function(){
      return "prop3"
    }
  }
}
console.log(myFunction())
console.log(myFunction().prop2)

//Salvando em variável
var values = myFunction()
console.log(values)

console.log(values.prop2)
console.log(values.prop3())
