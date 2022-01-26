let height = parseFloat(document.getElementById('bmiHeight').value);
let weight = parseFloat(document.getElementById('bmiWeight').value);
let output = document.getElementById('bmiResult');
let fields = document.querySelectorAll('.bmiField');
let bmi = weight / ((height / 100) ** 2);
let final = parseFloat(bmi.toFixed(2));


function updateValue(event) {
    event.textContext = event.target.value
    let height = parseFloat(document.getElementById('bmiHeight').value);
    let weight = parseFloat(document.getElementById('bmiWeight').value);
    let bmi = weight / ((height / 100) ** 2);
    let final = parseFloat(bmi.toFixed(2));

    if (isNaN(final)) {
        output.innerText = 'Enter values to see the result.'
    }
    else {
        output.innerText = `Your BMI is ${final}`
    }
}
fields.forEach((field) => {
    field.addEventListener('input', updateValue)
})