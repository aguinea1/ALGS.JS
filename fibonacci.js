function fibonacci(n){
    if(n<= 0) return [];
    if (n===1) retur [0];
    const fib = [0, 1];
    let i = 0;

    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;

}

const arr  = fibonacci(20);
console.log(arr);