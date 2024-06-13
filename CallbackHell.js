//  in js a callback hell is a situation where multiple nested callbacks functions are
// called each other and make code hard to read and maintain


function firstCallback(callback) {
    setTimeout(() => {
        console.log('First print')
        callback()
    }, 2000)
}

function secondCallback(callback) {
    setTimeout(() => {
        console.log('Second print')
        callback()
    }, 2000)
}

function thirdCallback(callback) {
    setTimeout(() => {
        console.log('Third print')
        callback()
    }, 2000)
}

// Callback hell
firstCallback(() => {
    console.log('First Executed')
    secondCallback(() => {
        console.log('Second Executed')
        thirdCallback(() => {
            console.log("Third Executed")
        })
    })
})
