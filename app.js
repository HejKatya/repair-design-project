// imgs 
const imgs = [
    {
        id: 1,
        url: './img/completed-first-img.jpg',
        alt: 'a picture of two black chair in front of floor-length windows with brown curtains and a glass journal table in a room with tan walls and warm-tone wood floors'
    },
    {
        id: 2,
        url: './img/completed-second-img.jpg',
        alt: 'a picture of a part of room with greyish walls and a TV on the wall, a wooden cabinet under the TV and a wooden table with three blue chairs and some decorations'
    },
    {
        id: 3,
        url: './img/completed-third-img.jpg',
        alt: 'a picture of a studio appartment with greenish grey color palette, kitchen cabinets, a large TV on a white furniture set with some plants, books and decorations'
    }
]

// select img
const img = document.querySelector('.projects__img')
const imgSmall = document.querySelector('.projects__small-screen-img')

// select buttons 
const nextBtn = document.querySelector('.slider__arrow-right')
const prevBtn = document.querySelector('.slider__arrow-left')
let links = document.querySelectorAll('.projects__link')
let dots = document.querySelectorAll('.slider__dot')
const nextBtnSmall = document.querySelector('.projects__small-screen__arrow-right')
const prevBtnSmall = document.querySelector('.projects__small-screen__arrow-left')

// turn node lists into arrays
links = Array.from(links)
dots = Array.from(dots)

// set the current item
let currentItem = 0

// the main show function
const showPicture = pic => {
    //for big screen
    const item = imgs[pic]
    img.src = item.url
    img.alt = item.alt

    dots.forEach(dot => {
        if (dots.indexOf(dot) == pic) {
            dot.classList.add('slider__dot_active')
        } else {
            dot.classList.remove('slider__dot_active')
        }
    })
    links.forEach(link => {
        if (links.indexOf(link) == pic) {
            link.classList.add('projects__link_active')
        } else {
            link.classList.remove('projects__link_active')
        }
    })

    // for small screen
    imgSmall.src = item.url
    imgSmall.alt = item.alt
}


window.addEventListener('DOMContentLoaded', () => {
    showPicture(currentItem)
})

nextBtn.addEventListener('click', () => {
    currentItem++
    if (currentItem > (imgs.length - 1)) {
        currentItem = 0
    }
    showPicture(currentItem)
})

prevBtn.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = imgs.length - 1
    }
    showPicture(currentItem)
})

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const num = dots.indexOf(dot)
        showPicture(num)
    })
})

links.forEach(link => {
    link.addEventListener('click', () => {
        const num = links.indexOf(link)
        showPicture(num)
    })
})

// btns logic for smaller screen

nextBtnSmall.addEventListener('click', () => {
    currentItem++
    if (currentItem > (imgs.length - 1)) {
        currentItem = 0
    }
    showPicture(currentItem)
})

prevBtnSmall.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = imgs.length - 1
    }
    showPicture(currentItem)
})