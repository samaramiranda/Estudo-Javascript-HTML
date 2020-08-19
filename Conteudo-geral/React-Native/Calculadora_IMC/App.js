import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function handleSubmit(){
    const alt = altura / 100
    const imc = peso / (alt * alt)
    
    if(imc < 18.6){
      alert("Você está abaixo do peso! " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      alert("Peso ideal! " + imc.toFixed(2))
    }else if (imc >= 24.9 < 34.9){
      alert("Levemente acima do peso! " + imc.toFixed(2))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        value={peso}
        placeholder='Peso (Kg)'
        placeholderTextColor="white"
        onChangeText={(peso) => setPeso(peso)}
        keyboardType="numeric"
      ></TextInput>

      <TextInput
        style={styles.input}
        value={altura}
        placeholder='Altura (cm)'
        placeholderTextColor="white"
        onChangeText={(altura) => setAltura(altura)}
        keyboardType="numeric"
      ></TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 30
  },
  input: {
    backgroundColor: "#121212",
    color: "#FFF",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 23
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#41aef4",
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }

})