
  function calcular() {
    var num1 = Number(document.getElementById("valor1").value)
    var num2 = Number(document.getElementById("valor2").value)
    var resul = document.getElementById("resultado")

    if (num1 > num2){
      resul.innerHTML = `O número ${num1} é maior que o ${num2}`
    }else{
      resul.innerHTML = `O número ${num2} é maior que o ${num1}`
    }
  }