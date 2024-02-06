class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(data){
        let newNode = new Node(data)
        if(this.size==0){
            this.front = newNode
            this.rear = newNode
        }
        else{
            this.rear.next = newNode
            this.rear = newNode
        }

        this.size++
    }
    
    dequeue(){
        if(this.size ==0){
            return console.log('empty');
        }

        let curr = this.front
        // console.log('curr :',curr);
        curr =curr.next
        this.front =curr
        this.size--
    }

    display(){
        if(this.size==0){
            return console.log('empty');
        }
        let curr = this.front
        while (curr){
            console.log(curr.data)
            curr=curr.next
        }

    }
}

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.display() 
queue.dequeue()
console.log("-------------------------")
queue.display() 
console.log(queue);