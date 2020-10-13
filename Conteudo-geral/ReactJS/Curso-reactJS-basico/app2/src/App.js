import React from 'react';
import Child from "./components/Child"

class App extends React.Component {
  state = {
    nome: "Samara"
  }

  alterar = () => {
    this.setState({ nome: "Miranda" })
  }

  render() {
    return (
      <div>
        <h3>Parent</h3>
        <button onClick={this.alterar}>Alterar</button>
        <hr />
        <Child nome={this.state.nome}></Child>
      </div>
    )
  }
}

export default App;
