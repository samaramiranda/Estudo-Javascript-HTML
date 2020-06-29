let num = [5, 8, 2, 9, 3]
console.log(`Vetor: ${num}`)

//para saber o comprimento do vetor
console.log(`O vetor tem ${(num.length)} posições`)


//mostrar um valor espefíco do vetor
console.log(`O primeiro valor do vetor é: ${num[0]}`)


//acrescenta valor no vetor passando o índice
num[3] = 6
console.log(`Vetor após adicionar valor 6 na 3ª posição: ${num}`)


//acrescenta valor na ultima posição do vetor
num.push(7)
console.log(`Vetor após adicionar valor 7 na última posição: ${num}`)


//buscar valor dentro do vetor
let pos = num.indexOf(8)
if(pos == -1){//caso o valor não exista no vetor retorna -1
  console.log("O valor buscado não existe no vetor")
}else {
  console.log(`O valor 8 está na posição ${pos} do vetor`)
}


//ordena os valores do vetor em ordem crescente
num.sort()
console.log(`Vetor ordenado: ${num}`)
