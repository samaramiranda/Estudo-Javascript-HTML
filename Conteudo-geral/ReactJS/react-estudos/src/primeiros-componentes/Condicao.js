import React from "react"

export default props => (
  <div id="condicao">

    <h3>O número é {props.valor}</h3>

    {props.valor === 1
      ? <p>É um</p>
      : <p>É outro</p>}
  </div>
)