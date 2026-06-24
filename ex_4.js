function checkAnagram(word1, word2) {
    let check = false
    if (word1.length == word2.length) {
        for (let i of word1) {
            check = (word2.includes(i)) ? true : false;
            if(!check) return false;  
        }
    } else {
        return check;
    }
    
    return check;
}

console.log(checkAnagram("listen", "silent"));