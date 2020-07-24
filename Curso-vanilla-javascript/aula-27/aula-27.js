//FORMULÁRIOS III

(function (window, document) {
  "use strict";

  let gallery = document.querySelector(".gallery")
  let files = document.querySelector("#img")

  function imgPreview(event) {
    gallery.innerHTML = ""
    let files = event.target.files
    for (let i = 0; i < files.length; i++) {
      //validando se a imagem é maior que 300000 bytes
      if (files[i].size > 300000) {
        alert("Imagem muito grande")
      } else {
        //usando construtor javascript para pegar o caminho da imagem no pc
        let reader = new FileReader()

        reader.onload = function (event) {
          //pegando a url da imagem no pc
          let urlImg = event.target.result

          //criando um novo elemento img e setando o src com a url da imagem pegada
          let newImg = document.createElement("img")
          newImg.setAttribute("src", urlImg)
          newImg.style = "width: 100px; height: 100px; margin: 5px"
          gallery.appendChild(newImg)
        }

        //método do construtor para ler os arquivos como URL
        reader.readAsDataURL(files[i])
      }
    }
  }

  files.addEventListener("change", imgPreview)

})(window, document)