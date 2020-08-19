import React, { useState } from "react"
import { View, Button } from 'react-native'
import Texto from "./Texto"

export default props => {

  // o "num" é o numero inicial passado em "props" e "setNum" a função que irá alterar o número
  const [num, setNum] = useState(props.numeroInicial)

  function increment() {
    setNum(num + 1)
  }

  return (
    <View>
      {/*Acessando o valor inicial do"Contador" em "App" sendo passado pelo useState*/}
      <Texto style={{textAlign: "center"}}>{num}</Texto>
      <Button
        title="Incrementar"
        onPress={increment}
      ></Button>
    </View>
  )
}