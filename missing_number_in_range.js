const missingNumber = (array, range) => {
    let rangeSum = (range * (range + 1)) / 2;
    let arraySum = array.reduce((a,b) => a+b, 0);
    return rangeSum - arraySum;
}

console.log(missingNumber([1,9,7,10,5,2,4,8,6], 10));