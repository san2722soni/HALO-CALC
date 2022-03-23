const inputBytes = document.getElementById('inputBytes'),
    inputKiloBytes = document.getElementById('inputKiloBytes'),
    inputMegaBytes = document.getElementById('inputMegaBytes'),
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


    let inputTypes = [inputBytes, inputKiloBytes, inputMegaBytes, inputGigaByte, inputTeraByte, inputPetaByte, inputExaByte];

    const BYTES = [val / 3.2808, val * 12, val / 0.032808, val * 0.33333, val / 3280.8, val * 0.00018939];

    const KILOBYTES = [val * 3.2808, val * 39.370, val / 0.01, val * 1.0936, val / 1000, val * 0.00062137];

    const MEGABYTES = [val * 0.083333, val / 39.370, val / 0.39370, val * 0.027778, val / 39370, val * 0.000015783];

    const GIGABYTES = [val * 0.032808, val / 100, val * 0.39370, val * 0.010936, val / 100000, val * 0.0000062137];

    const TERABYTES = [val * 3, val / 1.0936, val * 36, val / 0.010936, val / 1093.6, val * 0.00056818];

    const PETABYTES = [val * 3280.8, val * 1000, val * 39370, val * 100000, val * 1093.6, val * 0.62137];

    const EXABYTES = [val * 5280, val / 0.00062137, val * 63360, val / 0.0000062137, val * 1760, val / 0.62137];

    switch (id) {

        case 'inputBytes':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputBytes;
            });

            newInpType.forEach((elem, index) => {
                // elem.value = BYTES[index].toFixed(2);
                
                // if (elem == inputKm || inputMiles) {
                //     elem.value = BYTES[index].toFixed(5);
                // }
                elem.value = parseFloat(BYTES[index].toFixed(4))
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputKiloBytes':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputKiloBytes;
            });

            newInpType.forEach((elem, index) => {
                // elem.value = KILOBYTES[index].toFixed(2);
                // if (elem == inputKm || inputMiles) {
                //     elem.value = KILOBYTES[index].toFixed(5);
                // }
                elem.value = parseFloat(KILOBYTES[index].toFixed(4))
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputMegaBytes':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputMegaBytes;
            });

            newInpType.forEach((elem, index) => {
                // elem.value = MEGABYTES[index].toFixed(2);
                // if (elem == inputKm || inputMiles) {
                //     elem.value = MEGABYTES[index].toFixed(5);
                // }
                elem.value = MEGABYTES[index].toFixed(4)
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputGigaByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputGigaByte;
            });

            newInpType.forEach((elem, index) => {
                // elem.value = GIGABYTES[index].toFixed(2);
                // if (elem == inputKm || inputMiles) {
                //     elem.value = GIGABYTES[index].toFixed(4);
                // }
                elem.value = GIGABYTES[index].toFixed(4)
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
                // if (elem == inputKm || inputMiles) {
                //     elem.value = TERABYTES[index].toFixed(4);
                // }
                elem.value = parseFloat(TERABYTES[index].toFixed(4))
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputPetaByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputPetaByte;
            });

            newInpType.forEach((elem, index) => {
                // elem.value = PETABYTES[index].toFixed(2);
                // if (elem == inputPetaByte || inputMiles) {
                //     elem.value = PETABYTES[index].toFixed(2);
                // }
                elem.value = parseFloat(PETABYTES[index].toFixed(4))
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;

        case 'inputExaByte':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputExaByte;
            });

            newInpType.forEach((elem, index) => {
                elem.value = EXABYTES[index].toFixed(2);
                if (elem == inputExaByte) {
                    elem.value = EXABYTES[index].toFixed(1);
                }
                checkEmptyVal(elem)
            });
            console.log(newInpType);
            break;
        default:
            console.log('error')
            break;
    }

}