// method 1 using built-in flat method
const flattenNestedArray = (arr) => {
return arr.flat(Infinity);
}
//method 2 using recursion
const flattenNestedArrayWOFlat = (arr) => {
    let flatArr = [];
    arr.forEach(element => {
        if(Array.isArray(element)) {
            flatArr = flatArr.concat(flattenNestedArrayWOFlat(element));
        }
        else{
            flatArr.push(element);
        }
    });
    return flatArr;
}

console.log(flattenNestedArray([1,5,[8,[0,8,6,[4,0,[6,2,[8]]]]]]));
console.log(flattenNestedArrayWOFlat([1,5,[8,[0,8,6,[4,0,[6,2,[8]]]]]]));