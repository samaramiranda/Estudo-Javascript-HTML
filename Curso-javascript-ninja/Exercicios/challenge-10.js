/*
Crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário),
e faça a indentação correta.
*/
(function () {
  /*
  Sem alterar os códigos nos `console.log` abaixo, faça com que o retorno
  deles seja "true", usando os Wrapper Objects como "conversores" nos valores
  das variáveis. Analise o que está sendo impresso no console para saber como
  resolver o problema corretamente.
  */
  var five = Number('5');
  console.log(five + ' é número?', typeof five === 'number');

  var concat = String(10) + String(10);
  console.log('"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string');

  /*
  Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
  funcional, mas dessa vez, separando algumas responsabilidades.
  - Primeiro, crie um objeto chamado `operation` que terá as propriedades:
  '+', '-', '*', '/' e '%'.
  - Cada propriedade vai receber uma função (logo, elas serão métodos), e essa
  função receberá dois parâmetros e retornará a operação referente à sua
  propriedade, usando os valores passados por parâmetro.
  */
  let operation = {
    "+": function (n1, n2) { return n1 + n2 },
    "-": function (n1, n2) { return n1 - n2 },
    "*": function (n1, n2) { return n1 * n2 },
    "/": function (n1, n2) { return n1 / n2 },
    "%": function (n1, n2) { return n1 % n2 }
  }

  /*
  Crie uma função chamada `isOperatorValid`, que receberá um operador por
  parâmetro.
  - Essa função será responsável por verificar se o operador passado por
  parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
  '%'.
  - Se for igual a qualquer um desses, ela deverá retornar "true".
  Caso contrário, "false".
  - O desafio é fazer o retorno sem usar "if" ou "switch".
  */
  function isOperatorValid(op){
    //retorna true se o operador passado para a operação existir dentro dela
    return operation[op] !== undefined 
  }

/*
Agora vamos criar a calculadora.
- Crie uma função chamada `calculator`, que receberá como parâmetro um
operador;
- Se o operador não for válido, a função deve retornar "false";
- Se o operador for válido, retornar uma segunda função que receberá dois
parâmetros;
- Se algum dos parâmetros não for um número, retornar "false";
- Senão, retornar o método do objeto "operation" criado acima, baseado no
operador passado para a função "calculator", e passando para esse método
os dois parâmetros da função de retorno de "calculator".
*/
function calculator(operador){
  if(isOperatorValid == false){
    return false
  }else{
    function (x, y){
      if( x !== number || y !== number){
        return false
      }else{
        
      }
    }
  }
}

})()