class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    insertFirst(data){
        for(let i=0;i<data.length;i++){
            let newNode = new Node(data[i])
            newNode.next = this.head
            this.head = newNode
        }
    }

    reverse(){
        let prev= null
        let curr =this.head
        let front =this.head
        while (curr.next !==null){
            curr.next=prev
            prev=curr
            front=front.next
            curr=front
        }
        this.head=prev
    }

    display(){
        if(!this.head){
            console.log('empty');
        }else{
            let curr =this.head
            while (curr){
                console.log(curr.data)
                curr = curr.next
            }
        }
    }
}

let array=[1,2,3,4,5,6]

let ll = new linkedList()
ll.insertFirst(array)
ll.display()