let calctype = document.getElementById('calcTypeIcon');
let calcTypeNum = document.getElementById('calcTypeNum');
let calcTypeName = document.getElementById('calcTypeName');

function capitalise (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/* makes the age calculator as the default one. 
fixing the age calc dissappearing when clicked 2 times when the website has loaded. */

document.body.onload = () => {
    document.querySelector('.AGE').classList.add('active-content');
    document.querySelector('.age').classList.add('active');
}

// The main tab system
function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.active');
    let leftContent = document.querySelector(`.${event.target.classList[1]}`.toUpperCase());
    let leftContentAll = document.querySelectorAll('.calc');
    const elem = event.target.querySelector('i');
    const clone = elem.cloneNode(true);
    
    activeTabs.forEach((tab) => {
        tab.classList.remove('active');
    })
    leftContentAll.forEach((calc) => {
        calc.classList.remove('active-content');
    })

    // limits the duplication of the icons
    calctype.innerHTML = ''

    event.target.classList.add('active');
    leftContent.classList.add('active-content');
    calctype.appendChild(clone);
    calcTypeName.innerText = `${event.target.classList[1].toUpperCase()}`;
    calcTypeNum.innerText = parseInt(leftContent.classList[2]);
}

const options = document.querySelector('.calc-options');
options.addEventListener('click', onTabClick, false);