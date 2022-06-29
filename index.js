import Sound from "./sounds.js"
import Swap from "./swap.js"
import {
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
  fireCampVolume} from "./elements.js"
  
const swap = Swap()
const sound =  Sound()

//--------------- SELECT BUTTON LOGIC -------------------
buttonSun.addEventListener('click',function() {
  swap.swapSun()
})

buttonMoon.addEventListener('click',function() {
  swap.swapMoon()
})

buttonForest.addEventListener('click',function() {
  swap.swapForest()
  sound.forestCard()
})
buttonRain.addEventListener('click',function() {
  swap.swapRain()
  sound.rainCard()
})
buttonCoffee.addEventListener('click',function() {
  swap.swapCoffee()
  sound.coffeeCard()
})
buttonFireCamp.addEventListener('click',function() {
  swap.swapFireCamp()
  sound.fireCampCard()
})

//--------------- AUDIO SLIDER LOGIC -------------------
forestVolume.addEventListener('change',function() {
  sound.forestAudio.volume = this.value
})
rainVolume.addEventListener('change',function() {
  sound.rainAudio.volume = this.value
})
coffeeVolume.addEventListener('change',function() {
  sound.coffeeAudio.volume = this.value
})
fireCampVolume.addEventListener('change',function() {
  sound.fireCampAudio.volume = this.value
})

//--------------- TIMER LOGIC -------------------
function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateDisplay(minutes, 0)

    if(minutes == 0 && seconds == 0){
      return
    }

    if(seconds <= 0){
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds-1))

    countdown()
  }, 1000)
}

function minutesAdd(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) +5
  minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
}

function minutesSub(){
  minutesDisplay.textContent = String(minutesDisplay.textContent -5).padStart(2, '0')

  if(minutesDisplay.textContent <= 0){
    minutesDisplay.textContent = "00"
  }
}

buttonPlay.addEventListener('click',function() {
  countdown()
})

buttonStop.addEventListener('click',function() {
  clearTimeout(timerTimeOut)
})

buttonTimeUp.addEventListener('click',function() {
  minutesAdd()
})

buttonTimeDown.addEventListener('click',function() {
  minutesSub()
})




