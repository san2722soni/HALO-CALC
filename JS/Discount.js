
function calculateDiscount() {

    let originalPrice = document.getElementById('originalPrice').value;
    let discount = document.getElementById('Discount').value;
    let Ypay = document.getElementById('Ypay');
    let Ysaving = document.getElementById('Ysaving');


    let discountPrice = ((originalPrice * discount) / 100).toFixed(2);
    let discountedPrice = originalPrice - discountPrice;

    Ypay.value = discountedPrice;
    Ysaving.value = discountPrice;

    if (discount >= 100) {
        showSnackbar(`Oh, really? Tell us where's such deal!`);
    }
    const ctx = document.getElementById('myChart');

    var myChart = null;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Original price', 'Discounted price'],
            datasets: [{
                label: '',
                data: [`${originalPrice}`, `${discountedPrice}`],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgb(153, 102, 255)',
                    'rgb(255, 99, 132)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
    if (myChart != null) {
        myChart.destroy();
    }
    console.log(myChart.destroy());
    adddata(myChart, discountPrice, originalPrice);
}
    function adddata(myChart, discountedPrice, originalPrice) {
        myChart.data.datasets.data = [`${originalPrice}`, `${discountedPrice}`];
        console.log(myChart.data.datasets.data = [`${originalPrice}`, `${discountedPrice}`]);
        // myChart.update();
    }
