function verificar() {
  var nasc = Number(document.getElementById("anonasc").value)
  var txtresul = document.getElementById("txtresul")
  var imgresul = document.getElementById("imgresul")
  var data = new Date()
  var ano = data.getFullYear()

  if (nasc == 0 || nas > ano){
    alert("ERRO! Verifique os dados e tente novamente")
  }else {
    var idade = ano - nasc
    var sexo = document.getElementsByName("radsex")
    var genero = ""
    if(sexo[0].checked){
      genero = "Homem"
      if(idade >= 0 && idade <= 10 ){
        txtresul.innerHTML = `Detectamos criança de ${idade} anos`
        imgresul.src = "../verificador-idade/assets/manha.jpg"
      }else if(idade <= 21){
        txtresul.innerHTML = `Detectamos homem jovem de ${idade} anos`
      }else if(idade <= 50){
        txtresul.innerHTML = `Detectamos homem adulto de ${idade} anos`
      }else {
        txtresul.innerHTML = `Detectamos homem idoso de ${idade} anos`
      }
    }else if (sexo[1].checked){
      genero = "Mulher"
      if(idade >= 0 && idade <= 10 ){
        txtresul.innerHTML = `Detectamos criança de ${idade} anos`
      }else if(idade <= 21){
        txtresul.innerHTML = `Detectamos mulher jovem de ${idade} anos`
      }else if(idade <= 50){
        txtresul.innerHTML = `Detectamos mulher adulta de ${idade} anos`
      }else {
        txtresul.innerHTML = `Detectamos mulher idosa de ${idade} anos`
      }
    }


  }
}

