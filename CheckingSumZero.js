
// Q ->  Checking Sum zero 
// [-5 , -4 , -3 , -2 , 0 , 2 , 4 , 6 , 8]

const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];



// first solution with two loops
for (let i in arr) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
            return console.log([arr[i], arr[j]])
        }
    }
}

// second solution with one loop
let i = 0;
let j = 1;

let isBreack = true

while (isBreack) {

    if (arr[i] + arr[j] === 0) {
        console.log([arr[i], arr[j]]);
        isBreack = false
    } else if (j <= arr.length) {
        i++
    } else {
        j++
    }
}
