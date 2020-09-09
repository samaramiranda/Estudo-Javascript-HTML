import React from "react"

export default props => {
  return (
    <section style={{ backgroundColor: "gray", padding:"10px", margin:"10px", width:"500px"}}>
      <h1>{props.livro.nome}</h1>
      <h3>{props.livro.autor}</h3>
      <h4>{props.livro.pags}</h4>
    </section>
  )
}