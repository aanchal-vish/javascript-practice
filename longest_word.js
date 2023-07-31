const findLongestWord = (sentence) => {
let arr = sentence.split(' ');
return arr.reduce((max, current) => current.length > max.length ? current: max, arr[0]);
}

console.log(findLongestWord('welcome to javascript'));