import React from "react"
import Livros from "./Livros"

export default props => {
  const arrLivros = [
    {
      nome: "A culpa é das estrelas",
      autor: "Paulo",
      pags: 133
    },
    {
      nome: "Clean Code",
      autor: "João",
      pags: 430
    },
    {
      nome: "O Hobbit",
      autor: "Tolkien",
      pags: 563
    }
  ]

  const arrLivrosFinal = arrLivros.map(item => <Livros livro={item}></Livros>)

  return (
    arrLivrosFinal
  )
}