import React from 'react';
import Child from "./components/Child"

class App extends React.Component {
  state = {
    nome: "Ana"
  }

  alterar = (novoNome) => {
    this.setState({ nome: novoNome })
  }

  render() {
    return (
      <div>
        <h3>Parent</h3>
        <p>Nome: {this.state.nome}</p>
        <hr />
        <Child funcaoAlterar={this.alterar}></Child>
      </div>
    )
  }
}

export default App;
