function calcular() {
  let velocidademax = Number(document.getElementById("velmax").value)
  let velocidadeveic = Number(document.getElementById("velvei").value)
  let resul = document.getElementById("resultado")

  if(velocidademax == 0 || velocidadeveic == 0){
    alert("Digite uma velocidade!")
  }else{
    if(velocidadeveic <= velocidademax){
      resul.innerHTML = `Velocidade dentro do permitido!`
    }else if(velocidadeveic <= (velocidademax + 10)){
      resul.innerHTML = `Você ultrapassou ${velocidadeveic - velocidademax}Km da velocidade permitida. <br>MULTADO EM: R$50,00!`
    }else if(velocidadeveic <= (velocidademax + 30)){
      resul.innerHTML = `Você ultrapassou ${velocidadeveic - velocidademax}Km da velocidade permitida.<br>MULTADO EM: R$100,00!`
    }else{
      resul.innerHTML = `Você ultrapassou ${velocidadeveic - velocidademax}Km da velocidade permitida. <br>MULTADO EM: R$200,00!`
    }
  }
}