// Data Model: 
    // currentPalette Object
    // an array for all the possible colors [ABCDEF0123456789]
    // we need 6 characters, loop

//  function that randomizes from the array
//  function that puts the color into the box
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

newPaletteButton.addEventListener('click', displayPalette)
window.addEventListener('load', displayPalette)
palette.addEventListener('click', toggleLock)
// locks.addEventListener('click', toggleIcon)

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
    var updatedPalette = {
        color1: `#${randomColor()}`,
        color2: `#${randomColor()}`,
        color3: `#${randomColor()}`,
        color4: `#${randomColor()}`,
        color5: `#${randomColor()}`,
        id: Date.now()
    }
    console.log(updatedPalette.color1)
    console.log(updatedPalette)
    return updatedPalette
}

function displayPalette() {
    var display = updateCurrentPalette()
    // if the classlist.contains('hidden') then the color will randomize
    console.log(u1.classList.contains('hidden'))
    if (!u1.classList.contains('hidden')){
    color1.style.background = display.color1
    hexCode1.innerText = display.color1
    } if (!u2.classList.contains('hidden')){
    color2.style.background = display.color2
    hexCode2.innerText = display.color2
    } if (!u3.classList.contains('hidden')){
    color3.style.background = display.color3
    hexCode3.innerText = display.color3
    } if (!u4.classList.contains('hidden')){
    color4.style.background = display.color4
    hexCode4.innerText = display.color4
    } if (!u5.classList.contains('hidden')){
    color5.style.background = display.color5
    hexCode5.innerText = display.color5
    }
    currentPalette = display
    console.log(currentPalette)
    return currentPalette
} 

function randomColor() {
    var randomColor = [null, null, null, null, null, null]
    for (var i = 0; i < randomColor.length; i++) {
        randomColor[i] = colorArray[getRandomIndex(colorArray)]
        // console.log(randomColor[i])
        // console.log(randomColor)
    }
    return randomColor.join('')
}

function displayColors() {

}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function toggleLock(event) {
    if(event.target.id === u1.id || event.target.id === lk1.id) {
        lk1.classList.toggle('hidden')
        u1.classList.toggle('hidden')
        console.log(event.target.id)
        }
    
        if(event.target.id === u2.id || event.target.id === lk2.id) {
        lk2.classList.toggle('hidden')
        u2.classList.toggle('hidden')
        console.log('event.target.id')
        }
        if(event.target.id === u3.id || event.target.id === lk3.id) {
        lk3.classList.toggle('hidden')
        u3.classList.toggle('hidden')
        console.log('event.target.id')
        }
        if(event.target.id === u4.id || event.target.id === lk4.id) {
        lk4.classList.toggle('hidden')
        u4.classList.toggle('hidden')
        console.log('event.target.id')
        }
        if(event.target.id === u5.id || event.target.id === lk5.id) {
        lk5.classList.toggle('hidden')
        u5.classList.toggle('hidden')
        console.log('event.target.id')
        }
    
    }
