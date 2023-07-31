const findAnagram = (words) => {
let sortedStringMap = new Map();
words.forEach((word) => {
    if(sortedStringMap.has(word.split('').sort().join(''))) {
        sortedStringMap.get(word.split('').sort().join('')).push(word);
    }
    else{
        sortedStringMap.set(word.split('').sort().join(''), [word]);
    }
});
return Array.from(sortedStringMap.values()).filter((words)=> words.length>1)
}

const words = ["listen", "silent", "enlist", "tinsel", "hello", "world"];
console.log(findAnagram(words));