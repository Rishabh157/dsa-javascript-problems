
// Q ->  Checking Sum zero and return the first pair 
// [-5 , -4 , -3 , -2 , 0 , 2 , 4 , 6 , 8]
// ans -> [-4 , 4]

const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// first solution with two loops
function findZeroPairWithTwoLoops(arr) {

    for (let i in arr) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return console.log([arr[i], arr[j]])
            }
        }
    }
}

// call the function
findZeroPairWithTwoLoops(arr);


// second solution with one loop
function findZeroPairWithOneLoop(arr) {

    let i = 0;
    let j = 1;
    let isBreak = true

    while (isBreak) {
        if (arr[i] + arr[j] === 0) {
            console.log([arr[i], arr[j]]);
            isBreak = false
        } else if (j <= arr.length) {
            i++
        } else {
            j++
        }
    }

}

// call the function
findZeroPairWithOneLoop(arr);
