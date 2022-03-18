let a = 841;
let total = a;


if (a > 100) {
    let total = a / 2 ** 3;
    console.log(`the total is : ${total}`);
}
else {
    let total = a / 2 ** 2;
    console.log(`the total is : ${total}`);  
}

for (let i = 0; i < total; i++) {
    console.log(i);
    if ((i * i) == a) {
        console.log(`${i} x ${i}`);
        break;
    }
}


