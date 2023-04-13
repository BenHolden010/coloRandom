// Data Model: 
    // currentPalette Object
    // an array for all the possible colors [ABCDEF0123456789]
    // we need 6 characters, loop

//  function that randomizes from the array
//  function that puts the color into the box

var locks = document.querySelectorAll('.lock')
var unlocks = document.querySelectorAll('.unlock')

var u1 = document.querySelector('#u1')
var u2 = document.querySelector('#u2')
var u3 = document.querySelector('#u3')
var u4 = document.querySelector('#u4')
var u5 = document.querySelector('#u5')

var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var color3 = document.querySelector('.color3')
var color4 = document.querySelector('.color4')
var color5 = document.querySelector('.color5')

var hexCode1 = document.querySelector('.hex-code1')
var hexCode2 = document.querySelector('.hex-code2')
var hexCode3 = document.querySelector('.hex-code3')
var hexCode4 = document.querySelector('.hex-code4')
var hexCode5 = document.querySelector('.hex-code5')

var palette = document.querySelector('.palette')

var newPaletteButton = document.querySelector('.new-palette-button')
var lk1 = document.querySelector('#lk1')

// newPaletteButton.addEventListener('click', displayPalette)
newPaletteButton.addEventListener('click', updateCurrentPalette)
// window.addEventListener('load', displayPalette)
window.addEventListener('load', updateCurrentPalette)
palette.addEventListener('click', toggleLock)

var colorArray = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var currentPalette = {
    color1: '#EA9999',
    color2: '#FACB9C',
    color3: '#FFE59A',
    color4: '#B6D7A8',
    color5: '#A4C4CA',
    id: Date.now()
}

function updateCurrentPalette() {
    var updatedPalette = currentPalette

    if (!u1.classList.contains('hidden')){
        updatedPalette.color1 = `#${randomColor()}`
    }
    if (!u2.classList.contains('hidden')){
        updatedPalette.color2 = `#${randomColor()}`
    }
    if (!u3.classList.contains('hidden')){
        updatedPalette.color3 = `#${randomColor()}`
    }
    if (!u4.classList.contains('hidden')){
        updatedPalette.color4 = `#${randomColor()}`
    }
    if (!u5.classList.contains('hidden')){
        updatedPalette.color5 = `#${randomColor()}`
    }
    console.log(updatedPalette.color1)
    console.log(updatedPalette)
    // return updatedPalette
    currentPalette = updatedPalette
    displayPalette()
}

function displayPalette() {
    // var display = updateCurrentPalette()
    // console.log(u1.classList.contains('hidden'))
    // if (!u1.classList.contains('hidden')){
    // color1.style.background = display.color1
    color1.style.background = currentPalette.color1
    hexCode1.innerText = currentPalette.color1
    // } 
    // if (!u2.classList.contains('hidden')){
    // color2.style.background = display.color2
    color2.style.background = currentPalette.color2
    hexCode2.innerText = currentPalette.color2
    // } if (!u3.classList.contains('hidden')){
    // color3.style.background = display.color3
    color3.style.background = currentPalette.color3
    hexCode3.innerText = currentPalette.color3
    // } if (!u4.classList.contains('hidden')){
    // color4.style.background = display.color4
    color4.style.background = currentPalette.color4
    hexCode4.innerText = currentPalette.color4
    // } if (!u5.classList.contains('hidden')){
    // color5.style.background = display.color5
    color5.style.background = currentPalette.color5
    hexCode5.innerText = currentPalette.color5
    // }
    // currentPalette = display
    // return currentPalette
} 

function randomColor() {
    var randomColor = [null, null, null, null, null, null]
    for (var i = 0; i < randomColor.length; i++) {
        randomColor[i] = colorArray[getRandomIndex(colorArray)]
    }
    return randomColor.join('')
}

function displayColors() {

}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function toggleLock(event) {
    for (var i = 0; i < locks.length; i++) {    
    if(event.target.id === locks[i].id || event.target.id === unlocks[i].id) {
            locks[i].classList.toggle('hidden')
            unlocks[i].classList.toggle('hidden')
        }
    }
}