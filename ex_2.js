function tubNumbers (a, b) {
    let arr = [];

    for (let x = a; x < b; x++){
        let isTub = true;

        if (x < 2) continue;

        for (let i = 2; i * i <= x; i++) {
            if(x % i === 0) {
                isTub = false;
                break;
            }
        
        }
        if(isTub){
            arr.push(x)
        }
    }    
    return arr;
}

console.log(tubNumbers(3, 20));