
function convertToRoman(num) {
    const romanNumeralMap = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };

    let result = '';

    const keys = Object.keys(romanNumeralMap).reverse();
    // console.log('keys', keys)
    for (let i = 0; i < keys.length; i++) {
        const key = parseInt(keys[i]);
        // console.log('key' , key)
        while (num >= key) {
            // console.log(num, key, 'LOLO')
            result += romanNumeralMap[key];
            // console.log('result', romanNumeralMap[key])
            num -= key;
            //  num   = 7 - 5 => 2
            // console.log('after ', num, key)
        }
    }
    // console.log('result', result)
    return result;
}

convertToRoman(8)

// Example usage:
// console.log(convertToRoman(354)); // Outputs: CCCLIV
// console.log(convertToRoman(2024)); // Outputs: MMXXIV

// let x = 10;
// let y = (++x, x + 1, x * 2);

// console.log(y);

// let num = 10

// let numPostIncrement = ++num
// console.log(numPostIncrement)
// console.log(num)

// var num = 2

// function square(num){
//     var ans = num * num
//     return ans
// }

// var square2 = square(num);
// var square4 = square(4);
// console.log('square2' , square2)
// console.log('square4' , square4)


var x = 10

setTimeout(() => {
    a()
    b()
}, 1000)

console.log('x', x)

function a() {
    var x = 100
    console.log('a', x)
}

function b() {
    var x = 1000
    console.log('b', x)
}

