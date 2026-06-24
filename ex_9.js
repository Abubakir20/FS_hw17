// 9
function mostRepeated (arr) {
    let maxEl = 0;
    let maxRep = 0;
    for (let i of arr) {
        let count = 0;
        for (let x of arr) {
            if (i === x) {
                count += 1;
            }
        }
        if (count > maxRep) {
            maxRep = count;
            maxEl = i;
        }
    }
    return maxEl;
}

console.log(mostRepeated([1, 2, 3, 4, 4, 2, 1, 1]))