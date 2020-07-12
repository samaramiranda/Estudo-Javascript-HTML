// ARRAYS

//Maneiras de decalarar array indexado
//Formal
let myArr = new Array("Samara", "Desenvolvedora web", 10)
console.log(myArr)

//Literal
let myArr2 = ["Thais", "Professora", {escola: "central"}]
console.log(myArr2)

//Maneira de declarar array associativo (objeto)
let myArrAss = {
  name: "Samara",
  age: 21
}
console.log(myArrAss)

//Acessar os dados do array
console.log(myArr[1])

//Acessar objeto do array
console.log(myArr2[2].escola)

//Alterar dados do array
myArr2[0] = "outro"
console.log(myArr2)

//Adicionar dados
myArr2[3] = 1234
console.log(myArr2)

//Verificar o quantidade de índices do array
console.log(myArr2.length)

//Propriedades de array: length, constructor, prototype

