const inputMPH = document.getElementById('inputMPH'),
    inputKnot = document.getElementById('inputKnot'),
    inputKPH = document.getElementById('inputKPH'),
    inputMach = document.getElementById('inputMach');

let speed = document.getElementById('speed-show');

function speedConverter(id, val) {

    const checkEmptyVal = (elem) => {
        if (val === '') {
            elem.value = '';
        }
    }
    
    if (val > 0 && val <= 10)
    {
        speed.innerHTML = `<i class="fa-solid fa-plane"></i>`;
    }
    else if (val > 10 && val <= 50)
    {
        speed.innerHTML = `<i class="fa-solid fa-rocket rotate"></i>`;    
    }
    else if (val > 50)
    {
        speed.innerHTML = `<i class="fa-solid fa-shuttle-space fast"></i>`;    
    }
    else {
        speed.innerHTML = '';
    }
    
    let inputTypes = [inputMPH, inputKPH, inputKnot, inputMach];
    
    const MPH = [val * 1.609344, val / 1.150779, val / 761.207];
    const KPH = [val / 1.609344, val / 1.852, val / 1225.044];
    const Knot = [val * 1.150779, val * 1.852, val / 661.4708];
    const MACH = [val * 761.207, val * 1225.044, val * 661.4708];

    switch (id) {

        case 'inputMPH':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputMPH;
            });

            newInpType.forEach((elem, index) => {
                elem.value = MPH[index].toFixed(2);
                checkEmptyVal(elem);
            });
            break;

        case 'inputKnot':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputKnot;
            });

            newInpType.forEach((elem, index) => {
                elem.value = Knot[index].toFixed(2);
                checkEmptyVal(elem)
            });
            break;

        case 'inputKPH':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputKPH;
            });

            newInpType.forEach((elem, index) => {
                elem.value = KPH[index].toFixed(2);
                checkEmptyVal(elem)
            });
            break;

        case 'inputMach':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputMach;
            });

            newInpType.forEach((elem, index) => {
                elem.value = MACH[index].toFixed(4);
                checkEmptyVal(elem)
            });
            break;
        default:
            location.reload();
            break;
    }

}
