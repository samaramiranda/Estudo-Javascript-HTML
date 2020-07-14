//PROGRAMAÇÃO FUNCIONAL

//Formas de retornar objeto por função
function person(){
  var info = {
    name: "Samara",
    lastName: "Miranda"
  }
  return info
}
console.log(person())

function person2(){
  return {
    name: "Carlos",
    lastName: "Eduardo"
  }
}
console.log(person2())
