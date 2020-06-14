function calcular() {
  var coordenadaX = Number(document.getElementById("coorX").value)
  var coordenadaY = Number(document.getElementById("coorY").value)

  var resul = document.getElementById("resultado")

  if(coordenadaX > 0 && coordenadaY > 0) {
    resul.innerHTML = "As coordendas pertecem ao 1º Quadrante"
  }else if (coordenadaX < 0 && coordenadaY > 0) {
    resul.innerHTML = "As coordendas pertecem ao 2º Quadrante"
  }else if (coordenadaX < 0 && coordenadaY < 0) {
    resul.innerHTML = "As coordendas pertecem ao 3º Quadrante"
  }else {
    resul.innerHTML = "As coordendas pertecem ao 4º Quadrante"
  }
}