var resul = document.getElementById("dados")
var contidade = document.getElementById("contid")
var c=1;
var somaid=0;

function calcular() {
  c++
  if(c < 6){
    contidade.innerHTML = `Digite a idade ${c}:`
    var id = Number(document.getElementById("idade").value)
    somaid += id
  }else{
    id = Number(document.getElementById("idade").value)
    somaid += id
    resul.innerHTML = `A soma das idades é: ${somaid} <br>A média das idades é de: ${somaid/5}`
  }
}