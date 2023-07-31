const findFibonacci = (num) => {
if(num <= 0) return null;
if(num === 1) return 0;
if(num === 2) return 1;
let prev = 0;
let curr = 1;
for(let i = 2; i<num; i++) {
let next = prev + curr;
prev = curr;
curr = next;
}
return curr;
}

console.log(findFibonacci(16));

const fibonacciSeries = (num) => {
    let series = [0, 1];
    for(let i=2; i<num;i++) {
        series[i] = series[i-1] + series[i-2];
    }
    return series;
}

console.log(fibonacciSeries(16))
