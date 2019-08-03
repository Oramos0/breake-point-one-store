function clickBtn(id) {
  let modal = document.getElementById(`modal-${id}`)
  modal.style = "display: block;"
}

function closeModal(id) {
  let modal = document.getElementById(`modal-${id}`)
  modal.style = "display: none;"
}

function closeModalSide(id) {
  let modal = document.getElementById(`${id}`)
  modal.style = "display: none;"
}