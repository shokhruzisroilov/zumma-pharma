const navAnim = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('nav')
    const navLi = document.querySelectorAll('nav ul li')
    
    burger.addEventListener("click",() => {
        nav.classList.toggle('nav-active')

        burger.classList.toggle('toggle')
    })
}
navAnim()