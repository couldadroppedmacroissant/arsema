let hamburger = document.querySelector("#hamburger")
let close = document.querySelector(".close")
let nav = document.querySelector("nav")
function navShow(){
    nav.style.transform = 'translateX(0)'
}
function navHide(){
    nav.style.transform = 'translateX(-400px)'
}

hamburger.addEventListener("click", navShow)
close.addEventListener("click", navHide)

let accordionNav = document.querySelectorAll(".cardNav")
function accordion(elem) {
    document.querySelector(`#${elem}`).style.transform = 'translateX(0px)'
    document.querySelector(`#${elem}`).style.transform = `translateY(-${i * 100}%)`
}
function accordionHide(elem) {
    document.querySelector(`#${elem}`).style.transform = 'translateX(-1000px)'
}
function accordionActive(elem) {
    document.querySelector(`.${elem.classList[1]}Link`).style.color = 'rgb(0, 150, 150)'
    document.querySelector(`.${elem.classList[1]} hr`).style.background = 'rgb(0, 150, 150)'
}
function accordionInactive(elem) {
    document.querySelector(`.${elem.classList[1]}Link`).style.color = 'rgb(120, 120, 120)'
    document.querySelector(`.${elem.classList[1]} hr`).style.background = 'rgb(120, 120, 120)'
}
accordionNav.forEach(element => {
    element.addEventListener('click', () => {
        for (i = 0; i < accordionNav.length; i++){
            if (accordionNav[i] == element) {
                accordion(element.classList[1])
                accordionActive(element)
            } else {
                accordionHide(accordionNav[i].classList[1])
                accordionInactive(accordionNav[i])
            }
        }
    })
})

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.navLink')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top >= offset - 10 && top < offset + height - height/2) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                try {                    
                    document.querySelector(`.${id}Nav`).classList.add('active')
                } catch (TypeError) {                    
                }
            })
        }
    })
}
navLinks.forEach(element => {
    element.addEventListener('click', () => {
        for (i = 0; i < navLinks.length; i++){
            navLinks[i].classList.remove('active')
        }
        element.classList.add('active')
    })
});