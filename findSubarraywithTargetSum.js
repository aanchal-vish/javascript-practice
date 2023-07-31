const subArraywithTargetSum = (arr, sum) => {
let start = 0;
let end = 0;
let currentSum = arr[start];
while(end < arr.length) {
if(currentSum === sum) {
    return arr.slice(start, end+1);
}
else if (currentSum < sum) {
    end++;
    currentSum+=arr[end];
}
else{
    currentSum-=arr[start];
    start++;
}
}
return null;
}

console.log(subArraywithTargetSum([1, 4, 20, 3, 10, 5], 33))