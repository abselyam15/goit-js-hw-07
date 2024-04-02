function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color')
const bg = document.querySelector('.color')

btn.addEventListener('click', function() {
  const body = document.querySelector('body')
  const randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor
  bg.textContent = randomColor
})