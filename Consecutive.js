// [1,2,3,4,3,5,4,6,7,8]
// 1 ->  10
// 2 ->  12
// 3 ->  15
// 4 ->  16
// 5 ->  18
// 6 ->  22
// 7 ->  25


function largestNumber(array, consucativeNumber) {

    if (!array.length) {
        throw Error("Array is empty")
    }

    let copiedArray = [...array]
    let sumOfConsucativeNumber = []
    while (copiedArray.length >= consucativeNumber) {

        let sumOfStartFourNumber = 0;
        for (let i = 0; i < consucativeNumber; i++) {
            sumOfStartFourNumber += copiedArray[i];
        }
        sumOfConsucativeNumber = [...sumOfConsucativeNumber, sumOfStartFourNumber]
        copiedArray.shift()
    }

    let largestNumber = sumOfConsucativeNumber[0];
    for (let i = 1; i < sumOfConsucativeNumber.length; i++) {
        if (sumOfConsucativeNumber[i] > largestNumber) {
            largestNumber = sumOfConsucativeNumber[i];
        }
    }
    console.log('largestNumber', largestNumber)
}

largestNumber([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4)
