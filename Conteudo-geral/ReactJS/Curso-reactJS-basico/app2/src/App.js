import React, { useState } from "react"

const App = () => {
  const [nome, setNome] = useState("Samara")

  const alterarNome = () => {
    setNome("Miranda")
  }

  return (
    <div>
      <p>
        O nome é: {nome}
      </p>
      <button onClick={alterarNome}>Alterar</button>
    </div>
  )
}

export default App
