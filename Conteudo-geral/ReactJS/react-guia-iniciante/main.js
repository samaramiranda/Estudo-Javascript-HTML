function MeuComponente1(props) {
  return (
    <div className="componente-1">
      <MeuComponente2>
        <MeuComponente3 onClickIncrementar={props.onClickIncrementar}></MeuComponente3>
      </MeuComponente2>
    </div>
  )
}

function MeuComponente2(props) {
  return (
    <div className="componente-2">
      <div>
        <header>{props.children}</header>
        <footer></footer>
      </div>
    </div>
  )
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState('62 9999999')

  setTimeout(function () {
    setTelefone('34 8888888')
  }, 2000)

  return (
    <div className="componente-3">
      <MeuComponente4 telefone={telefone} onClickIncrementar={props.onClickIncrementar}></MeuComponente4>
    </div>
  )
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(21)

  setTimeout(function () {
    setIdade(22)
  }, 1000)

  return (
    <div className="componente-4">
      <p>Componente 4 - {idade} - {props.telefone}</p>
      <button type="button" onClick={props.onClickIncrementar}>Incrementar</button>
    </div>
  )
}

function MeuComponente(props) {
  return (
    <div id="componentes">
      <MeuComponente1 onClickIncrementar={props.onClickIncrementar}></MeuComponente1>
    </div>
  )
}

function MeuComponenteIrmao(props) {
  return (
    <div id="componente-irmao">
      <MeuComponenteIrmao2 contador={props.contador}></MeuComponenteIrmao2>
    </div>
  )
}

function MeuComponenteIrmao2(props) {
  React.useEffect(function () {
    localStorage.setItem("contador", props.contador)
  })

  return (
    <h2>Contador: {props.contador} </h2>
  )
}

function AppComponente() {
  const [contador, incrementaContador] = React.useState(Number(localStorage.getItem("contador")) || 0)

  const clickIncrementa = function () {
    incrementaContador(contador + 1)
  }

  return (
    <>
      <MeuComponente onClickIncrementar={clickIncrementa}></MeuComponente>
      <MeuComponenteIrmao contador={contador}></MeuComponenteIrmao>
    </>
  )
}

ReactDOM.render(
  <AppComponente></AppComponente>,
  document.getElementById("app")
)