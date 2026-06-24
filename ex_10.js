function countLetters (str) {
    let obj = {};
    for (let i of str) {
        if (i in obj) {
            obj[i] += 1;
        } else {
            obj[i] = 1
        }
    }
    return obj;
}

console.log(countLetters("hello"));