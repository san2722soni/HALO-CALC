let btn = document.getElementById("toggle");
let advanced = document.getElementById("advanced");
let container = document.getElementById("container"); // whole calc container
let x = document.getElementById("normal"); // normal numbers calculator
let idk = document.querySelector(".calc");
let skullIcon = document.querySelector(".fa-skull");

document.body.onload(console.log(btn.checked));
const toggleCalc = () => {
	if (btn.checked) {
		x.style.display = "none";
		skullIcon.style.display = "none";
		document.querySelector(".nav").style.justifyContent = "center";
		advanced.style.display = "grid";
		container.style.width = "clamp(70%, 80%, 100%)";


	} else {
		advanced.style.display = 'none'
		container.style.width = 'auto'
		x.style.display = "flex";
		skullIcon.style.display = "block";
		document.querySelector(".nav").style.justifyContent = "space-between";
		document.querySelector('.active-content').remove();
		document.querySelector('.active').classList.remove('active');
	}
};

function changingPlace() {
	advanced.style.display = "none";
	container.style.width = "auto";
	btn.parentElement.childNodes[3].style.display = "none";
	let url = "../images/halloween-2837936.png";
	body = document.getElementsByTagName("body")[0];
	body.style.background = `url(${url})`;
	body.style.backgroundSize = `cover`;
	body.style.backgroundRepeat = `no-repeat`;

	let array = [];

	for (let i = 0; i < 10; i++) {
		array.push(document.getElementById(`${i}`));
	}

	setInterval(() => {
		changeNum(array);
		for (let i = 0; i < 10; i++) {
			const element = array[i];
			document.getElementById(`${i}`).innerHTML = element.id;
			console.log(element);
		}
	}, 2000);

	var audio = new Audio("../media/1song.mp3");
	audio.play();
}

const changeNum = (array) => {
	let currentIndex = array.length,
		randomIndex;
	
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

let clue = ['SOMETIMES IMAGES ARE BUTTONS !', `${OTPnum} x 1 = ${OTPnum}`, `NEVER LOSE YOUR SENSE OF WONDER !`,];
let count = 0;
document.body.onload = () => {
	setTimeout(() => {
		setInterval(() => {
			showSnackbar(clue[count]);
			count++;

			if (count == clue.length) {
				count = 0;
			}
			
		}, 7000);
	}, 5000);
}

