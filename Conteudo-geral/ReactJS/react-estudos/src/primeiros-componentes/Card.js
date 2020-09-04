import React from "react"
import "./Card.css"

export default props => (
  <div id="card">
    <h1>
      {props.titulo}
    </h1>
    <div>
      {props.children}
    </div>
  </div>
)