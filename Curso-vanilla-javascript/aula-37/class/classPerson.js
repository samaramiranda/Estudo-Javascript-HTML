import ClassJob from './classJob.js'

export default class ClassPerson extends ClassJob{

  constructor(){
    super()//super se refere a classe pai, no caso a Job
  }

  setPerson(name, age){
    this.name = name
    this.age = age
  }


  //O "super" é para métodos e atributos da classe pai, no caso a "classJob"
  getData(){
    return `O ${this.name} possuí ${this.age} e trabalha na empresa ${super.getEmp()} como ${super.getFun()}`
  }

  //getEmp também existe na classe pai, mas é diferente deste aqui
  getEmp(){
    return "getEmp da classPerson"
  }

  //O "this" é para métodos e atributos da própria classe, no caso a "classPerson"
  getData2(){
    return `Retorno classPerson: ${this.getEmp()}`
  }

}