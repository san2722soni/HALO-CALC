let main = document.querySelector(".splash");
let OTP = document.getElementById("OTP");

let OTPnum = parseInt(Math.random() * 10000);
OTP.innerHTML = `< ${OTPnum}/>`;

setTimeout(() => {
	main.classList.add("idk");

	style = window.getComputedStyle(main);
	setTimeout(() => {
		document.body.style.overflowY = "auto";
		main.remove();
	}, parseFloat(style.getPropertyValue("transition-duration")) * 1000);
}, 3000);
