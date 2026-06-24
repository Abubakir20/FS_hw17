function isTub (number) {
    if (number > 1) {
        for (let i = 2; i * i <= number; i++) {
            if(number % i === 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(isTub(1));