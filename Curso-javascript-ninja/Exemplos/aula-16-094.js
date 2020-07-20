//O OBJETO STRING

(function () {
  "use strict";

  //lenght
  //conta a quantidade de caracteres da string
  console.log("teste".length)
  var nome = "samara"
  console.log(nome.length)

  //charAt(index)
  //mostra a letra do index passado no parâmetro
  console.log("samara".charAt(2))
  console.log("teste"[3])

  //concat
  //concatena as strings, mas não modifica a original
  console.log("samara".concat("de", "lourdes"))

  //indexOf(string, [start]) (segundo parâmetro é partir de qual posição)
  //busca o elemento passado no parâmetro e se existir retorna a posição dele
  console.log(nome.indexOf("r"))
  console.log(nome.indexOf("ama"))

  //lastIndexOf(string, [star])
  //igual o indexOf, mas verifica de trás para frente
  console.log(nome.lastIndexOf("a"))

  //replace(string, newString)
  //substitui o primeiro caractere informado da string por outro
  console.log(nome.replace("m", "d"))

  //slice(start, [end]) (segundo parâmetro é até qual cortar)
  //corta o intervalo da string entre o índice inical e o final
  console.log(nome.slice(3))
  console.log(nome.slice(0, 3))

  //split([separator], [limit]) (não modifica a string original)
  //quebra a string no parâmetro passado e tranforma em array
  console.log(nome.split("m"))//remove o caractere passado do array

  //join
  //transfora em string novamente após o split
  var arrNome = nome.split("m")
  console.log(arrNome)
  console.log(arrNome.join("m"))

  //split + join (para substituir vários caracteres)
  console.log(nome.split("a").join("o"))
})()