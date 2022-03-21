let btn = document.getElementById('toggle');
let advanced = document.getElementById('advanced');
let container = document.getElementById('container');
let x = document.getElementById('normal');
let idk = document.querySelector('.calc')

const toggleCalc = () => {

    if (btn.checked) {
        advanced.style.display = "grid";
        container.style.width = "clamp(70%, 80%, 100%)";
        x.style.display = 'none';
        idk.style.display = 'none'
    }
    else {
        advanced.style.display = "none";
        container.style.width = "auto";
    }
    
};

function changingPlace() {
    advanced.style.display = "none";
    container.style.width = "auto";
    btn.parentElement.childNodes[3].style.display = "none";

    let url = '../images/halloween.png' ;
    body = document.getElementsByTagName('body')[0];
    body.style.background = `url(${url})`;
    body.style.backgroundSize = `cover`;
    body.style.backgroundRepeat = `no-repeat`;
    

    let array = [];

    for (let i = 0; i < 10; i++) {
        array.push(document.getElementById(`${i}`));
    }

    setInterval(function () {
        changeNum(array);
        for (let i = 0; i < 10; i++) {
            const element = array[i];
            document.getElementById(`${i}`).innerHTML = element;
            console.log(element);
        }
     
    }, 2000);

}

const changeNum = (array) => {

    let newNumlist = [];

    for (let i = 0; i < 10; i++){
        newNumlist[i] = parseInt(Math.random() * 10);
    }

    array.length = 0;
    for (let i = 0; i < 10; i++) {
        array.push(newNumlist[i]);
    }
    return array;
};