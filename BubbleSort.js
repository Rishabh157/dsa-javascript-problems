// -------------------------------------------------------------------------
function bubbleSort(array) {

    for (let i = array.length - 1; i > 0; i--) {
        let isSwapped;
        for (let j = 0; j < i - 1; j++) {

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                isSwapped = true;
            }

        }
        if (!isSwapped) {
            break
        }
    }

    return array;
}

let result = bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
console.log(result)
