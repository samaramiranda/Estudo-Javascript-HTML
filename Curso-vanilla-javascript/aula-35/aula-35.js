//HERANÇA ATRAVÉS DO ESCOPO GLOBAL

(function (win, document) {
  "use strict";

  function app(adiant, salario){
    this.adiant = adiant,
    this.salario = salario
  }
  app.prototype.percent = function(){
    return (this.adiant*100)/this.salario
  }
  app.prototype.result = function(){
    return `O funcionário recebeu ${this.percent()}% relativo ao salário`
  }

  //atribuindo a função "app" ao escopo global para usar em outros scripts
  win.app = app

}(window, document))