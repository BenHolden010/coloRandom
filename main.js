// Query Selectors:

var locks = document.querySelectorAll('.lock')
var unlocks = document.querySelectorAll('.unlock')
var colors = document.querySelectorAll('.boxColor');
var hexCodes = document.querySelectorAll('.hex-code')
var palette = document.querySelector('.palette')
var userPalettesSection = document.querySelector('.user-palettes')
var newPaletteButton = document.querySelector('.new-palette-button')
var savePaletteButton = document.querySelector('.save-palette-button')

// Event Listeners:

window.addEventListener('load', updateCurrentPalette)
palette.addEventListener('click', toggleLock)
userPalettesSection.addEventListener('click', deleteMiniPalette)
newPaletteButton.addEventListener('click', updateCurrentPalette)
savePaletteButton.addEventListener('click', saveMiniPalette)


// Data Model:

var colorArray = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var currentPalette = {
    color1: '#EA9999',
    color2: '#FACB9C',
    color3: '#FFE59A',
    color4: '#B6D7A8',
    color5: '#A4C4CA',
    id: Date.now()
}
var userPalettes = []

// Functions:

function toggleLock(event) {
  for (var i = 0; i < locks.length; i++) {    
  if(event.target.id === locks[i].id || event.target.id === unlocks[i].id) {
          locks[i].classList.toggle('hidden')
          unlocks[i].classList.toggle('hidden')
        }
    }
}

function randomColor() {
    var randomColor = [null, null, null, null, null, null]
    for (var i = 0; i < randomColor.length; i++) {
        randomColor[i] = colorArray[getRandomIndex(colorArray)]
    }
    return randomColor.join('')
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function updateCurrentPalette() {
    var updatedPalette = currentPalette
    for (var i = 0; i < unlocks.length; i++) {
        if (!unlocks[i].classList.contains('hidden')) {
            updatedPalette[`color${i+1}`] = `#${randomColor()}`;
        }
    }
    updatedPalette.id = Date.now()
    currentPalette = updatedPalette
    displayPalette()
}

function displayPalette() {
    for (var i = 0; i < colors.length; i++) {
        colors[i].style.background = currentPalette[`color${i+1}`]
        hexCodes[i].innerText = currentPalette[`color${i+1}`]
    }
}

function saveMiniPalette(){
    userPalettes.push({ ...currentPalette })
    displayMiniPalette()
    updateCurrentPalette()
}

function displayMiniPalette(){
    userPalettesSection.innerHTML = ''
    if (userPalettes.length === 0){
        userPalettesSection.innerHTML = `<p>No saved palettes yet!</p>`
    } else {
        for(var i=0; i<userPalettes.length; i++) {
            userPalettesSection.innerHTML += 
            `
            <div class='mini-palette'>
                <section class="mini-color" style = "background-color: ${userPalettes[i].color1}";>
                </section>
                <section class="mini-color" style = "background-color: ${userPalettes[i].color2}">
                </section>
                <section class="mini-color" style = "background-color: ${userPalettes[i].color3}">
                </section>
                <section class="mini-color" style = "background-color: ${userPalettes[i].color4}">
                </section>
                <section class="mini-color" style = "background-color: ${userPalettes[i].color5}">
                </section>
                <img src="assets/delete.png" class="delete-icon" id=${userPalettes[i].id} alt="delete icon">
            </div>
            `
        }
    }
}

function deleteMiniPalette(event) {
    for(var i=0; i< userPalettes.length; i++) {
        if(event.target.id === `${userPalettes[i].id}`) {
            userPalettes.splice(i, 1)
        }
    }
    displayMiniPalette()
}