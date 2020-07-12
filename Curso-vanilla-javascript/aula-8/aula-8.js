//OBJETOS PERSONALIZADOS II

let person = {
  name: "Samara",
  age: 20,
  cc: 123
}

let operation = {
  sacar: function (saldo, valor) { //método
    return saldo -= valor
  },
  depositar: function (saldo, valor) {
    return saldo += valor
  }
}

let bank = {
  person: person,
  operation: operation,
  saldo: 50
}

let value = 40;

//Saque
console.log(`${bank.person.name} portador da conta ${bank.person.cc} realizou um saque no valor de ${value} ficando com ${bank.operation.sacar(bank.saldo, value)}`)

//Depósito
console.log(`${bank.person.name} portador da conta ${bank.person.cc} realizou um depósito no valor de ${value} ficando com ${bank.operation.depositar(bank.saldo, value)}`)
