//MÉTODOS DE ARRAYS I

let arr1 = [1, 2, 3, 4, 5]
let arr2 = ["a", "b", "c"]


//Concatenação
let arrFinal = arr1.concat(arr2)
console.log(arrFinal)


//Every
//percorre o array verificando se os elementos são de um tipo, no caso do tipo number
let everyX = arrFinal.every(
  function verifyElements(elem, ind, obj) {
    return (typeof elem == "number")
  }
)
console.log(everyX) //retorna "false" porque tenho string no meio


//Filter
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


//ForEach
//Percorre todo o array e exibe os dados que solicitei, no caso o índice
let data = ""
let forEachX = arrFinal.forEach(
  function verifyElements(elem, ind, obj) {
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
let indexOfX = arrFinal.indexOf("c")
if(indexOfX == -1){
  console.log("Esse dado não existe")
}else{
  console.log(indexOfX)
}
