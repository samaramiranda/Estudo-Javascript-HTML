function calcular() {
  var num1 = Number(document.getElementById("val1").value)
  var num2 = Number(document.getElementById("val2").value)
  var num3 = Number(document.getElementById("val3").value)
  var res = document.getElementById("resultado")

  if (num1 > num2){
    var maior = num1
    if (maior > num3){
      res.innerHTML = `O número ${maior} é o maior dos valores`
    }else {
      res.innerHTML = `O número ${num3} é o maior dos valores`
    }
  }else if (num2 > num3){
    res.innerHTML = `O número ${num2} é o maior dos valores`
  }else {
    res.innerHTML = `O número ${num3} é o maior dos valores`
  }
}