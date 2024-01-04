//  Count Unique Number
//  [1,1,2,2,3,4,4,5,6,7,8,8]
// output -> 8 

const countUniqueNumber = (array) => {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array  [i + 1]) {
            arr = [...arr, array[i]]
        }
    }
    return arr.length
}

const result = countUniqueNumber([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9,])
console.log(result)
