const findMaxOccuring = (sentence) => {
    let countMap = {};
    let maxFreq = 0;
    let maxWord = ''
    sentence.split(' ').forEach(item => {
        if(countMap[item]) {
            countMap[item] = countMap[item]+1;
        }
        else{
            countMap[item] = 1;
        }
        if(maxFreq < countMap[item]) {
            maxFreq = countMap[item];
            maxWord = item;
        }
    });
    return [maxWord, maxFreq];
}

console.log(findMaxOccuring('aa bbbb aa hhjj aa yjjhhh ggg aa'));