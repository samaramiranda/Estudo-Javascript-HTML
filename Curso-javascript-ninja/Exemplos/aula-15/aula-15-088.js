(function () {
  function myFunction() {
    return this//this dentro da função referencia o objeto window
  }
  console.log("My Function", myFunction())

  var myObject = {
    myProperty: 1,
    init: function init() {
      return this//this no objeto referencia diretamente o objeto
    }
  }
  console.log("My object", myObject.init())


  //CONSTRUTORES
  function MyConstructor() {
    this.prop1 = "prop1"
    this.prop2 = "prop2"
  }

  //Posso atribuir a função criando o construtor em uma variável e o this apontará para o "constructor"
  var constructor = new MyConstructor()
  console.log("New Object 1ª forma", constructor)//cria um novo objeto chamado "MyConstructor" e apresenta suas propriedades
  console.log("Propriedade do constructor:", constructor.prop1)//pegando a propriedade de dentro do constructor

  //outra forma
  //usando o "new" antes transforma a função "MyConstructor" em um construtor pode imprimir as props dele
  console.log("New Object 2ª forma", new MyConstructor())

})()