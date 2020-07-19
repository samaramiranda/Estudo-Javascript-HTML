//MÉTODOS DE ARRAYS I

let arr1 = [1, 2, 3, 4, 5]
let arr2 = ["a", "b", "c"]


//Concatenação
let arrFinal = arr1.concat(arr2)
console.log(arrFinal)


//Every (verifica todos os itens do array)
//percorre o array fazendo a verificação da função para todos os itens e retornando "true" ou "false"
let everyX = arrFinal.every(
  function verifyElements(elem, ind, obj) {//passa apenas os parâmetros que vai utilizar
    return (typeof elem == "number")//verifica se todos os itens são do tipo "number"
    //return item < 5 //Se todos os itens do array foram menores que 5 retorna "true"
  }
)
console.log(everyX) //retorna "false" porque tenho string no meio


//Filter (retorna um novo array com os itens filtrados)
//Filtra os elementos de acordo com a condição que passei, no caso elementos > 3
let filterX = arrFinal.filter(
  function verifyElements(elem, ind, obj) {
    return (elem > 3)
  }
)
console.log(filterX)

//Filtra elementos do tipo string
let filterY = arrFinal.filter(
  function verifyElements(elem, ind, obj) {
    return (typeof elem == "string")
  }
)
console.log(filterY)

//Map + filter 
var arr = [1, 2, 3, 4, 5]
var map = arr.map(function (elem) {
  return elem + 10 //passa por todos os elementos do arr adicionando 10 em cada um
})
//filtra os elementos maiores que 13 do array retornado pelo map e retorn outro array
var filter = arr.filter(function (elem) {
  return item > 13
})
console.log(filter)

//OU encadeados
var arr = [1, 2, 3, 4, 5]
var map = arr.map(function (elem) {
  return elem + 10 //passa por todos os elementos do arr adicionando 10 em cada um
}).filter(function (elem) {
  return item > 13
})
console.log(map)


//ForEach
//Percorre todo o array e exibe os dados que solicitei, no caso o índice
let data = ""
let forEachX = arrFinal.forEach(//a função passa por cada item do array
  function verifyElements(elem, ind, obj) {//passa apenas os parâmetros que vai utilizar
    data += `Índice ${ind} : ${elem} \n`
  }
)
console.log(data)

//Percorrendo o array verificando o tipo de dado, se for string insere na variável "data2"
let data2 = ""
let forEachY = arrFinal.forEach(
  function verifyElements(elem, ind, obj) {
    if (typeof elem == "string") {
      data2 += `Índice ${ind} : ${elem} \n`
    }
  }
)
console.log(data2)

//Verificando se o índice é > 3, se for insere na variável "data3"
let data3 = ""
let forEachZ = arrFinal.forEach(
  function verifyElements(elem, ind, obj) {
    if (ind > 3) {
      data3 += `Índice ${ind} : ${elem} \n`
    }
  }
)
console.log(data3)


//IndexOf
//Busca um certo elemento e exibe a posição onde ele se encontra (retorna -1 se não existir)
let indexOfX = arrFinal.indexOf("c", 2)//segundo parâmetro define a partir de qual índice procurar
if (indexOfX == -1) {
  console.log("Esse dado não existe")
} else {
  console.log(indexOfX)
}
//arrFinal.indexOf("c", 2) > -1)//retorna true ou false se o valor existe ou não
