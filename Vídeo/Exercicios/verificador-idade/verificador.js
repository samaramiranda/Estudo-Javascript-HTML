function verificar() {
  var nasc = Number(document.getElementById("anonasc").value)
  var divresul = document.getElementById("resultado")
  var txtresul = document.getElementById("txtresul")
  var imgresul = document.getElementById("imgresul")
  var data = new Date()
  var ano = data.getFullYear()

  divresul.classList.toggle("resultado")

  if (nasc == 0 || nasc > ano) {
    alert("ERRO! Verifique os dados e tente novamente")
  } else {
    var idade = ano - nasc
    var genero = ""
    var sexo = document.getElementsByName("radsex")
    if (sexo[0].checked) {
      genero = "homem"
      if (idade >= 0 && idade <= 12) {
        imgresul.src = "../verificador-idade/assets/mascrianca.jpg"
      } else if (idade <= 21) {
        imgresul.src = "../verificador-idade/assets/homemjovem.jpg"
      } else if (idade <= 50) {
        imgresul.src = "../verificador-idade/assets/homemadulto.jpg"
      } else {
        imgresul.src = "../verificador-idade/assets/homemidoso.jpg"

      }
    } else if (sexo[1].checked) {
      genero = "mulher"
      if (idade >= 0 && idade <= 12) {
        imgresul.src = "../verificador-idade/assets/femcrianca.jpg"
      } else if (idade <= 21) {
        imgresul.src = "../verificador-idade/assets/mulherjovem.jpg"
      } else if (idade <= 50) {
        imgresul.src = "../verificador-idade/assets/mulheradulta.jpg"
      } else {
        imgresul.src = "../verificador-idade/assets/mulheridosa.jpg"
      }
    }
    txtresul.innerHTML = `Detectamos ${genero} com ${idade} anos`
    imgresul
  }
}

