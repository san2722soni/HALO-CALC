let calctype = document.getElementById('calc-type');
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
    
    activeTabs.forEach((tab) => {
        tab.classList.remove('active');
    })
    leftContentAll.forEach((calc) => {
        calc.classList.remove('active-content');
    })

    event.target.classList.add('active');
    leftContent.classList.add('active-content');
    // calctype.innerText = `The calc you are using: ${capitalise(leftContent.children[0])}`;
    calctype.innerHTML = `This is: ${capitalise(leftContent.classList[1])}`;

    // event.target.replaceChild(event.target.querySelector('i'))
    // calctype.appendChild(event.target.querySelector('i'))

    calcTypeName.innerText = `${event.target.classList[1].toUpperCase()}`;
    calcTypeNum.innerText = parseInt(leftContent.classList[2]);
    // console.log(leftContent);
    // console.log(leftContent.children[0])
}

const options = document.querySelector('.calc-options');
options.addEventListener('click', onTabClick, false);


