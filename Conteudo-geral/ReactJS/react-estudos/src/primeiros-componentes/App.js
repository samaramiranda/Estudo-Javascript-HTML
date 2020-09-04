import React from "react"

import Card from "./Card"
import Condicao from "./Condicao"
import Botao from "./Botao"

export default props => (
  <div id="app">
    <Card titulo="Primeiro">
      <p>Conteudo do primeiro Card</p>
    </Card>
    <Card titulo="Condicao">
      <Condicao valor={3}></Condicao>
    </Card>
    <Card titulo="Botao">
      <Botao>
        <h2>O resultado é: </h2>
      </Botao>
    </Card>
  </div>
)