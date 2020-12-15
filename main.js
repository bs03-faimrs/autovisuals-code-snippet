import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";

import './assets/css/style.css'

loadEventListeners()

function loadEventListeners () {
    document.addEventListener('DOMContentLoaded', showLayout)
}

function showLayout () {
    const containerDiv = document.createElement('div')
    containerDiv.className = 'container'
    document.body.appendChild(containerDiv)
    const btnSection = document.createElement('section')
    btnSection.className = 'row'
    const btnOuterContainerDiv = document.createElement('div')
    btnOuterContainerDiv.className = 'mx-auto'
    const btnInnerContainerDiv = document.createElement('div')
    btnInnerContainerDiv.className = 'button__container'
    const btnIcon = document.createElement('i')
    btnIcon.className = 'fas fa-play fa-2x floatingButton'
    btnInnerContainerDiv.appendChild(btnIcon)
    btnOuterContainerDiv.appendChild(btnInnerContainerDiv)
    btnSection.appendChild(btnOuterContainerDiv)
    containerDiv.appendChild(btnSection)
    
    const videoSection = document.createElement('section')
    videoSection.className = 'row'
    const videoSectionContainerDiv = document.createElement('div')
    videoSectionContainerDiv.className = 'embed-responsive embed-responsive-16by9 video__container'
    videoSectionContainerDiv.style.display = 'none'
    const videoIframe = document.createElement('iframe')
    videoIframe.className = 'embed-responsive-item video__item slideVideoIn'
    videoIframe.setAttribute('title', 'sampleVideo')
    videoIframe.setAttribute('allowFullScreen', '')
    videoIframe.src = 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0'
    const verticalLineDiv = document.createElement('div')
    verticalLineDiv.className = 'verticalLine'
    const span = document.createElement('span')
    span.className = 'caret'
    const videoPlayIcon = document.createElement('i')
    videoPlayIcon.className ='fa fa-caret-left fa-5x'

    span.appendChild(videoPlayIcon)
    verticalLineDiv.appendChild(span)
    videoSectionContainerDiv.appendChild(verticalLineDiv)
    videoSectionContainerDiv.appendChild(videoIframe)
    videoSection.appendChild(videoSectionContainerDiv)
    containerDiv.appendChild(videoSection)

    btnIcon.addEventListener('click', showVideoContainer)
    span.addEventListener('click', showVideo)

    function showVideoContainer () {
        videoSectionContainerDiv.style.display = 'block'
        btnInnerContainerDiv.style.display = 'none'
    }

    function showVideo () {
        videoIframe.classList.forEach(function (item){
            if(item === 'slideVideoIn'){
                videoIframe.classList.replace(item, 'slideVideoOut')
                videoIframe.style.display = 'block'
            } else if(item === 'slideVideoOut'){
                videoIframe.classList.replace(item, 'slideVideoIn')
                videoIframe.style.display = 'none'
                btnInnerContainerDiv.style.display = 'block'
                videoSectionContainerDiv.style.display = 'none'
            }
        })
    }
}

