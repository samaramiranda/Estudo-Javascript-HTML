const fs = require("fs")


//LENDO DADOS
const dados = fs.readFileSync("./database.json")
const objDados = JSON.parse(dados)

console.log(objDados)

// if(objDados[0].name == "karina"){
//   console.log(objDados[0])
// }


//ESCREVENDO DADOS
const id = Math.random().toString(32).substr(2, 9)
objDados.push({ "id": id, "nome": "João", "idade": 34 })
fs.writeFileSync("./database.json", JSON.stringify(objDados))

console.log("\n\n", objDados)


// EDITANDO DADOS
const selectDado = objDados.findIndex((item) => item.id == "fe7hn8efr")

const { id: cId, nome: cNome, idade: cIdade } = objDados[selectDado]

const newObject = {
  id: cId,
  name: "Maria",
  idade: 10
}

objDados[selectDado] = newObject
console.log(objDados)
fs.writeFileSync("./database.json", JSON.stringify(objDados))


//DELETANDO DADOS
const dadoDelete = objDados.findIndex((item) => item.id == "85mksh2bs")
objDados.splice(dadoDelete, 1)
fs.writeFileSync("./database.json", JSON.stringify(objDados))