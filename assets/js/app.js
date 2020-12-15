const floatingButton = document.querySelector('.button__container')
const videoContainer = document.querySelector('.video__container ')
const videoItem = document.querySelector('.video__item')
const caret = document.querySelector('.caret')

loadEventListeners()

function loadEventListeners () {
    floatingButton.addEventListener('click', showVideoContainer)
    caret.addEventListener('click', showVideo)
}

function showVideoContainer () {
    videoContainer.style.display = 'block'
    floatingButton.style.display = 'none'
}

function showVideo () {
    videoItem.classList.forEach(function (item){
        if(item === 'slideVideoIn'){
            videoItem.classList.replace(item, 'slideVideoOut')
            videoItem.style.display = 'block'
        } else if(item === 'slideVideoOut'){
            videoItem.classList.replace(item, 'slideVideoIn')
            videoItem.style.display = 'none'
            floatingButton.style.display = 'block'
            videoContainer.style.display = 'none'
        }
    })
}