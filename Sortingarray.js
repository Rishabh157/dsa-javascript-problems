

// Sorting 
// [2 , 3 , 1 , 4] 

function sorting(array) {

    let i = 0
    let j = 1
    let isSorting = false

    while (!isSorting) {
        if (array[i] < array[j]) {
            i++
            j++
        } else if (array[i] > array[j]) {
            // [array[i], array[j] = array[j], array[i]]
            let max = array[i];
            let min = array[j];
            array[i] = min;
            array[j] = max;
            i = 0;
            j = 1;
        } else {
            isSorting = true
        }
    }
    return array
}

let result = sorting([2, -3, -1, -5, 4, -4, 6, 7])
console.log(result)
