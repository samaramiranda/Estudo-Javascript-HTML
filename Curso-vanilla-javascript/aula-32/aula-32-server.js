//AJAX COM NODEJS II

//Exportando as dependências
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

let app=express();
app.use(cors());
let urlencodedParser=bodyParser.urlencoded({extended:false});


//criando a rota de POST
app.post('/',urlencodedParser,function(req,res){
    let obj={
        name: req.body.name,
        age: 26
    };
    res.json(obj);
});

//definindo a porta do servidor
let port=3000 || process.env.PORT;
app.listen(port);