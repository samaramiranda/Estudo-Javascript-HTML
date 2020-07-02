let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

//para exibir na tela todos os valores do vetor baseado no seu tamanho
// for(let pos = 0; pos < valores.length; pos++){
//   console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
// }


//for simplificado para ARRAY e OBJETOS
for (let pos in valores) {//para cada posição na variável "valores" faça:
  console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}