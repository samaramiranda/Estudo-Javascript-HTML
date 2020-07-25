//PROTOTYPE

(function(){
  "use strict";

  function Myfunction (name, lastName){
    this.fullName = `${name} ${lastName}`
  }

  var samara = new Myfunction("samara", "miranda")
  console.log(samara.fullName)


  //PROTOTYPE NO CONSTRUTOR
  function Myfunction2(name, lastName){
    this.name = name
    this. lastName = lastName
  }

  //criando um novo método dentro do construtor chamado "fullName"
  Myfunction2.prototype.fullName = function(){
    return `${this.name} ${this.lastName}`
  }

  var samuel = new Myfunction2("Samuel", "Oliveira")
  console.log(samuel.fullName())//devo invocar o novo método quando for chamar

  //posso adicionar propriedades ao construtor mesmo depois de instanciado 
  Myfunction2.prototype.age = 21
  console.log(samuel.age)

}())