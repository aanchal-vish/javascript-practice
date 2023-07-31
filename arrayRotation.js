const rotateArray = (array, n) => {
n = n % array.length;
if(n === 0) return array;
let rotatedPart = array.splice(-n);
array.unshift(...rotatedPart);
return array;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));