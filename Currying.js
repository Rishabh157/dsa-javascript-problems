
// Currying is a technique where functions that takes multiple argument is transformed into a 
// series of functions that each take one argument

function add(x) {
    return function (y) {
        return function (z) {
            return x * y * z
        }
    }
}


// currying
console.log(add(5)(10)(5)) // 250  // one way

let addInsideFun = add(5)
let insideFunFun = addInsideFun(10)
let finaFun = insideFunFun(5)
console.log(finaFun)  // 250


