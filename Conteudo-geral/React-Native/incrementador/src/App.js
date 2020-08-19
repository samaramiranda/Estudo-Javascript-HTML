import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

import Contador from "./components/Contador"
// import Texto from "./components/Texto"

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      {/* Instanciando um valor inicial para o componente "Contador" */}
      <Contador numeroInicial={0}></Contador>
      <Contador numeroInicial={100}></Contador>
      {/* <Texto style={{ color: "#a00" }}>
        Estou no app
      </Texto> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app: {
    flexGrow: 1, //para ocupar toda a área da  safeArea
    justifyContent: "center",
    alignItems: "center"
  }
})