// Promise Methods

const p1 = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve('P1 Success'), 3000)
    setTimeout(() => reject('P1 Failed'), 3000)
})

const p2 = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve('P2 Success'), 1000)
    setTimeout(() => reject('P2 Failed'), 1000)
})

const p3 = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve('P3 Success'), 500)
    setTimeout(() => reject('P3 Failed'), 500)
})

// Promise.all
// all the promise in the array have resolved. if any promise in the array reject, the returned promise 
// immediately rejects with the reason of the first reject promise
// Promise.all([p1, p2, p3]).then(function (result) {
//     console.log('result', result)
// }).catch(function (error) {
//     console.log(error)
//     // console.log(error.errors)
// })

// Promise.allSettled
// return a single promise that resolves when all the promise have settled, either fulfilled or rejected.
// the resulting promise resolves with an array of object each presenting the outcome of each promise.
// Promise.allSettled([p1, p2, p3]).then(function (result) {
//     console.log(result)
// }).catch(function (error) {
//     console.log(error)
// })



// Promise.race
// return a single promise that resolves or rejects as soon as one of the input promises resolves or rejects 
// Promise.race([p1, p2, p3]).then(function (result) {
//     console.log(result)
// }).catch(function (error) {
//     console.log(error)
// })

// Promise.any
// return a single promise that resolves as soon as any one of the input promise resolve, if all the promise
// get rejects it return the rejections errors

Promise.any([p1, p2, p3]).then(function (result) {
    console.log(result)
}).catch(function (error) {
    console.log(error) // AggregateError: All promises were rejected
    console.log(error.errors) //  ['P1 Failed', 'P2 Failed', 'P3 Failed']
})
