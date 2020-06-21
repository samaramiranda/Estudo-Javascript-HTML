function calcular(){
  var name = document.getElementById("nome").value  
  var id =  Number(document.getElementById("idade").value)
  var resul = document.getElementById("resultado")

  if (id >= 5 && id <= 7){
    resul.innerHTML = `${name} classificado com Infantil A`
  }else if (id >= 8 && id <= 11){
    resul.innerHTML = `${name} classificado como Infantil B`
  }else if (id >= 12 && id <= 13){
    resul.innerHTML = `${name} classificado como Juvenil A`
  }else if (id >= 14 && id <= 17){
    resul.innerHTML = `${name} classificado como Juvenil B`
  }else{
    resul.innerHTML = `${name} classificado como Adulto`
  }
}