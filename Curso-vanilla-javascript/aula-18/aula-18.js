//EVENTOS

(function (window, document) {
  "use strict";

  let btn = document.querySelector("#btn")
  let sel = document.querySelector("#select")

  function alertar(event) {
    console.log(event.target.id)
  }

  sel.addEventListener("change", alertar)
  btn.addEventListener("click", alertar)

})(window, document)