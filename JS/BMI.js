let height = parseInt(document.getElementById('bmiHeight').value);
let weight = parseInt(document.getElementById('bmiWeight').value);
let output = document.getElementById('bmiResult');
let fields = document.querySelectorAll('.bmiField');
let bmi = weight / (height / 100 * height / 100);
let final = parseInt(bmi.toFixed(2));

fields.forEach(function (element) {
    element.addEventListener('input', function () {
        output.style.display = 'block';
        output.innerText = "Your BMI is : " + final;
    });
});
