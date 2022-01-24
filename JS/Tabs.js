function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.active')
    let leftContent = document.querySelector(`.${event.target.classList[1]}`.toUpperCase())
    let leftContentAll = document.querySelectorAll('.calc')

    activeTabs.forEach((tab) => {
        tab.classList.remove('active')
    })
    leftContentAll.forEach((calc) => {
        calc.classList.remove('active-content')
    })
    

    event.target.classList.add('active')
    leftContent.classList.add('active-content')

    
    console.log(event.target.classList[1].toUpperCase())
}

const options = document.querySelector('.calc-options')
options.addEventListener('click', onTabClick, false)