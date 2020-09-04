import React, { useState } from "react"
import ExibirNumero from "./ExibirNumero"

export default props => {
  const [numero, setNumero] = useState(0)

  function handleButton() {
    setNumero(numero + 1)
  }

  return (
    <>
      <button type="button" onClick={handleButton}>clica</button>
      {props.children}
      <ExibirNumero resultado={numero}></ExibirNumero>
    </>
  )
}


