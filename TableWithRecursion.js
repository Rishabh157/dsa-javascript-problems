
let counter = 1

function printTable(num) {
    if (counter <= 10) {
        console.log('print here', counter * num)
        counter++
        printTable(num)
    }
}

printTable(7)
