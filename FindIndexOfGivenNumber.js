// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// numer 7 index => 6 


function findIndexOfNumber(number, array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i
        }
    }
    return new Error('number is not part of the array')
}

const resultOfIndex = findIndexOfNumber(14, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

console.log('', resultOfIndex)
