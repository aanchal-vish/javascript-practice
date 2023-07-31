const findGcd = (n1, n2) => {
if(n1 < n2) {
    [n1, n2] =[n2, n1];
}

while (n2 !== 0) {
    let rem = n1 % n2;
    n1 = n2;
    n2 = rem;
}
return n1;
}

console.log(findGcd(18, 48));