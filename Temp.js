const tempIcon = () => {
    let icon = document.getElementById('tempIcon');

    setTimeout(() => {
        icon.innerHTML = `<i class="fa-solid fa-temperature-empty"></i>`;
    }, 1000);

    setTimeout(() => {
        icon.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i>`;
    }, 2000);

    setTimeout(() => {
        icon.innerHTML = `<i class="fa-solid fa-temperature-half"></i>`;
    }, 3000);

    setTimeout(() => {
        icon.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>`;
    }, 4000);

    setTimeout(() => {
        icon.innerHTML = `<i class="fa-solid fa-temperature-full"></i>`;
    }, 5000);

}

tempIcon();

setInterval(tempIcon, 5000);

const inputCel = document.getElementById('Cel');
const inputFah = document.getElementById('Fah');
const inputKel = document.getElementById('Kel');

function temperatureConverter(id , value) {
    let inputTypes = [inputFah, inputCel, inputKel];

    let FAH = [( value - 32) / 1.8, (( value - 32) / 1.8) + 273.15];
    let CEL = [(value  * 1.8) + 32 , value  + 273.15];
    let KEL = [((value - 273.15) * 1.8) + 32, value - 273.15];
    
    switch (id)
    {
        case 'Fah':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputFah;
            });

            newInpType.forEach((elem, index) => {
                elem.value = FAH[index].toFixed(2);
            });

            console.log(newInpType);
            break;
        
        case 'Kel':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputKel;
            });

            newInpType.forEach((elem, index) => {
                elem.value = KEL[index].toFixed(2);

            });
            console.log(newInpType);
            break;
        
        case 'Cel':
            var newInpType = inputTypes.filter((elem) => {
                return elem != inputCel;
            });

            newInpType.forEach((elem, index) => {
                elem.value = CEL[index];

            });
            console.log(newInpType);
            break;
        
        default: console.log('hello');
            break;
    }

}

