class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // print the whole array
    print() {
        return this.data
    }

    // get the element by index
    get(index) {
        if (typeof index === 'number' && index >= 0) {
            return this.data[index];
        }
        throw new Error('invalid index')
    }

    // push the element
    push(item) {
        this.data[this.length] = item
        this.length++
    }

    remove(index) {
        const deleteItem = this.data[index];
        this.shifItem(index)
        return deleteItem
    }


    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--
        return this.lastItem
    }


    shifItem(index) {
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

}

let arr = new MyArray();

// push 100 random number of elements inside the array 
for (let i = 0; i <= 100; i++) {
    arr.push(Math.round(Math.random() * 100000))
}

// for access the specifi0c index element of the array
let randomInt = arr.get(1)
console.log(randomInt)

// for removeing specific element via the index of the array
console.log(arr.remove(0))

// for removeing last element of the array
console.log(arr.pop())

// for print the whole array
console.log(arr.print())
