//PROGRAMAÇÃO FUNCIONAL III

//passando função por parâmetro
function showOtherFunction(func){
  return func()//tem que invocara função do parâmetro
}

//CRIANDO A FUNÇÃO DENTRO DA OUTRA
//criando e passando outra função por parâmetro para showOtherFunction
showOtherFunction(function(){
  return "Function JS Ninja"
})

console.log(showOtherFunction(function(){
  return "Function JS Ninja"
}))


//CRIANDO A FUNÇÃO ANTES PARA DEPOIS PASSAR POR PARÂMETRO A OUTRA
function returnedFunction(){
  return "Função retornada"
}

/*passa a função por parâmetro sem invocar, pois o return da
showOtherFunction já vai invocar ela */
console.log(showOtherFunction(returnedFunction))