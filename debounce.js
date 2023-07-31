const debounce = (func, delay) => {
let timeoutId;
return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func(), delay);
 }
}

const debouncedTime = debounce(()=> {
    console.log('debounce time Function'), 10000
});

debouncedTime();
debouncedTime();