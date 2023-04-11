// Data Model: 
    // currentPalette Object
    // an array for all the possible colors [ABCDEF0123456789]
    // we need 6 characters, loop

//  function that randomizes from the array
//  function that puts the color into the box

var color1 = document.querySelector('.color1')
var newPaletteButton = document.querySelector('.new-palette-button')

newPaletteButton.addEventListener('click', displayPalette)

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
        color2: '#FACB9C',
        color3: '#FFE59A',
        color4: '#B6D7A8',
        color5: '#A4C4CA',
        id: Date.now()
    }
    console.log(updatedPalette.color1)
    console.log(updatedPalette)
    return updatedPalette
}

function displayPalette() {
    var display = updateCurrentPalette()
    console.log(display.color1)
    color1.style.background = display.color1
    // innertext...
    // label...
}

function randomColor() {
    // console.log('hello')
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


