const inputFeet = document.getElementById('inputFeet'),
    inputInches = document.getElementById('inputInches'),
    inputYards = document.getElementById('inputYards'),
    inputMiles = document.getElementById('inputMiles'),
    inputMeters = document.getElementById('inputMeters'),
    inputCm = document.getElementById('inputCm'),
    inputKm = document.getElementById('inputKm');

function lengthConverter(id, val) {

    const checkEmptyVal = (elem) => {
        if (val === '') {
            elem.value = '';
        }
    }


    let inputTypes = [inputFeet, inputMeters, inputInches, inputCm, inputYards, inputKm, inputMiles];

    const FEET = [val / 3.2808, val * 12, val / 0.032808, val * 0.33333, val / 3280.8, val * 0.00018939];

    const METERS = [val * 3.2808, val * 39.370, val / 0.01, val * 1.0936, val / 1000, val * 0.00062137];

    const INCHES = [val * 0.083333, val / 39.370, val / 0.39370, val * 0.027778, val / 39370, val * 0.000015783];

    const CM = [val * 0.032808, val / 100, val * 0.39370, val * 0.010936, val / 100000, val * 0.0000062137];

    const YARDS = [val * 3, val / 1.0936, val * 36, val / 0.010936, val / 1093.6, val * 0.00056818];

    const KILOMETERS = [val * 3280.8, val * 1000, val * 39370, val * 100000, val * 1093.6, val * 0.62137];

    const MILES = [val * 5280, val / 0.00062137, val * 63360, val / 0.0000062137, val * 1760, val / 0.62137];

    switch (id) {

        case 'inputFeet':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputFeet;
            });

            newInpType.forEach((elem, index) => {
                elem.value = FEET[index].toFixed(2);

                if (elem == inputKm || inputMiles) {
                    elem.value = FEET[index].toFixed(5);
                }
                checkEmptyVal(elem)
            });
            break;

        case 'inputMeters':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputMeters;
            });

            newInpType.forEach((elem, index) => {
                elem.value = METERS[index].toFixed(2);
                if (elem == inputKm || inputMiles) {
                    elem.value = METERS[index].toFixed(5);
                }
                checkEmptyVal(elem)
            });
            break;

        case 'inputInches':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputInches;
            });

            newInpType.forEach((elem, index) => {
                elem.value = INCHES[index].toFixed(2);
                if (elem == inputKm || inputMiles) {
                    elem.value = INCHES[index].toFixed(5);
                }
                checkEmptyVal(elem)
            });
            break;

        case 'inputCm':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputCm;
            });

            newInpType.forEach((elem, index) => {
                elem.value = CM[index].toFixed(2);
                if (elem == inputKm || inputMiles) {
                    elem.value = CM[index].toFixed(4);
                }
                checkEmptyVal(elem)
            });
            break;

        case 'inputYards':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputYards;
            });

            newInpType.forEach((elem, index) => {
                elem.value = YARDS[index].toFixed(2);
                if (elem == inputKm || inputMiles) {
                    elem.value = YARDS[index].toFixed(4);
                }
                checkEmptyVal(elem)
            });
            break;

        case 'inputKm':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputKm;
            });

            newInpType.forEach((elem, index) => {
                elem.value = KILOMETERS[index].toFixed(2);
                if (elem == inputKm || inputMiles) {
                    elem.value = KILOMETERS[index].toFixed(2);
                }
                checkEmptyVal(elem)
            });
            break;

        case 'inputMiles':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputMiles;
            });

            newInpType.forEach((elem, index) => {
                elem.value = MILES[index].toFixed(2);
                if (elem == inputKm) {
                    elem.value = MILES[index].toFixed(1);
                }
                checkEmptyVal(elem)
            });
            break;
        default:
            location.reload();
            break;
    }

}
