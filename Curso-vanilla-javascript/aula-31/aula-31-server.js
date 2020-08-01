//AJAX COM NODEJS

//Exportando as dependências
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

let app = express()
app.use(cors())
let urlencodedParser = bodyParser.urlencoded({extended:false})


//criando a rota
app.get("/", function(req, res){
  res.send("hello")
})

app.get("/about", function(req, res){
  res.send("About")
})


//definindo a porta do servidor
let port = 3000
app.listen(port)