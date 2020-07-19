//MÉTODOS DE ARRAYS III

let arr1 = [1, 2, 3, 4, 5]
let arr2 = ["a", "b", "a"]

let arrFinal = arr1.concat(arr2)
console.log(arrFinal)

//Reduce (não modifica o array original e nem retorna array)
//Percorre todo o array fazendo operações entre o valor acumulado e o valor atual
//ReduceRight funciona igual o reduce, mas da direita para esquerda (invertido)
let reduceX = arrFinal.reduce(
  function verifyElements(acumulado, atual, ind, arr) {
    return acumulado + atual //soma o atual com o próximo
  }, 0)//0 está sendo atríbuido ao valor acumulado (não é obrigatório)
console.log(reduceX)


//Shift
//Remove o primeiro elemento do array e exibe em tela
let shiftX = arrFinal.shift()
console.log(shiftX)


//Slice (Não modifica array original)
//Corta o intervalo do array de acordo com o índice que passar em parâmetro e exibe na tela
let sliceX = arrFinal.slice(3, 6) //corta do índice 3 ao 5
console.log(sliceX)
arrFinal.slice()//se não passar nenhum índice retorna o array inteiro
arrFinal.slice(-4)//índice negativo retorna os ultimos elementos do array (arr.lenght - 4)


//Sort
//Ordena o array
let sortX = arrFinal.sort()
console.log(sortX)


//Splice (Modifica array original)
//Insere ou remove valores no array no intervalo que eu definir ou na posição específica

//removendo
let spliceX = arrFinal.splice(3, 2)//a partir da posição 3 remove 2 valores do array
console.log(spliceX)
console.log(arrFinal)
arrFinal.splice(3)//passando só um índice remove todos a partir dele

//inserindo
let spliceY = arrFinal.splice(3, 2, "y", "w", 0)//remove 2 valores a partir do índice 3 e insere os valores que defini após o intervalo
console.log(spliceY)
console.log(arrFinal)
arrFinal.splice(1, 0, "a")//no índice 1 não remove nada e adiciona "a"


//Unshift
//Insere valores no ínicio de array e retorna o tamanho do array
let unshiftX = arrFinal.unshift(-1, -2, -3)
console.log(unshiftX)
console.log(arrFinal)


//ToString
//Converte todos os valores do array para formato de string
let toStringX = arrFinal.toString()

