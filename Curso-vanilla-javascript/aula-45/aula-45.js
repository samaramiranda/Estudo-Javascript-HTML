//CALL, APPLY E BIND

(function(window, document){
  "use strict"

  let result = document.querySelector(".result")

  //Usado para todos os livros, apenas troca o this usando o "call"
  function data(author, age){
    return `O livro é ${this.title} e tem ${this.pages}. O autor é ${author} e tem ${age} anos`
  }

  let book1 = {
    title: "E o vento levou",
    pages: 100
  }

  let book2 = {
    title: "A onda",
    pages: 50
  }


  //CALL (utiliza vírgula para passar os parâmetros da função)
  //define o "this" da função "data" utilizando o método "call(this)"
  result.innerHTML = data.call(book1)
  result.innerHTML = data.call(book1, "Thiago", 34)


  //APPLY (utiliza array para passar os parâmetros da função)
  //define o "this" da função "data" utilizando o método "apply(this, [arr])"
  result.innerHTML = data.call(book1)
  result.innerHTML = data.apply(book1, ["Thiago", 34])

  
  //BIND
  //primeiro deve-se armazenar a função para depois invocar
  let newFunction = data.bind(book1)
  result.innerHTML = newFunction("Daniel", 24)

})(window, document)