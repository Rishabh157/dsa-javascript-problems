// Binery Search

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


function findIndexByBinarySearch(array1, number) {

    let min = 0
    let max = array1.length - 1;


    while (min <= max) {

        let midIndex = Math.floor((min + max) / 2);

        if (array1[midIndex] < number) {
            min = midIndex + 1
        } else if (array1[midIndex] > number) {
            max = midIndex - 1
        } else {
            return midIndex
        }

    }
    return -1;
}

const result = findIndexByBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 11)
console.log(result)
