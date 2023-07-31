const findSubsequence = (arr) => {
const result = [];

const backTrack = (subseq, index) => {
result.push(subseq.slice());

for(let i = index; i<arr.length;i++) {
    subseq.push(arr[i]);
    backTrack(subseq, i+1);
    subseq.pop();
}
}
backTrack([], 0);
return result;
}

console.log(findSubsequence([1,2,3,4]))