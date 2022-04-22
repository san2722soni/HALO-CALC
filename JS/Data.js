const inputByte = document.getElementById('inputByte'),
    inputKiloByte = document.getElementById('inputKiloByte'),
    inputMegaByte = document.getElementById('inputMegaByte'),
    inputGigaByte = document.getElementById('inputGigaByte'),
    inputTeraByte = document.getElementById('inputTeraByte'),
    inputPetaByte = document.getElementById('inputPetaByte'),
    inputExaByte = document.getElementById('inputExaByte');

function dataConverter(id, val) {

    const checkEmptyVal = (elem) => {
        if (val === '') {
            elem.value = '';
        }
    }


    let inputTypes = [inputByte, inputKiloByte, inputMegaByte, inputGigaByte, inputTeraByte, inputPetaByte, inputExaByte];

    const BYTES = [val / 1000, val / 1000000, val / 1e+9.toFixed(8), val / 1e+12.toFixed(8), val / 1e+15.toFixed(8), val / 1e+18.toFixed(8)];

    const KILOBYTES = [val * 1000, val / 1000, val / 1e+6.toFixed(8), val / 1e+9.toFixed(8), val / 1e+12.toFixed(8), val / 1e159.toFixed(8)];

    const MEGABYTES = [val * 1e+6.toFixed(8), val * 1000, val / 1000, val / 1e+6.toFixed(8), val / 1e+9.toFixed(8), val / 1e+12.toFixed(8)];

    const GIGABYTES = [val * 0.032808, val / 100, val * 0.39370, val / 1000, val / 100000, val * 0.0000062137];

    const TERABYTES = [val * 1e+12.toFixed(8), val / 1e+9.toFixed(8), val * 1e+6.toFixed(8), val * 1000, val / 1000, val / 1e+6.toFixed(8)];

    const PETABYTES = [val * 1e+15.toFixed(8), val * 1e+12.toFixed(8), val * 1e+9.toFixed(8), val * 1e+6.toFixed(8), val * 1000, val * 1000];

    const EXABYTES = [val * 1e+18.toFixed(8), val / 1e+15.toFixed(8), val * 1e+12.toFixed(8), val * 1e+9.toFixed(8), val * 1e+6.toFixed(8), val * 1000];

    switch (id) {

        case 'inputByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputByte;
            });

            newInpType.forEach((elem, index) => {
                // elem.value = BYTES[index].toFixed(2);
                elem.value = parseFloat(BYTES[index].toFixed(20))
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputKiloByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputKiloByte;
            });

            newInpType.forEach((elem, index) => {
                elem.value = parseFloat(KILOBYTES[index].toFixed(15))
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputMegaByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputMegaByte;
            });

            newInpType.forEach((elem, index) => {
                elem.value = parseFloat(MEGABYTES[index].toFixed(15))
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputGigaByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputGigaByte;
            });

            newInpType.forEach((elem, index) => {
                elem.value = parseFloat(GIGABYTES[index].toFixed(15));
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputTeraByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputTeraByte;
            });

            newInpType.forEach((elem, index) => {
                // elem.value = TERABYTES[index].toFixed(2);
                elem.value = parseFloat(TERABYTES[index].toFixed(15))
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputPetaByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputPetaByte;
            });

            newInpType.forEach((elem, index) => {
                elem.value = parseFloat(PETABYTES[index].toFixed(15));
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputExaByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputExaByte;
            });

            newInpType.forEach((elem, index) => {
                elem.value = parseFloat(EXABYTES[index].toFixed(15));
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;
        default:
            console.log(typeof id)
            break;
    }

}