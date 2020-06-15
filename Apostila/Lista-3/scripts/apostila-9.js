function verifique() {
  var qidig = Number(document.getElementById("qi").value)
  var resul = document.getElementById("resultado")

  if (qidig >= 0 && qidig <= 30){
    resul.innerHTML = `Q.I de ${qidig} é ameba`
  }else if (qidig >= 31 && qidig <= 50){
    resul.innerHTML = `Q.I de ${qidig} é débil mental`
  }else if (qidig >= 51 && qidig <= 70){
    resul.innerHTML = `Q.I de ${qidig} é regular`
  }else if (qidig >=71 && qidig <= 100){
    resul.innerHTML = `Q.I de ${qidig} é normal`
  }else if (qidig >= 101 && qidig <= 150){
    resul.innerHTML = `Q.I de ${qidig} é gênio`
  }else {
    resul.innerHTML = `Q.I de ${qidig} é INVÁLIDO!`
  }
}