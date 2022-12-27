
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]')
const stopButton = document.querySelector('button[data-stop]')
let bgColor = '';

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
    bgColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startButton.setAttribute('disabled', 'disabled');
}

function onStopButtonClick() {
    clearInterval(bgColor);
    startButton.removeAttribute('disabled');
}
