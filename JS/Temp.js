const inputCel = document.getElementById('Cel');
const inputFah = document.getElementById('Fah');
const inputKel = document.getElementById('Kel');

function temperatureConverter(id, val) {
    let inputTypes = [inputFah, inputCel, inputKel];

    let FAH = [(val - 32) / 1.8, ((val - 32) / 1.8) + 273.15];
    let CEL = [(val * 1.8) + 32, val + 273.15];
    let KEL = [((val - 273.15) * 1.8) + 32, val - 273.15];

    const checkEmptyVal = (elem) => {
        if (val === '') {
            elem.value = '';
        }
    }

    switch (id) {
        case 'Fah':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputFah;
            });

            newInpType.forEach((elem, index) => {
                elem.value = FAH[index].toFixed(2);
                checkEmptyVal()
            });

            console.log(newInpType);
            break;

        case 'Kel':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputKel;
            });

            newInpType.forEach((elem, index) => {
                elem.value = KEL[index].toFixed(2);
                checkEmptyVal()
            });
            console.log(newInpType);
            break;

        case 'Cel':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputCel;
            });

            newInpType.forEach((elem, index) => {
                elem.value = CEL[index];
                checkEmptyVal()
            });
            console.log(newInpType);
            break;

        default: console.log('hello');
            break;
    }

}

