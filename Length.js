const inputFeet = document.getElementById('inputFeet'),
    inputInches = document.getElementById('inputInches'),
    inputYards = document.getElementById('inputYards'),
    inputMiles = document.getElementById('inputMiles'),
    inputMeters = document.getElementById('inputMeters'),
    inputCm = document.getElementById('inputCm'),
    inputKm = document.getElementById('inputKm');

function lengthConverter(id, value) {


    let inputTypes = [inputFeet, inputMeters, inputInches, inputCm, inputYards, inputKm, inputMiles];

    const FEET = [value / 3.2808, value * 12, value / 0.032808, value * 0.33333, value / 3280.8, value * 0.00018939];

    const METERS = [value * 3.2808, value * 39.370, value / 0.01, value * 1.0936, value / 1000, value * 0.00062137];

    const INCHES = [value * 0.083333, value / 39.370, value / 0.39370, value * 0.027778, value / 39370, value * 0.000015783];

    const CM = [value * 0.032808, value / 100, value * 0.39370, value * 0.010936, value / 100000, value * 0.0000062137];

    const YARDS = [value * 3, value / 1.0936, value * 36, value / 0.010936, value / 1093.6, value * 0.00056818];

    const KILOMETERS = [value * 3280.8, value * 1000, value * 39370, value * 100000, value * 1093.6, value * 0.62137];

    const MILES = [value * 5280, value / 0.00062137, value * 63360, value / 0.0000062137, value * 1760, value / 0.62137];

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
            });
            console.log(newInpType);
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
            });
            console.log(newInpType);
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
            });
            console.log(newInpType);
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
            });
            console.log(newInpType);
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
            });
            console.log(newInpType);
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
            });
            console.log(newInpType);
            break;

        case 'inputMiles':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputMiles;
            });

            newInpType.forEach((elem, index) => {
                elem.value = MILES[index].toFixed(2);
                if (elem == inputKm || inputMiles) {
                    elem.value = MILES[index].toFixed(1);
                }
            });
            console.log(newInpType);
            break;
        default:
            console.log("hello");
            break;
    }

}

//NISHIL WORK
// make better and nice input feild in length calc
//correctly round off all the value of input feild
//if any of the feild is empty , then all will become empty