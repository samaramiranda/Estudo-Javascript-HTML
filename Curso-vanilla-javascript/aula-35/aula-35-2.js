//HERANÇA ATRAVÉS DO ESCOPO GLOBAL

(function(win, document){
  "use strict";

  //Utilizando a função "app" que foi atribuída ao escopo global
  let func1 = new app(100, 1000)
  console.log(func1.result())

})(window, document)