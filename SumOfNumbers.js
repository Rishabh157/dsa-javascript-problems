// 

// first solution

function sumOfNumbersWithLoop(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}

// let time1 = performance.now()

// const result = sumOfNumbersWithLoop(1000000000);

// let time2 = performance.now()

// console.log(`the elapsed time is ${(time2 - time1) / 1000} of `, result)



// Second Solution with less time
function sumOfNumbersWithoutLoop(n) {
    return (n * (n + 1)) / 2
}

let time1 = performance.now()

const result = sumOfNumbersWithoutLoop(1000000000000000);

let time2 = performance.now()

console.log(`the elapsed time is ${(time2 - time1) / 1000} of `, result)
