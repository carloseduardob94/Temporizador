import {buttonForest, buttonRain, buttonCoffee, buttonFireCamp, buttonSun, buttonMoon} from "./elements.js"

export default function(){

  function swapForest(){
    buttonForest.classList.toggle('selected')
    buttonRain.classList.remove('selected')
    buttonCoffee.classList.remove('selected')
    buttonFireCamp.classList.remove('selected')
  }
  function swapRain(){
    buttonRain.classList.toggle('selected')
    buttonForest.classList.remove('selected')
    buttonCoffee.classList.remove('selected')
    buttonFireCamp.classList.remove('selected')
  }
  function swapCoffee(){
    buttonCoffee.classList.toggle('selected')
    buttonRain.classList.remove('selected')
    buttonForest.classList.remove('selected')
    buttonFireCamp.classList.remove('selected')
  }
  function swapFireCamp(){
    buttonFireCamp.classList.toggle('selected')
    buttonRain.classList.remove('selected')
    buttonCoffee.classList.remove('selected')
    buttonForest.classList.remove('selected')
  }

  function swapSun(){
    document.body.classList.toggle('dark-theme')
    buttonMoon.classList.remove('hide')
    buttonSun.classList.add('hide')
  }
  function swapMoon(){
    document.body.classList.toggle('dark-theme')
    buttonMoon.classList.add('hide')
    buttonSun.classList.remove('hide')
  }

  return {
    swapForest,
    swapRain,
    swapCoffee,
    swapFireCamp,
    swapSun,
    swapMoon
  }

}