const checkTargetSum = (array, targetSum) => {
    const numSet = new Set();
    for(let num of array) {
        let num1 = targetSum - num;
        if(numSet.has(num1)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}

console.log(checkTargetSum([2,9,7,4,8,6,3], 15));