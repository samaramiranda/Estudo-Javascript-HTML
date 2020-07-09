//OBJETOS PERSONALIZADOS

//Maneira forma de criar objeto
let person1 = new Object()
person1.name = "Samara"
console.log(person1)

//Maneira literal de criar objeto
let person2 = {
  name: "Carlos",
}
console.log(person2)


//O que pode ser utilizado no objeto
let person3 = {
  name: "Carlos",
  age: 10,
  status: false,
  array: ["Profissional", "design"],
  work: function () { //método
    console.log("Work")
  },
  support: person1, //outro objeto
  useThis: function () {
    return this.age; //this dentro do objeto referencia a ele mesmo
  }
}
//this retorna a propriedade "age" dentro do objeto "person3" referenciado
console.log(person3.useThis())


//Primeira maneira de chamar propriedade do objeto
console.log(person3.age)
console.log(person3.support.name)

//Segunda maneira de chamar propriedade do objeto
console.log(person3["age"])