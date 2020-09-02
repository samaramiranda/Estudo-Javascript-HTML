import "./App.css"
import React from "react"

import Primeiro from "./components/Primeiro"
import ComParametro from "./components/ComParametro"
import ComFilhos from "./components/ComFilhos"
import Card from "./components/layout/Card"
import Repeticao from "./components/Repeticao"
import Condicional from "./components/Condicional"
import CondicionalComIf from "./components/CondicionalComIf"


export default props => (
  <div className="App">
    <Card titulo="#01-Primeiro Componente">
      <Primeiro></Primeiro>
    </Card>
    <Card titulo="#02-Componente com Parametro">
      <ComParametro
        titulo="Esse é o titulo"
        subtitulo="Esse é o subtitulo"
      ></ComParametro>
    </Card>
    <Card titulo="#03-Componente com Filho">
      <ComFilhos>
        <ul>
          <li>Carlos</li>
          <li>Gabriel</li>
          <li>Ana</li>
          <li>Carol</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#04-Repeticao">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="#05-Condicional V1">
      <Condicional numero={9}></Condicional>
    </Card>
    <Card titulo="#06-Condicional V2">
      <Condicional numero={10}></Condicional>
    </Card>
  </div>
)

