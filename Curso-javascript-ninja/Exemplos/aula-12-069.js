//OBJECT CREATE

var obj = {
  x: 1,
  y: 2
}

//O obj2 está herdando as propriedades do obj, mas não é uma referencia do obj
var obj2 = Object.create(obj)

//O "obj2" não possuí propriedade própria dele, mas herda as do "obj"
console.log(obj2)
console.log(obj2.x)
console.log(obj2.y)

/*O que alterar no "obj" o "obj2" irá herdar
mas o que alterar no "obj2" o "obj" não irá mudar*/
obj2.x = "alterado"
console.log(obj.x)//o "obj.x" permanece "1"
console.log(obj2.x)//o "obj.x" recebe "alterado"


//Cria um objeto vazio que herda as propriedades do "obj2" que foram herdadas do "obj"
var obj3 = Object.create(obj2)
//uma alteração feita no "obj2" na propriedade herdada do "obj" será herdada pelo "obj3"
console.log(obj3.x)


//for no objeto de herança também mostra as propriedades do objeto pai como se fossem do filho
for( var prop in obj2){
  console.log(prop)
}

//Para não acessar as propriedades herdadas
//verifica se a propriedade pertence a um objeto ou se é herdada de outro
console.log(obj.hasOwnProperty('x'))//"x" pertence a "obj"
console.log(obj3.hasOwnProperty('x'))//"x" é herdado pelo "obj3"

for(var prop in obj2){
  if(obj2.hasOwnProperty(prop)){//se a propriedade pertencer ao "obj2"
    console.log(prop)
  }
}