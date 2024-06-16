
// crateOrder
// proceedToPayment
// showOrderSummary
// updateWallet

// create order promise that check the cart count
function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (cart) {
            resolve({
                orderId: '276293',
                paymentType: 'Phonepe',
                totalAmount: 1200
            })
        } else {
            const err = new Error('Cart Count is empty')
            reject(err)
        }
    })
}

// procced to payment promise after the create order
function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if (orderId) {
            resolve({
                orderId: '276293',
                paymentType: 'Phonepe',
                itemName: ['SRK Chaiyya Chaiyya Red Jacket', 'Black T-Shirt', 'Gray Cargo pant', 'US POLO Shoes'],
                totalAmout: 1200,
                isOrderSummary: true
            })
        } else {
            const err = new Error('Amount is invalid')
            reject(err)
        }
    })
}

// show order summary promise after the proceed to payment
function showOrderSummary(isOrderSummaryIsGenrated) {
    return new Promise(function (resolve, reject) {
        if (isOrderSummaryIsGenrated) {
            resolve({
                orderId: '276293',
                paymentType: 'Phonepe',
                itemName: ['SRK Chaiyya Chaiyya Red Jacket', 'Black T-Shirt', 'Gray Cargo pant', 'US POLO Shoes'],
                totalAmout: 1200,
                isOrderSummary: isOrderSummaryIsGenrated,
            })
        } else {
            const err = new Error('Something error when being Order Summary is generated :)')
            reject(err)
        }
    })
}

// updating the wallet promise when show order summary is successfull
function updateWallet(updateWallet) {
    return new Promise(function (resolve, reject) {
        if (updateWallet) {
            resolve({
                orderId: '276293',
                paymentType: 'Phonepe',
                itemName: ['SRK Chaiyya Chaiyya Red Jacket', 'Black T-Shirt', 'Gray Cargo pant', 'US POLO Shoes'],
                totalAmout: 1200,
                isOrderSummary: true,
                wallet: 3000
            })
        } else {
            const err = new Error('Something when wrong for updating the wallet :)')
            reject(err)
        }
    })
}

//  Promise Chaining to prevent callback hell
createOrder(4).then(function (response) {
    return response
}).then(function (orderResult) {
    return proceedToPayment(orderResult.orderId)
}).then(function (orderSummary) {
    return showOrderSummary(orderSummary.isOrderSummary)
}).then(function (summary) {
    const isUpdateWallet = true
    return updateWallet(isUpdateWallet)
}).then(function (result) {
    console.log('result', result)
}).catch(function (error) {
    console.log(error)
})
