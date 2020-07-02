let amigo = {
  nome: "José",
  sexo: "M",
  peso: 85.4,
  engordar(p=0){//se não passar nenhum parâmetro atribui 0
    console.log("Engordou")
    this.peso += p //this referencia o próprio objeto dentro da função
  }
}

amigo.engordar(2)//chamando o objeto "amigo" e chamando a função dentro dele
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)