import React, { useState } from "react"

const App = () => {
  const [nome, setNome] = useState("Samara")
  const [valor, setValor] = useState(1)

  const alterarNome = () => {
    setNome("Miranda")
  }

  const alterarValor = () => {
    const novoValor = valor * 2
    setValor(novoValor)
  }

  return (
    <div>
      <p>
        O nome é: {nome}
      </p>
      <p>
        O dobro é: {valor}
      </p>
      <button onClick={alterarNome}>Alterar</button>
      <button onClick={alterarValor}>Multiplicar</button>
    </div>
  )
}

export default App
