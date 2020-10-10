import React, { Component } from 'react';
import Idade from "./Idade"

class Identificacao extends Component {
  render() {
    return (
      <div>
        <p>Nome: {this.props.nome}</p>
        <p>Sobrenome: {this.props.sobrenome}</p>
        <Idade></Idade>
      </div>
    );
  }
}

export default Identificacao;