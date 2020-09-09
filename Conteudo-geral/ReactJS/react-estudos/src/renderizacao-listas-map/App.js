import React from "react"

export default props => {
  const arr = ["arroz", "feijao", "batata"]
  const arrFinal = arr.map(item => <li key={item}>{item}</li>)

  const arrObj = [
    {
      nome: "Samara",
      idade: 22
    },
    {
      nome: "Samuel",
      idade: 24
    }, {
      nome: "Lorena",
      idade: 21
    }
  ]
  const arrObjFinal = arrObj.map(item => <p>{item.nome} tem {item.idade} anos!</p>)

  return (
    <>
      <h2>Array em lista com map</h2>
      {arrFinal}
      <h2>Array de objeto com map</h2>
      {arrObjFinal}
    </>
  )
}