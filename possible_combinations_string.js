const possibleCombinations = (str) => {
let combinations = [];
const generateCombination = (prefix, remaining) => {
if(remaining.length === 0) {
    combinations.push(prefix);
    return;
}
for(let i = 0; i<remaining.length; i++) {
    generateCombination(prefix+remaining[i], remaining.slice(0,i)+remaining.slice(i+1))
}
}
generateCombination('', str);
return combinations;
}



console.log(possibleCombinations('abcd'));