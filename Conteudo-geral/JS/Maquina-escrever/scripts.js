const txt = document.querySelector("#txt")
const btn = document.querySelector("#btn")
const resul = document.querySelector("#resul")

function typeWriter() {
  const txtArray = txt.value.split("")
  resul.innerHTML = ""
  txt.value = ""
  resul.style.display = "block"
  txtArray.forEach((letra, index) => {
    setTimeout(() => {
      resul.innerHTML += letra
    }, 75 * index);
  })
}

btn.addEventListener("click", typeWriter)
