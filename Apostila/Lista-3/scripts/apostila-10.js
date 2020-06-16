function calcular() {
  var s1 = Number(document.getElementById("ladoA").value)
  var s2 = Number(document.getElementById("ladoB").value)
  var s3 = Number(document.getElementById("ladoC").value)
  var resul = document.getElementById("resultado")

  if (s1 > (s2 + s3)){
    resul.innerHTML = "Nenhum triângulo é formado"
  }else if (s1**2 == (s2**2 + s3**2)){
    resul.innerHTML = "Triângulo retângulo formado"
  }else if (s1**2 > (s2**2 + s3**2)){
    resul.innerHTML = "Triângulo obtusânculo formado"
  }else if (s1**2 < (s2**2 + s3**2)){
    resul.innerHTML = "Triângulo acutângulo formado"
  }
}