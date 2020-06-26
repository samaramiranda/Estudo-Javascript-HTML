function tabuada (){
  var numero = Number(document.getElementById("num").value)
  var resul = document.getElementById("resultado")
  var cont = 0;

  if (numero != ""){
    resul.innerHTML = `Tabuada de ${numero} <br>`
    while (cont <= 10){
      resul.innerHTML += `${numero} x ${cont} = ${numero * cont} <br>`
      cont++
    }
  }else{
    alert("Digite um número!")
    resul.innerHTML = "Digite um número acima"
  }
}