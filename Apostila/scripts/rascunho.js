
const aluno = {
  nome: "fabio",
  idade: 17,
  serie: "8 serie"
}

const notas = [40, 20, 20]
var situacao

if((notas[1] + notas[0] + notas[2]) / 3 > 50) {
  situacao = true
} else if ((notas[1] + notas[0] + notas[2]) / 3 < 50) {
  situacao = false
}

  function aprov(){
    document.write("aprovado")
  }

  function reprov(){
    document.write("reprovado")
  }


document.write(`O aluno ${aluno.nome}, de ${aluno.idade} que cursa a ${aluno.serie} foi `)


if (situacao == true) {
  aprov();
} else if (situacao == false){
  reprov();
}


// for (i=0; i<10; i++){
//   document.write(`<p>posicao: ${i}</p>`)
// }
