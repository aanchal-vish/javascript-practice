const largestElement = (arr) => {
return (Math.max(...arr));
}

const largestElementwoMax = (arr) => {
 return  arr.reduce((max, current) => current> max ? current : max, arr[0]);
}

console.log(largestElement( [10, 5, 20, 30, 15]));
console.log(largestElementwoMax( [10, 5, 20, 30, 15]));
