const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("form button")
const ulElement = document.querySelector("ul")

buttonElement.onclick = (event) => {
  event.preventDefault()

  if (inputElement.value){
    const textElement = document.createElement("span")
    textElement.innerHTML = inputElement.value

    const btnRemove = document.createElement("button")
    btnRemove.innerHTML = "Remover"

    const liElement = document.createElement("li")
    liElement.appendChild(textElement)
    liElement.appendChild(btnRemove)

    ulElement.appendChild(liElement)

    inputElement.value = ""

    btnRemove.onclick = (event) => {
      ulElement.removeChild(liElement)
    }
  }
}