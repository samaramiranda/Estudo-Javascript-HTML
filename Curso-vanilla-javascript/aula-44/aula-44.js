//BUBBLING E CAPTURING

(function (window, document) {
  "use strict";

  let parent = document.querySelector(".parent")
  let child = document.querySelector(".child")
  let grandchild = document.querySelector(".grandchild")
  let form = document.querySelector("#form1")

  //BUBBLING (do mais baixo para o mais alto / dentro para fora)
  // 3º parâmetro false
  parent.addEventListener("click", function () {
    console.log("parent")
  }, false)

  child.addEventListener("click", function () {
    console.log("child")
  }, false)

  grandchild.addEventListener("click", function () {
    console.log("grandchild")
  }, false)

  // O this sempre será o elemento pai de todas
  parent.addEventListener("click", function(event){
    console.log("This", this)
    console.log("Event", event.target)
  }, false)

  //para que não ocorra o efeito bubbling no elementos
  grandchild.addEventListener("click", function (event) {
    event.stopPropagation() //devolve apenas o elemento que tô clicando e ignora os elementos pai
    console.log("grandchild")
  }, false)


  //CAPTURING (do mais alto para o mais baixo / fora para dentro)
  //3º parâmetro como true
  // parent.addEventListener("click", function () {
  //   console.log("parent")
  // }, true)

  // child.addEventListener("click", function () {
  //   console.log("child")
  // }, true)

  // grandchild.addEventListener("click", function () {
  //   console.log("grandchild")
  // }, true)


  //"blur", "focus" e alguns outros eventos só funcionam com o Capturing
  form.addEventListener("blur", function(){
    alert("OI")
  }, true)


})(window, document)