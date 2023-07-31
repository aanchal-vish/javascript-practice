const reverseWords = (sentence) => {
let reverseSentence = sentence.split(' ').map((word) => word.split('').reverse().join(''));
return reverseSentence.join(' ');
}

console.log(reverseWords("I am the good boy"));