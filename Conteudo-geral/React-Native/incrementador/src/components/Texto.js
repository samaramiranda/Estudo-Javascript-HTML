import React from "react"
import { Text } from "react-native"

export default props => (
  <Text style={{
    fontSize: 50,
    ...(props.style || {}) //pega tudo que foi passado no style do componente e aplica na tag "text". Se não foi passado nada válido pega um obj vazio
  }}>
    {props.children} {/* Pega as propriedades passadas dentro do componente */}
  </Text>
)