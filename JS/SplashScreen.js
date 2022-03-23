let main = document.querySelector('.splash')

setTimeout(() => {
    main.classList.add('idk')

    style = window.getComputedStyle(main)
    setTimeout(() => {
        document.body.style.overflow = 'auto'
        main.remove()
    }, parseFloat(style.getPropertyValue('transition-duration')) * 1000)
}, 3000)