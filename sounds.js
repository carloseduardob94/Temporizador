import {buttonForest, 
  buttonRain, 
  buttonCoffee, 
  buttonFireCamp, 
  forestVolume,
  rainVolume,
  coffeeVolume,
  fireCampVolume} from "./elements.js"

export default function(){
  const forestAudio = new Audio('/sounds/Floresta.wav')
  const rainAudio = new Audio('/sounds/Chuva.wav')
  const coffeeAudio = new Audio('/sounds/Cafeteria.wav')
  const fireCampAudio = new Audio('/sounds/Lareira.wav')
  
  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireCampAudio.loop = true

  function resetVolume() {
    forestAudio.volume = 0.5
    forestVolume.value = 0.5

    rainAudio.volume = 0.5
    rainVolume.value = 0.5

    coffeeAudio.volume = 0.5
    coffeeVolume.value = 0.5

    fireCampAudio.volume = 0.5
    fireCampVolume.value = 0.5
  }

  function forestCard(){
    if(buttonForest.classList.contains('selected')){
      forestAudio.play()
      rainAudio.pause()
      coffeeAudio.pause()
      fireCampAudio.pause()
    } else {
      forestAudio.pause()
    }
    resetVolume()
  }

  function rainCard(){
    if(buttonRain.classList.contains('selected')){
      rainAudio.play()
      forestAudio.pause()
      coffeeAudio.pause()
      fireCampAudio.pause()
    } else {
      rainAudio.pause()
    }
    resetVolume()
    
  }

  function coffeeCard(){
    if(buttonCoffee.classList.contains('selected')){
      coffeeAudio.play()
      rainAudio.pause()
      forestAudio.pause()
      fireCampAudio.pause()
    } else {
      coffeeAudio.pause()
    }
    resetVolume()
    
  }

  function fireCampCard(){
    if(buttonFireCamp.classList.contains('selected')){
      fireCampAudio.play()
      rainAudio.pause()
      coffeeAudio.pause()
      forestAudio.pause()
    } else {
      fireCampAudio.pause()
    }
    resetVolume()
    
  }

  
  
  return {
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireCampAudio,
    forestCard,
    rainCard,
    coffeeCard,
    fireCampCard

  }

}
