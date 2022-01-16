// declaring variables
const display1El = document.querySelector('#history-value');
const display2El = document.querySelector('#output-value');
const tempResultEl = document.querySelector('#temp-value');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operator');
const equallEl = document.querySelector('.equall');
const clearEl = document.querySelector('#clear');
const clearlastEl = document.querySelector('.backspace');


let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;



//displaying output and checking if the '.' appears more than one time .
numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        }
        else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText = ' = ' + dis2Num;
    });
});


// storing operation value
operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis2Num && dis1Num && lastOperation) {
            mathOperation();
        }
        else {
            result = parseFloat(dis2Num);// To get number in float form to prevent + , or any operation sign to come as output
        }
        clearVar(operationName);
        lastOperation = operationName;

    });
});


// Making clearvar function to push current number after operation to display 1 i.e (to history) and clear the display 2 i.e (main output section) .
function clearVar(name = '') {
    dis1Num = dis1Num + dis2Num + ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    tempResultEl.innerText = result;
}


//Evaluating the value of history to temp result
function mathOperation() {
    if (lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    }
    else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    }
    else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    }
    else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}


// adding event for equall button 
equallEl.addEventListener('click', (e) => {
    if (!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

// Adding event for clear-all button
clearEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultEl.innerText = '0';
});


// Adding event for clear-last button to clear last entity enterd in output
clearlastEl.addEventListener('click', (e) => {
    display2El.innerText = '';
    dis2Num = '';
});


// making function to operate calculator using keyboard
window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickButtonEl(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
        clickOperation(e.key);
    } else if (e.key === "*") {
        clickOperation("x");
    } else if (e.key == "Enter" || e.key === "=") {
        clickEqual();
    } else if (e.key == "backspace") {
        clickBackspace();
    }
});

function clickButtonEl(key) {
    numbersEl.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
}

function clickOperation(key) {
    operationEl.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click();
        }
    });
}

function clickEqual() {
    equallEl.click();
}

function clickBackspace() {
    clearlastEl.click();
}


let selected = document.querySelectorAll('.select');
let check = document.querySelectorAll('.check');


// -------------------------------  NOW THE JS FOR AGE CALCULATOR 

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let appear = document.getElementById("appear");
let inpDate = document.getElementById("date_input");

function hide() {
    appear.style.display = "none";
    inpDate.value = '';
}

function ageCalculate() {

    if (inpDate.value == '') {
        alert("No input ! ");
    }
    else {
        appear.style.display = "flex";
    }

    let today = new Date();
    let inputDate = new Date(document.getElementById("date_input").value);
    let birthMonth, birthDate, birthYear;

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (
        birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("Not Born Yet");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    }
    else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    }
    else {
        birthMonth--;
        let days = months[currentDate - 2];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(Bdate, Bmonth, Byear) {
    document.getElementById("year").textContent = Byear;
    document.getElementById("years").textContent = Byear;
    document.getElementById("age-now-months").textContent = Bmonth + "months";
    document.getElementById("months").textContent = Bmonth;
    document.getElementById("age-now-days").textContent = Bdate + "days";
    document.getElementById("days").textContent = Bdate;
}

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }
    else {
        months[1] = 28;
    }

}

// Snakbar code here ---------------------------
function showSnackbar(value) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    //setting the text inside snackbar from the value enterd in 'value'
    x.innerText = value;

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

// Enter Value section of AREA calc -------------------------

let calc_type = document.getElementById('type_of_calculation');
let shape_title = document.getElementById('shape_title');
let real_answer = document.getElementById('real_answer');
let done = document.getElementById('done');
let formula = document.getElementById('formula');
let value = document.getElementById('value');
let show_sol = document.getElementById('show_sol');
let inp = document.getElementById('input_num');
let inp2 = document.getElementById('input_num_2');
let inp3 = document.getElementById('input_num_3');
let img_change = document.getElementById('img_change');
let here2 = document.getElementById('here2');


show_sol.style.display = 'none';

function settingValues(flag_num, arr) {

    inp.onclick = function hide_inp() {
        show_sol.style.display = 'none';
        formula.innerHTML = arr[0];
    }

    done.onclick = function sub() {
        // let val = inp.value;
        // let val2 = inp2.value;
        // let val3 = inp3.value;

        if (flag_num == 1) {
            inp2.value = 2;
            inp3.value = 3;
        }
        else if (flag_num == 2) {
            inp3.value = 3;
        }
        else {
            inp.value;
            inp2.value;
            inp3.value;
        }

        // if (checkinput(val, val2, val3)) {
        //     value.innerHTML = val + ' x ' + val2 ;
        //     formula.innerText = val * val2; // here same it goes 
        //     real_answer.innerText = val * val2; // here same
        //     show_sol.style.display = 'block';
        //     here2.innerHTML = formu;
        // }

        if (checkinput(inp.value, inp2.value, inp3.value)) {
            value.innerHTML = arr[1];
            formula.innerText = arr[2];
            real_answer.innerText = arr[2];
            show_sol.style.display = 'block';
            here2.innerHTML = arr[0];
        }
    }

    function checkinput(n, n2, n3) {
        console.log(n + 'not working');
        if (n == '' || n2 == '' || n3 == '' || isNaN(n) || isNaN(n2) || isNaN(n3)) {
            showSnackbar("Invalid input");
            console.log(n, n2, n3);
            let flag = false;
            return flag;
        }
        else {
            flag = true;
            return flag;
        }
    }

}

//changing the tabs accoring to the shape choosed

let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let shapes = document.getElementById('s');
let simg = document.getElementById('simg');
let Enter_values = document.getElementById('eN');
let main_menu = document.getElementById('main_menu');
let question = document.getElementById('question');


//returning to main menu function
main_menu.onclick = function main_menu() {
    showSnackbar("Main menu");
    shapes.style.display = 'grid';
    simg.style.display = 'none';
    Enter_values.style.display = 'none';
    question.style.display = 'inline-block';
}

function changeIncommon() {
    showSnackbar('Enter the value to get its area ');
    shapes.style.display = 'none';
    simg.style.display = 'block';
    Enter_values.style.display = 'grid';
    question.style.display = 'none';
}

s1.onclick = function s1() {
    changeIncommon();
    img_change.src = "images/Square-perimeter-removebg-preview.png";
    inp.placeholder = "Enter the Side";
    inp2.style.display = 'none';
    inp3.style.display = 'none';
    let values = ['a' + '<sup style="font-size: 17px;">2</sup>', inp.value + '<sup style="font-size: 17px;">2</sup>', inp.value * inp.value];
    let flag_num = 1;
    settingValues(flag_num, values);
}

s2.onclick = function s2() {
    changeIncommon();
    img_change.src = "images/rectangle_perimeter-removebg-preview.png";
    inp2.placeholder = "Enter the breadth";
    inp.placeholder = "Enter the length";
    shape_title.innerText = 'Rectangle';
    formula.innerText = 'L x B';
    inp2.style.display = 'inline';
    inp3.style.display = 'none';
    let values = ['L x B', inp.value + ' x ' + inp2.value, inp.value * inp2.value];
    // let values = ['L x B', 9 + ' x ' + 8, 9 * 5];
    let flag_num = 2;
    settingValues(flag_num, values);
}

s3.onclick = function s3() {
    changeIncommon();
    img_change.src = "";
    inp.placeholder = "Enter the base";
    inp2.placeholder = "Enter the height";
    shape_title.innerText = 'Triangle';
    formula.innerHTML =
        `<div style="position:absolute; display:inline-block;">
        <sup style="font-size: 20px; position:absolute; bottom: 10px;">1</sup>` +
    `   <span> - </span>`  +
        `<sub style="font-size: 20px; position: absolute; top: 10px ">2</sub>
        </div>`;
    inp2.style.display = 'inline';
    inp3.style.display = 'none';
    let values = [formula.innerHTML, formula.innerHTML + ' x ' + inp.value + ' x ' + inp2.value, 0.5 * inp.value * inp2.value];
    let flag_num = 2;
    settingValues(flag_num, values);
}


/*
    inp.onclick = function hide_inp() {
        show_sol.style.display = 'none';
        formula.innerHTML = 'a' + '<sup style="font-size: 17px;">2</sup>';
    }

    done.onclick = function sub() {
        let val = document.getElementById('input_num').value;
        let val2 = document.getElementById('input_num_2').value;
        let val3 = document.getElementById('input_num_3').value = 4;

        if (checkinput(val, val2, val3)) {
            value.innerHTML = val + '<sup style="font-size: 17px;">2</sup>';
            formula.innerText = val * val;
            real_answer.innerText = val * val;
            show_sol.style.display = 'block';
        }
    }

    function checkinput(n, n2, n3) {
        console.log(n + 'not working');
        if (n == '' || n2 == '' || n3 == '' || isNaN(n) || isNaN(n2) || isNaN(n3)) {
            showSnackbar("Invalid input");
            let flag = false;
            return flag;
        }
        else {
            flag = true;
            return flag;
        }
    }
*/