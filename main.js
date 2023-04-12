// Data Model: 
    // currentPalette Object
    // an array for all the possible colors [ABCDEF0123456789]
    // we need 6 characters, loop

//  function that randomizes from the array
//  function that puts the color into the box

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

var newPaletteButton = document.querySelector('.new-palette-button')

newPaletteButton.addEventListener('click', displayPalette)
window.addEventListener('load', displayPalette)

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
    color1.style.background = display.color1
    color2.style.background = display.color2
    color3.style.background = display.color3
    color4.style.background = display.color4
    color5.style.background = display.color5
    hexCode1.innerText = display.color1
    hexCode2.innerText = display.color2
    hexCode3.innerText = display.color3
    hexCode4.innerText = display.color4
    hexCode5.innerText = display.color5
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


