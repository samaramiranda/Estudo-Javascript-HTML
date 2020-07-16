//THIS, USE STRIC E IIFE

//THIS
//fora da função ou dentro dela o "this" se refere ao escopo global (window)
console.log(this)

function teste()
{
  console.log(this)
}
teste()

//o "this" dentro do objeto se refere diretamente ao objeto
let obj = {
  name: "Samara",
  func: function(){
    // console.log(this)
    return this.name //posso retornar a propriedade do objeto assim
  }
}
// obj.func()
console.log(obj.func())


//USE STRICT
//força o navegador a ler no js mode e não ignora pequenos erros
"use strict";

//retorna erro porque o X não foi declado corretamete
x = 10 
console.log(x)

//erro em variável criada com nome de palavra reservada
let eval = 20
console.log(eval)

//o this dentro da função não se refere mais ao objeto global (window)
function teste()
{
  console.log(this)
}
teste()


//IIFE (immediately-invoked function expression (IIFE))
//invoca a função já no final dela, não é preciso invocar em outro lugar
(function(){
  console.log("Teste")
})()

//forma recomendada (passando window e document referenciando o escopo)
(function (win, doc) {
  "use stric";
  let x = 20
  console.log(x)
  console.log(win)//imprime o window
  console.log(doc)//imprime o documento
  console.log(this)//não referencia mais o escopo global
})(window, document)

//não tem mais acesso ao X fora da função. O IIFE preserva o escopo local
console.log(x)
