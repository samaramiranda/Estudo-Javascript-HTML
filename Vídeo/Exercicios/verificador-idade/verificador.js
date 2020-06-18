function verificar() {
  var nasc = Number(document.getElementById("anonasc").value)
  var divresul = document.getElementById("resultado")
  var txtresul = document.getElementById("txtresul")
  var imgresul = document.getElementById("imgresul")
  var data = new Date()
  var ano = data.getFullYear()

  divresul.classList.toggle("resultado")

  if (nasc == 0 || nasc > ano){
    alert("ERRO! Verifique os dados e tente novamente")
  }else {
    var idade = ano - nasc
    var sexo = document.getElementsByName("radsex")
    var genero = ""
    if(sexo[0].checked){
      genero = "Homem"
      if(idade >= 0 && idade <= 10 ){
        txtresul.innerHTML = `Detectamos criança de ${idade} anos`
        imgresul.src = "../verificador-idade/assets/mascrianca.jpg"
      }else if(idade <= 21){
        txtresul.innerHTML = `Detectamos homem jovem de ${idade} anos`
        imgresul.src = "../verificador-idade/assets/homemjovem.jpg"
      }else if(idade <= 50){
        txtresul.innerHTML = `Detectamos homem adulto de ${idade} anos`
        imgresul.src = "../verificador-idade/assets/homemadulto.jpg"
      }else {
        txtresul.innerHTML = `Detectamos homem idoso de ${idade} anos`
        imgresul.src = "../verificador-idade/assets/homemidoso.jpg"

      }
    }else if (sexo[1].checked){
      genero = "Mulher"
      if(idade >= 0 && idade <= 10 ){
        txtresul.innerHTML = `Detectamos criança de ${idade} anos`
        imgresul.src = "../verificador-idade/assets/femcrianca.jpg"
      }else if(idade <= 21){
        txtresul.innerHTML = `Detectamos mulher jovem de ${idade} anos`
        imgresul.src = "../verificador-idade/assets/mulherjovem.jpg"
      }else if(idade <= 50){
        txtresul.innerHTML = `Detectamos mulher adulta de ${idade} anos`
        imgresul.src = "../verificador-idade/assets/mulheradulta.jpg"
      }else {
        txtresul.innerHTML = `Detectamos mulher idosa de ${idade} anos`
        imgresul.src = "../verificador-idade/assets/mulheridosa.jpg"
      }
    }

  }
}

