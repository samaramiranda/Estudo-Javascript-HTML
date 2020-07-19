//MÉTODOS DE OBJETO
var obj = {
  x: 1,
  y: 2
}
var obj2 = Object.create(obj)
obj2.x = 10
var obj3 = Object.create(obj2)

var objteste = {
  name: "teste"
}

//"objteste2" recebe a referencia de memória do objteste, então são iguais
var objteste2 = objteste
if(objteste === objteste2){
  console.log(`Objetos iguais`)
  console.log(objteste2)
}


//OBJECT.KEYS
//Retorna todas as propriedades do objeto
console.log(Object.keys(obj))

//para contar a quantidade de propriedades de um objeto
Object.keys(obj).length


//ISPROTOTYPEOF
//Verifica se o objeto é protótipo de outro (outro herdou props dele)
obj.isPrototypeOf(obj2) //"obj2" é herdado de "obj"? True
obj.isPrototypeOf(obj3)//"obj" é protótipo do "obj2" e "obj3"


//JSON.STRINGIFY(OBJ)
//transforma o objeto em uma string (formato JSON)
JSON.stringify(obj)
var objString = JSON.stringify(obj)
console.log(objString)


//JSON.PARSE(OBJ)
//transforma a string em um objeto novamente
JSON.parse(objString)
console.log(JSON.parse(objString))
