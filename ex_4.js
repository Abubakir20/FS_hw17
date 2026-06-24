function checkAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    word2 = word2.split('');

    for (let i of word1) {
        if (!word2.includes(i)) {
            return false;
        }

        word2.splice(word2.indexOf(i), 1);
    }

    return true;
}

console.log(checkAnagram("aab", "abb"));