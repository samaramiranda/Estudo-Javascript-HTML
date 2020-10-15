import React, { Component } from 'react';

class Child extends Component {
  alterarNome = () => {
    this.props.funcaoAlterar()
  }

  render() {
    return (
      <div>
        <h3>Child</h3>
        <button onClick={this.alterarNome}>Alterar</button>
      </div>
    );
  }
}

export default Child;