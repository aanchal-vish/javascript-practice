const findAnagrams = (str) => {
let combinations = [];
const generateAnagram = (prefix, remaining) => {
    if(remaining.length === 0 && checkPalindrome(prefix)) {
        combinations.push(prefix);
        return;
    }
    for(let i =0; i<remaining.length;i++) {
        generateAnagram(prefix+remaining[i], remaining.slice(0,i)+remaining.slice(i+1));
    }

}
generateAnagram('', str);
return Array.from(new Set(combinations));
}

const checkPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}

console.log(findAnagrams('abb'));