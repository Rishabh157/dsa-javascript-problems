
let counter = 1
function sayHello(num) {
    if (counter <= 10) {
        console.log(counter * num)
        counter++
        sayHello(num)
    }
}

sayHello(7)
