const verifyPalindrome = (data) => {
return data == String(data).split('').reverse().join('');
}

console.log(verifyPalindrome(12221));
console.log(verifyPalindrome('aabbaa'));