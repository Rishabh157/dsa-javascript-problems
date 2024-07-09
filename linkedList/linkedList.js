// A linked list is a linear data structure consisting of a sequence of elements
// called nodes

// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add a node at the end
    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            console.log('current', current.next)
        }
    }

}



let linkedList = new LinkedList();
console.log(linkedList.add()) 
