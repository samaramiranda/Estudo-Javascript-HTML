import React from 'react';
import Identificacao from "./components/Identificacao"

class App extends React.Component {

  state = {
    nome: "Samara",
    sobrenome: "Miranda"
  }

  render(){
    return(
      <div>
        <h3>Componente principal</h3>
        <Identificacao nome={this.state.nome} sobrenome={this.state.sobrenome}></Identificacao>
      </div>
    )
  }
}

export default App;
