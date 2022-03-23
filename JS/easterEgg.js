let btn = document.getElementById('toggle');
let advanced = document.getElementById('advanced');
let container = document.getElementById('container'); // whole calc container
let x = document.getElementById('normal'); // normal numbers calculator
let idk = document.querySelector('.calc')
let skullIcon = document.querySelector('.fa-skull')

document.body.onload(console.log(btn.checked))
const toggleCalc = () => {


    advanced.style.display = "none";
    container.style.width = "auto";
    document.querySelector('.AGE').classList.remove('active-content');
    document.querySelector('.age').classList.remove('active');
    if (btn.checked) {
        advanced.style.display = "grid";
        container.style.width = "clamp(70%, 80%, 100%)";
        x.style.display = 'none';
        idk.style.display = 'none'

        document.querySelector('.AGE').classList.add('active-content');
        document.querySelector('.age').classList.add('active');

        skullIcon.style.display = 'none'
        document.querySelector('.nav').style.justifyContent = 'center'
    }

    else {
        normal.style.display = 'flex'
        idk.style.display = 'none'
    }


};

function changingPlace() {
    advanced.style.display = "none";
    container.style.width = "auto";
    btn.parentElement.childNodes[3].style.display = "none";

    let url = '../images/halloween-2837936.png';
    body = document.getElementsByTagName('body')[0]; // you can use document.body
    body.style.background = `url(${url})`;
    body.style.backgroundSize = `cover`;
    body.style.backgroundRepeat = `no-repeat`;


    let array = [];

    for (let i = 0; i < 10; i++) {
        array.push(document.getElementById(`${i}`));
    }

    setInterval(() => {
        changeNum(array);
        for (let i = 0; i < 10; i++) {
            const element = array[i];
            document.getElementById(`${i}`).innerHTML = element.id;
            console.log(element);
        }

    }, 2000);

}

const changeNum = (array) => {

    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};