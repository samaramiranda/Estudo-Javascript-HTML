import React, { useState } from "react"

const App = () => {
  const [nome, setNome] = useState("Samara")
  const [valor, setValor] = useState(1)
  const [soma, setSoma] = useState(0)

  const alterarNome = () => {
    setNome("Miranda")
  }

  const alterarValor = () => {
    const novoValor = valor * 2
    setValor(novoValor)
  }

  const somar = () => {
    const resulSoma = soma + 2
    setSoma(resulSoma)
  }

  return (
    <div>
      <p>
        O nome é: {nome}
      </p>
      <p>
        O dobro é: {valor}
      </p>
      <p>
        O resultado da soma é: {soma}
      </p>
      <button onClick={alterarNome}>Alterar</button>
      <button onClick={alterarValor}>Multiplicar</button>
      <button onClick={somar}>Somar + 2</button>
    </div>
  )
}

export default App
