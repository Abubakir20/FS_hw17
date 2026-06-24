function ekub (a, b) {
    let maxEkub = 0;
    for (let i = 0; i <= b; i++) {
        if (b % i === 0 && a % i == 0) {
            maxEkub = (maxEkub < i) ? i : maxEkub;
        }
    }
    return maxEkub;
}

console.log(ekub(5, 20));