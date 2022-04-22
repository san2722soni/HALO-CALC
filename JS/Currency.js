// https://currency.getgeoapi.com/

let currency_key = "06184e5c87bbeef787753786622ef254cdb863d6";
let currency1 = document.getElementById("currency1"); // select dropdown
let currency2 = document.getElementById("currency2"); // select dropdown
let currencyInput = document.getElementById("currency-input"); // curerency input
let convertedVal = document.getElementById("converted-val");
let swapArrow = document.querySelector(".fa-arrow-right-arrow-left");

const getCurrencyPromise = async () => {
	let currencyPromise = await fetch(
		`https://api.getgeoapi.com/v2/currency/list?api_key=${currency_key}&format=json`
	);
	//use string literals
	let currencyJson = await currencyPromise.json();
	return currencyJson;
};

const getList = async () => {
	let jsonData = await getCurrencyPromise();
	//now you can directly use jsonData
	let currencies = jsonData.currencies;
	console.log(currencies);

	let foo = Object.keys(currencies).sort();
	foo.forEach((ele) => {
		let option = document.createElement("option");
		option.value = ele;
		option.innerHTML = ele;
		currency1.appendChild(option);
	});

	let bar = Object.keys(currencies).sort();
	bar.forEach((ele) => {
		let option = document.createElement("option");
		option.value = ele;
		option.innerHTML = ele;
		currency2.appendChild(option);
	});
};
getList();

function convert() {
	async function getPromise() {
		let url = `https://api.getgeoapi.com/v2/currency/convert?api_key=${currency_key}&from=${currency1.value}&to=${currency2.value}&amount=${currencyInput.value}&format=json`;

		let conversionPromise = await fetch(url);
		let conversionjson = await conversionPromise.json();

		return conversionjson;
	}

	async function getConvertedrates() {
		let jsonData = await getPromise();
		convertedVal.innerText = `${
			jsonData.rates[currency2.value].rate_for_amount
		} - ${jsonData.rates[currency2.value].currency_name}`;
	}

	getConvertedrates();
}

let timeout;
let doneTypingInterval = 2000;

// Listen for keystroke events
currencyInput.addEventListener("keyup", () => {
	clearTimeout(timeout);

	timeout = setTimeout(convert, doneTypingInterval);
});

currencyInput.addEventListener("keydown", () => {
	clearTimeout(timeout);
});

swapArrow.addEventListener("click", () => {
	[currency1.value, currency2.value] = [currency2.value, currency1.value];

	convert();
});
