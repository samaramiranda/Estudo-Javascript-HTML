//HERANÇA PROTOTÍPICA
//Protype deve ser sempre utilizado em propriedade ou método que não modifica

function Person(name, func){
  this.name = name
  this.func = func
}

//criando um prototype para o construtor por meio de herança
//Prototype tem acesso as propriedades de dentro do construtor, no caso a "func"
Person.prototype.salario = function(){
  if(this.func === "manager"){
    return 3000
  }else if (this.func === "user"){
    return 100
  }
}

Person.prototype.friends = ["Julie", "Carlos"]

let obj1 = new Person("Samara", "manager")
let obj2 = new Person("Samuel", "user")


//adicionando um novo amigo ao array de amigos do "obj1"
//mesmo alterando apenas ao "obj1" o "obj2" também herda a alteração
obj1.friends.push("Luiz")

//tanto obj1 quanto o obj2 herdam o "salario" do prototype do person
console.log(obj1)
console.log(obj2)

//Retornando propriedades de dentro do construtor
console.log(obj1.salario())
console.log(obj2.salario())



