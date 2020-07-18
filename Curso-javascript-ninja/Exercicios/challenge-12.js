/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function () {
  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  let person = {
    "name": "Samara",
    "lastname": "Miranda",
    "age": 21
  }


  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log("Propriedades de 'person':")
  console.log(Object.keys(person))

  //Crie um array vazio chamado `books`.
  let books = []

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push(
    {
      "name": "O hobbit",
      "pages": 211
    })
  books.push(
    {
      "name": "Clean Code",
      "pages": 387
    }
  )
  books.push(
    {
      "name": "Javascript",
      "pages": 432
    }
  )


  //Mostre no console todos os livros.
  console.log('\nLista de livros:');
  console.log(books)

  //Remova o último livro, e mostre-o no console.
  console.log('\nLivro que está sendo removido:');
  console.log(books.pop())

  //Mostre no console os livros restantes.
  console.log('\nAgora sobraram somente os livros:');
  console.log(books)

  //Converta os objetos que ficaram em `books` para strings.
  books = JSON.stringify(books)

  //Mostre os livros nesse formato no console:
  console.log('\nLivros em formato string:');
  console.log(books)

  //Converta os livros novamente para objeto.
  books = JSON.parse(books)
  console.log('\nAgora os livros são objetos novamente:');
  console.log(books)

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for (let i = 0; i <= Object.keys(books).length; i++) {
    for (var prop in books[i]) {
      console.log(`${prop}: ${books[i][prop]}`)
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  let myName = ["S", "a", "m", "a", "r", "a"]
  console.log('\nMeu nome é:');
  console.log(myName)

  //Juntando todos os itens do array, mostre no console seu nome.
  console.log('\nMeu nome é:');
  console.log(myName.join(""))

  //Ainda usando o objeto acima, mostre no console seu nome invertido.
  console.log('\nMeu nome invertido é:');
  console.log(myName.reverse())

  //Mostre todos os itens do array acima, odenados alfabéticamente.
  console.log('\nAgora em ordem alfabética:');
  console.log(myName.sort())

})()
