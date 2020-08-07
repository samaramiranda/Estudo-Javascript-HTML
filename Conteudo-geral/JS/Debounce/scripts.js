const filterUsers = async (name) => {
  return fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(res => res.json())
}

function debounceEvent(fn, wait = 1000, time) {

  //função executada sempre que clica numa tecla
  return function () {
    clearTimeout(time)

    time = setTimeout(() => {
      //função de "HandleKeyUp" é executada utilizando o "event" passado por argumento
      fn.apply(this, arguments) 
    }, wait)
  }
}

function handleKeyUp(event) {
    filterUsers(event.target.value)
    .then(users => console.log(users.map(user => user.name)))
  }

//debounceEvent é executa quando abre a página, então ela se recebe o seu próprio retorno e se torna a função interna
document.querySelector("input").addEventListener("keyup", debounceEvent(handleKeyUp))