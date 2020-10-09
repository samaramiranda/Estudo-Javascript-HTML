import React, { Component } from 'react';

class Identificacao extends Component {
  render() {
    return (
      <div>
        <p>Nome: {this.props.nome}</p>
        <p>Sobrenome: {this.props.sobrenome}</p>
      </div>
    );
  }
}

export default Identificacao;