const buttons = document.querySelectorAll('.btn')
const numbers = document.querySelectorAll('.number')
const allclear = document.querySelector('.allclear')
const del = document.querySelector('.backspace')
const output = document.querySelector('.output')
const basic_operations = document.querySelectorAll('.basic')

function backspace() {
    output.innerHTML = output.innerHTML.slice(0, -1)
}

function ClearAll() {
    output.innerHTML = ''
}

del.addEventListener('click', backspace)
allclear.addEventListener('click', ClearAll)

numbers.forEach(number => {
    number.addEventListener('click', () => {
        output.innerText += number.innerText
    })
})

basic_operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if (operation.innerHTML === '+') {
            output.innerText += '+'
        }
    })
})