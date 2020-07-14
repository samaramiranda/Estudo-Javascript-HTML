//MÉTODOS DE ARRAYS II

let arr1 = [1, 2, 3, 4, 5]
let arr2 = ["a", "b", "a"]

let arrFinal = arr1.concat(arr2)
console.log(arrFinal)

//Last Index Of
//Funciona igual o indexOf percorrendo o array, mas pega a posição da ultima ocorrência do elemento no array
let lastIndexOfX = arrFinal.lastIndexOf("a")
console.log(lastIndexOfX)


//Join
//Transforma o array em uma string
let joinX = arrFinal.join(" - ") //o parametro é o separador entre os elementos
console.log(joinX)


//Map
//Percorre todos os dados do array modificando como quiser, nesse caso multiplica cada elemento por 2 
let mapX = arrFinal.map(
  function verifyElements(elem, ind, obj) {
    return elem * 2;
  }
)
console.log(mapX)


//PUSH
//Verifica se o tipo do elemento no array é "number" antes de multiplicar, se for adiciona no array usando PUSH
let mapFinal = []
let mapY = arrFinal.map(
  function verifyElements(elem, ind, obj) {
    if (typeof elem == "number") {
      mapFinal.push(elem * 2)//PUSH adiciona elemento no final do array
    } else {
      mapFinal.push(elem)//se não for número apenas adiciona no final do array sem multiplicar
    }
  }
)
console.log(mapFinal)


//POP
//retira o ultimo elemento do array
mapFinal.pop()
console.log(mapFinal)


//Some
//Percorre o array e verifica se a condição existe, retorna true ou false
let someX = arrFinal.some(
  function verifyElement(elem, ind, obj) {
    return (elem === 3)
  }
)
console.log(someX)


//Reverse
//Reverte a ordem do array, modifica o array original e cria um novo
let reverseX = arrFinal.reverse()
console.log(reverseX)