import React, { useState } from "react"

import "./App.css"
import Display from "./Display"

export default props => {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  function handleNumero1(e) {
    setNumero1(Number(e.target.value))
  }

  function handleNumero2(e) {
    setNumero2(Number(e.target.value))
  }

  function soma() {
    setResultado(numero1 + numero2)
  }

  function sub() {
    setResultado(numero1 - numero2)
  }

  function mult() {
    setResultado(numero1 * numero2)
  }

  function div() {
    setResultado(numero1 / numero2)
  }

  return (
    <>
      <input type="number" onChange={handleNumero1} placeholder="Digite o primeiro numero" />
      <input type="number" onChange={handleNumero2} placeholder="Digite o segundo numero"></input>

      <button type="button" onClick={soma}>+</button>
      <button type="button" onClick={sub}>-</button>
      <button type="button" onClick={mult}>*</button>
      <button type="button" onClick={div}>/</button>

      <Display resul={resultado}></Display>
    </>
  )
}