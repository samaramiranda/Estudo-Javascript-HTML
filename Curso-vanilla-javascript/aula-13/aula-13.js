//MÉTODOS DE ARRAYS III

let arr1 = [1, 2, 3, 4, 5]
let arr2 = ["a", "b", "a"]

let arrFinal = arr1.concat(arr2)
console.log(arrFinal)

//Reduce
//Percorre todo o array fazendo operações entre o elemento atual e o próximo elemento
//ReduceRight funciona igual o reduce, apenas invertendo ordem
let reduceX = arrFinal.reduce(
  function verifyElements(v1, v2, ind, arr) {
    return v1 + v2 //soma o atual com o próximo
  }
)
console.log(reduceX)


//Shift
//Remove o primeiro elemento do array e exibe em tela
let shiftX = arrFinal.shift()
console.log(shiftX)


//Slice
//Corta o intervalo do array de acordo com o índice que passar em parâmetro e exibe na tela
let sliceX = arrFinal.slice(3, 6)
console.log(sliceX)


//Sort
//Ordena o array
let sortX = arrFinal.sort()
console.log(sortX)


//Splice
//Insere ou remove valores no array no intervalo que eu definir ou na posição específica

//removendo
let spliceX = arrFinal.splice(3, 2)//a partir da posição 3 remove 2 valores do array
console.log(spliceX)
console.log(arrFinal)

//inserindo
let spliceY = arrFinal.splice(3, 2, "y", "w", 0)//insere os valores que defini após o intervalo
console.log(spliceY)
console.log(arrFinal)


//Unshift
//Insere valores no ínicio de array e retorna o tamanho do array
let unshiftX = arrFinal.unshift(-1, -2, -3)
console.log(unshiftX)
console.log(arrFinal)


//ToString
//Converte todos os valores do array para formato de string
let toStringX = arrFinal.toString()

