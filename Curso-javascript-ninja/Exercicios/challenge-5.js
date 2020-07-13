/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let vetor = ["azul", "verde", "vermelho", "rosa", "amarelo"]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function FunArr(arg){
  return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(FunArr(vetor)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function Fun2Params(arg, n){
  return arg[n]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let vetor2 = [8, "roxo", true, [1, 2, "Samara"], {prop: "prop4"}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(Fun2Params(vetor2, 0))
console.log(Fun2Params(vetor2, 1))
console.log(Fun2Params(vetor2, 2))
console.log(Fun2Params(vetor2, 3))
console.log(Fun2Params(vetor2, 4).prop)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
  var livros = {
    "Clean Code": {
      quantidadePaginas: 230,
      autor: "Robert C. Martin ",
      editora: "Alta Books"
    },
    "O Hobbit": {
      quantidadePaginas: 315,
      autor: "J. R. R. Tokien",
      editora: "HarperCollins"
    },
    "Moreninha": {
      quantidadePaginas: 176,
      autor: "Casimiro de Abreu",
      editora: "Saraiva"
    }
  }
  //se o name não foi passado retorna todos os livros, senão retorna o livro do nome específico
  return !name ? livros : livros[name]
}

//Usando a função criada acima, imprima o objeto com todos os livros.
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let nomeLivro = "Moreninha"
console.log(`O livro ${nomeLivro} tem ${book(nomeLivro).quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
nomeLivro = "O Hobbit"
console.log(`O autor do livro ${nomeLivro} é ${book(nomeLivro).autor}!`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
nomeLivro = "Clean Code"
console.log(`O livro ${nomeLivro} foi publicado pela editora ${book(nomeLivro).editora}.`)