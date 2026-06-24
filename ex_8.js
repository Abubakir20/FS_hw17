function noyob (arr) {
    return [... new Set(arr)];
}

console.log(noyob([1, 2, 3, 4, 1, 3, 2, 2, 5, 8,  ]))