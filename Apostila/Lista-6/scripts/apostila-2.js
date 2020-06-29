var resul = document.getElementById("dados")
var contagem = document.getElementById("cont")
var c = 1
var maior = 0

function calcule(){
  if(c <= 4){
    c++
    contagem.innerHTML = `Digite o ${c}º número: `
    var num = Number(document.getElementById("numero").value)
    if (num > maior){
      maior = num
    }
  }else{
    num = Number(document.getElementById("numero").value)
    if (num > maior){
      maior = num
    }
    resul.innerHTML = `O maior numéro é o: ${maior}`
  }
}