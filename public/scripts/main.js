import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button => {
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick (e, check = true) {
    e.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"

    const roomId = document.querySelector("#room-id").dataset.id

    const questionId = e.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
    console.log(`${roomId} ${questionId} ${slug}`)

    modalTitle.innerHTML =  `${text} essa pergunta?`
    modalDescription.innerHTML = check ? `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?` : `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    modalButton.innerHTML = `${text}`
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}

