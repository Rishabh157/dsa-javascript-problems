

// [1,2,3,4,5]
// [1,4,9,16,20]

// ---------------- first solution -------------
function firstCheckSquareElement(array1, array2) {


    if (!array1.length || !array2.length) {
        throw new Error('array is empty')
    }

    let isElementSquare = false;
    for (let i = 0; i < array1.length; i++) {

        for (let j = 0; j < array2.length; j++) {

            if ((array1[i] * array1[i]) === array2[j]) {
                isElementSquare = true
            } else {
                isElementSquare = false
            }

        }
    }

    console.log(isElementSquare)

}

firstCheckSquareElement([1, 2, 3, 4, 5], [1, 4, 9, 16, 20])
// o(n^2)


// -----------------------------------------------
// Another Solution with o(n)

function firstCheckSquareElementWithLiner(array1, array2) {

    if (array1.length !== array2.length) {
        throw new Error('array length are not same')
    }
    let isAllSquare = true
    for (let i = 0; i < array1.length; i++) {

        if (Math.pow(array1[i], 2) === array2[i]) {
            isAllSquare = true
            continue
        } else {
            isAllSquare = false
            break
        }
    }
    console.log(isAllSquare)
}

firstCheckSquareElementWithLiner([1, 2, 4, 2], [1, 4, 16, 4])

//-------------------------------------------------------------------

// -----------------------------------------------------------------------
// Solve With Mapping

function checkSquareWith(array1, array2) {

    let map1 = {};
    let map2 = {};

    for (let i of array1) {
        map1[i] = (map1[i] || 0) + 1
    }

    for (let i of array2) {
        map2[i] = (map2[i] || 0) + 1
    }

    for (let key in map1) {

        if (!map2[key * key]) {
            return false
        }

        if (map1[key] !== map2[key * key]) {
            return false
        }

    }

    return true
}

const result = checkSquareWith([1, 2, 4, 2], [1, 4, 16, 4]);
console.log(result)