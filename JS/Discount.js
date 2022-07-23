let ogPrice = document.getElementById("originalPrice");
let discount = document.getElementById("Discount");

function calculateDiscount() {
	let originalPriceValue = document.getElementById("originalPrice").value;
	let discountValue = document.getElementById("Discount").value;
	let Ypay = document.getElementById("Ypay");
	let Ysaving = document.getElementById("Ysaving");

	let discountPrice = ((originalPriceValue * discountValue) / 100).toFixed(2);
	let discountedPrice = originalPriceValue - discountPrice;

	Ypay.value = discountedPrice;
	Ysaving.value = discountPrice;

	// >= changed to >
	if (discountValue > 100) {
		showSnackbar(`Oh, really? Tell us where's such deal!`);

		// Changes made by Nishil
		Ypay.value = "Invalid";
		Ysaving.value = "Invalid";
	}
	// const ctx = document.getElementById("myChart").getContext("2d");

	// const myChart = new Chart(ctx, {
	// 	type: "bar",
	// 	data: {
	// 		labels: ["Original price", "Discounted price"],
	// 		datasets: [
	// 			{
	// 				label: ["A", "B"],
	// 				data: [`${originalPriceValue}`, `${discountedPrice}`],
	// 				backgroundColor: [
	// 					"rgba(153, 102, 255, 0.2)",
	// 					"rgba(255, 99, 132, 0.2)",
	// 				],
	// 				borderColor: ["rgb(153, 102, 255)", "rgb(255, 99, 132)"],
	// 				borderWidth: 1,
	// 			},
	// 		],
	// 	},
	// 	options: {
	// 		scales: {
	// 			y: {
	// 				beginAtZero: true,
	// 				max: 100,
	// 			},
	// 		},
	// 	},
	// });
	// myChart.data.datasets[0].data = [`${originalPrice}`, `${discountedPrice}`];
	// myChart.update();
}

ogPrice.addEventListener("input", calculateDiscount);
discount.addEventListener("input", calculateDiscount);
