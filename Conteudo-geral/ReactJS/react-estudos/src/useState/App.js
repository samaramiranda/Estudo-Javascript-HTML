import React, {useState} from "react"

export default props => {
  const [nome, setNome] = useState("Samara")

  function handleButton(){
    setNome("Joana")
  }

  return (
    <>
    <p>Nome: {nome}</p>
    <button onClick={handleButton}>click</button>
    </>
  )
}