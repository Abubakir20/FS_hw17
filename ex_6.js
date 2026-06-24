function armstrong (number) {
    let copy = number;
    let sum = 0;
    while (copy) {
        sum += (copy % 10) ** String(number).length;
        copy = Math.floor(copy /= 10);
    }
    return (sum === number);
}

console.log(armstrong(153));