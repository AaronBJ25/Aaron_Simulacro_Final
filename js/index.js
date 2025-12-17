// Constantes

const MENU_BTN = document.getElementById('menu__btn')
const MENU = document.getElementById('menu')
const CLOSE_BTN = document.getElementById('close__btn')
const TIME = 4000;
const CARD = document.getElementById('carroussel__card')
const CARD_HEADING = document.getElementById('carroussel__heading')
const CARD_IMAGE = document.getElementById('carroussel__image')
const CARD_DESC = document.getElementById('carroussel__description')

// Variables

let arrayTitle = ['Awakened Wonders', 'Rumble', 'Live Dates']
let arrayImages = ['media/awk_wonders.webp', 'media/rumble.webp', 'media/live_dates.webp']
let arrayDescriptions = ['Watch my exclusive LIVE weekly special, “Break Bread”', 'My Rumble channel for more content', 'Live dates on this post']

let titleIndex = 0;
let imageIndex = 0;
let descriptionIndex = 0;
let titleInterval;
let imageInterval;
let descriptionInterval;

// Funciones

MENU_BTN.addEventListener('click', () => {
    MENU.classList.add('show')
})

CLOSE_BTN.addEventListener('click', () => {
    MENU.classList.remove('show')
})

function swapTitle() {
    CARD_HEADING.style.opacity='0'
    setTimeout(() => {
        titleIndex++
        if (titleIndex >= arrayTitle.length) {
            titleIndex = 0
        }
        CARD_HEADING.innerText = arrayTitle[titleIndex]
        CARD_HEADING.style.opacity='1'
    }, 300)
}
function swapImage() {
    CARD_IMAGE.style.opacity='0'
    setTimeout(() => {
        imageIndex++
        if (imageIndex >= arrayImages.length) {
            imageIndex = 0
        }
        CARD_IMAGE.src = arrayImages[imageIndex]
        CARD_IMAGE.style.opacity='1'
    }, 300)
}
function swapDescription() {
    CARD_DESC.style.opacity='0'
    setTimeout(() => {
        descriptionIndex++
        if (descriptionIndex >= arrayDescriptions.length) {
            descriptionIndex = 0
        }
        CARD_DESC.innerText = arrayDescriptions[descriptionIndex]
        CARD_DESC.style.opacity='1'
    }, 300)
}

function startInterval() {
    titleInterval = setInterval(swapTitle, TIME)
    imageInterval = setInterval(swapImage, TIME)
    descriptionInterval = setInterval(swapDescription, TIME)
};

startInterval()