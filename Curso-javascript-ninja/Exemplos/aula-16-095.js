//OBJETO STRINGO II

(function () {

  //substring(start, [end]) 
  //corta um intervalo de string igual slice, mas também corta do final para o inicio
  console.log("samara".substring(2))
  console.log("samara".substring(2, 4))//(segundo parâmetro é até onde corta)
  console.log("samara".substring(5, 1))

  //toLowerCase()
  //coloca a string em letras minúsculas
  console.log("SAMARA".toLowerCase())

  //toUpperCase()
  //coloca a string em letras maiúsculas
  console.log("samara".toUpperCase())

  //charAt + toUpperCase + slice
  //apenas a primeira letra maiúscula
  var name = "samara"
  var newName = name.charAt(0).toUpperCase() + name.slice(1)
  console.log(newName)

})()