let main = document.querySelector('.splash')

setTimeout(() => {
    main.classList.add('idk')

    style = window.getComputedStyle(main)
    setTimeout(()=> {
        main.remove()
        // document.body.style.overflowY = 'scroll'
    }, parseFloat(style.getPropertyValue('transition-duration'))*1000)
}, 3000)