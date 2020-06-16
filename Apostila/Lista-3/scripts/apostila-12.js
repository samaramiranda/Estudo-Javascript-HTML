function ordenar() {
  var n1 = Number(document.getElementById("val1").value)
  var n2 = Number(document.getElementById("val2").value)
  var n3 = Number(document.getElementById("val3").value)
  var resul = document.getElementById("resultado")
  var maior = 0
  var meio = 0;
  var menor = 0

  if (n1 > n2 && n1 > n3){
    maior = n1
    if(n2 > n3){
      meio = n2
      menor = n3
    }else{
      meio = n3
      menor = n2
    }
  }else if (n2 > n1 && n2 > n3){
    maior = n2
    if(n1 > n3){
      meio = n1
      menor = n3
    }else{
      meio = n3
      menor = n1
    }
  }else{
    maior = n3
    if (n1 > n1){
      meio = n1
      menor = n2
    }else {
      meio = n2
      menor = n1
    }
  }

  resul.innerHTML = `Números em ordem crescente: ${menor}, ${meio}, ${maior}`
}