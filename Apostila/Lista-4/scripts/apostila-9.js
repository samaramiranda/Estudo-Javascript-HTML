function calcular(){
  var cel = Number(document.getElementById("celsius").value)
  var resul = document.getElementById("resultado")

  var fahre = (9 * cel + 160) /5

  resul.innerHTML = `${cel} °C equivalem a ${fahre} °F`
}