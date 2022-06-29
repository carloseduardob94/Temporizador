const buttonForest = document.querySelector('#forest')
const buttonSun = document.querySelector('.btn-sun')
const buttonMoon = document.querySelector('.btn-moon')
const buttonRain = document.querySelector('#rain')
const buttonCoffee = document.querySelector('#coffee')
const buttonFireCamp = document.querySelector('#firecamp')

const buttonPlay = document.querySelector('#play')
const buttonStop = document.querySelector('#stop')
const buttonTimeUp = document.querySelector('#timer-up')
const buttonTimeDown = document.querySelector('#timer-down')
const minutesDisplay = document.querySelector('#minutes-display')
const secondsDisplay = document.querySelector('#seconds-display')
let timerTimeOut

const forestVolume = document.querySelector('#forest-slider')
const rainVolume = document.querySelector('#rain-slider')
const coffeeVolume = document.querySelector('#coffee-slider')
const fireCampVolume = document.querySelector('#firecamp-slider')

export {
  buttonForest,
  buttonSun,
  buttonMoon,
  buttonRain,
  buttonCoffee,
  buttonFireCamp,
  buttonPlay,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  forestVolume,
  rainVolume,
  coffeeVolume,
  fireCampVolume

}