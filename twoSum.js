// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function sum(l1, l2) {

    let firstNum = parseInt(l1.join(''));
    let secondNum = parseInt(l2.join(''));

    let result = (firstNum + secondNum) + ''
    console.log(result)

    console.log(result.split('').reverse())

}

sum([9,9,9,9,9,9,9], [9,9,9,9]);
