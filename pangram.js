const checkPangram = (sentence) => {
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
for(let char of alphabet) {
    if(sentence.toLowerCase().indexOf(char) === -1) {
        return false;
    }
}
return true;
}

console.log(checkPangram('The quick brown fox jumps over the lazy dog'));