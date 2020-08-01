//MÓDULOS

function sum(x, y) {
  return x + y
}

function mult(x, y) {
  return x * y
}

//importando a função externa a função interna também funciona
//no caso importando apenas "percent" é possível realizar o calculo
function percent(value, total){
  return mult(value, 100)/total + "%"
}

export {sum, percent}
