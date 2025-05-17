const navAnim = () => {
    const burger = document.querySelector('.right__side .burger1')
    const leftSide = document.querySelector('.left__side')
    
    burger.addEventListener("click",() => {
        leftSide.classList.toggle('active')

    })
}
navAnim()


const navAnim1 = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('nav')
    const navLi = document.querySelectorAll('nav ul li')
    
    burger.addEventListener("click",() => {
        nav.classList.toggle('nav-active')

        burger.classList.toggle('toggle')
    })
}
navAnim1()
