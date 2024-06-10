// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// function sum(l1, l2) {

//     let firstNum = parseInt(l1.join(''));
//     let secondNum = parseInt(l2.join(''));

//     let result = (firstNum + secondNum) + ''
//     console.log(result)

//     console.log(result.split('').reverse())

// }

// sum([9,9,9,9,9,9,9], [9,9,9,9]);


// for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000)
// }

// function outer() {
//     // private
//     let x = 0;

//     return function counter() {
//         x++
//         console.log(x)
//     }

// }

// // outer()()()
// let inner = outer()
// inner()
// inner()
// inner()
// inner()
// inner()



// optimize the counter 

// function Counter() {
//     var count = 0

//     this.increment = function () {
//         count++
//         console.log(count)
//     }

//     this.decrement = function () {
//         count--
//         console.log(count)
//     }

// }

// let counter = new Counter()

// for (let i = 0; i < 100; i++) {
//     counter.increment()
// }



// class Counter {
//     constructor(count) {
//         this.count = count
//     }

//     increment = function () {
//         this.count++
//         console.log(this.count)
//     }

//     decrement = function () {
//         this.count--
//         console.log(this.count)
//     }

// }

// let counter = new Counter(1)

// for (let i = 1; i < 100; i++) {
//     counter.increment()
// }


function outer() {
    var x = 10, z = 100
    return function inner() {
        console.log(x)
        console.log(z)
    }

}

// outer()()
// let result = (5*4) - (2+1)
// console.log(result)
// 
// function greeting(name, callback) {
//     console.log('Hello, ' + name + '!');
//     callback();
// }

function farewell() {
    console.log('Goodbye!');
}

// greeting('Alice', farewell);

function greet(farewell) {
    let time = 0;

    for (let i = 1; i <= 10; i++) {
        // const element = array[i];
        time++
        setTimeout(() => {
            console.log('Hello', i)
            if (i === 5) {
                farewell()
            }
        }, i * 1000)
        // console.log('time ', time)
    }
}

greet(farewell)
