function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controlsDiv = document.getElementById('controls')
const createButton = controlsDiv.querySelector('[data-create]')
const destroyButton = controlsDiv.querySelector('[data-destroy]')
const boxesDiv = document.getElementById('boxes')
const input = controlsDiv.querySelector('input')

createButton.addEventListener('click', createBoxes)
destroyButton.addEventListener('click', destroyBoxes)

function createBoxes() {
  const amount = input.value
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100')
    return
  }

  const boxes = []
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10
    const box = document.createElement('div')
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.backgroundColor = getRandomHexColor()
    boxes.push(box)
  }

  boxesDiv.append(...boxes)
  input.value = ''
}

function destroyBoxes() {
  boxesDiv.innerHTML = ''
}