
// [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {

        let min = i;
        let index;

        for (let j = i + 1; j < array.length; j++) {

            if (array[min] > array[j]) {
                min = j;
                index = j;
            }

        }

        if (index) [array[i], array[index]] = [array[min], array[i]];

    }
    return array
}

let result = selectionSort([3, -44, 38, 5, -47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
console.log(result)
