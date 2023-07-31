const findPrimeFactors = (num) => {
let factors = [];
while(num % 2 === 0) {
    factors.push(2);
    num /= 2;
}

for(let i =3; i< Math.sqrt(num); i += 2) {
    while(num % i === 0) {
        factors.push(i);
        num /= i;
    }
}

if (num > 2) {
    factors.push(num);
  }
return factors;

}

console.log(findPrimeFactors(16));