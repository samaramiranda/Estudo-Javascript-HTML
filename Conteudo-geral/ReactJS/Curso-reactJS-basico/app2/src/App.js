import React, { Component } from "react"
import Navegacao from "./components/Navegacao"
import Home from "./components/Home"
import Servicos from "./components/Servicos"
import Contatos from "./components/Contatos"

class App extends Component {
  render() {
    return (
      <div>
        <Navegacao></Navegacao>
        <Home></Home>
        <Servicos></Servicos>
        <Contatos></Contatos>
      </div>
    )
  }
}

export default App
