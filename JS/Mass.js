let animation = document.getElementById('mass-animation');
animation.style.fontSize = `${40}px`;

setInterval(() => {
    setTimeout(() => {
        animation.innerHTML = `<i class="fa-solid fa-scale-unbalanced"></i>`;
    }, 1000);

    setTimeout(() => {
        animation.innerHTML = `<i class="fa-solid fa-scale-balanced"></i>`;
        animation.children[0].setAttribute('style', `color: #e3635b;`);
    }, 2000);

    setTimeout(() => {
        animation.innerHTML = `<i class="fa-solid fa-scale-unbalanced-flip"></i>`;
        animation.children[0].setAttribute('style', `color: grey;`);
    }, 3000);

}, 3200)

const inputPound = document.getElementById('inputPound'),
    inputOunce = document.getElementById('inputOunce'),
    inputStone = document.getElementById('inputStone'),
    inputKilogram = document.getElementById('inputKilogram'),
    inputGram = document.getElementById('inputGram');

function massConverter(id, val) {

    const checkEmptyVal = (elem) => {
        if (val === '') {
            elem.value = '';
        }
    }


    let inputTypes = [inputPound, inputKilogram, inputOunce, inputGram, inputStone];

    const POUND = [val * 2.2046, val * 16, val / 0.0022046, val * 0.071429];
    const KILOGRAM = [val / 2.2046, val * 35.274, val * 1000, val * 0.1574];
    const OUNCE = [val * 0.0625, val / 35.274, val / 0.035274, val * 0.0044643];
    const GRAM = [val * 0.0022046, val / 1000, val * 0.035274, val * 0.00015747];
    const STONE = [val * 14, val / 0.15747, val * 224, val * 0.00015747];


    switch (id) {

        case 'inputPound':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputPound;
            });

            newInpType.forEach((elem, index) => {
                elem.value = POUND[index];
                checkEmptyVal(elem);
            });
            break;

        case 'inputKilogram':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputKilogram;
            });

            newInpType.forEach((elem, index) => {
                elem.value = KILOGRAM[index];
                checkEmptyVal(elem)
            });
            break;

        case 'inputOunce':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputOunce;
            });

            newInpType.forEach((elem, index) => {
                elem.value = OUNCE[index];
                checkEmptyVal(elem)
            });
            break;

        case 'inputGram':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputGram;
            });

            newInpType.forEach((elem, index) => {
                elem.value = GRAM[index];
                checkEmptyVal(elem)
            });
            break;

        case 'inputStone':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputStone;
            });

            newInpType.forEach((elem, index) => {
                elem.value = STONE[index];
                checkEmptyVal(elem)
            });
            break;
        default:
            location.reload();
            break;
    }

}