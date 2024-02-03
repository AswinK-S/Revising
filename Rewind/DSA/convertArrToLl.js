let array =[1,2,55,67]

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head =null
        this.size =0
    }

    insertFirst(data){
        for(let i=0;i<data.length;i++){

            let newNode = new Node(data[i])
            newNode.next = this.head
            this.head = newNode
        }
    }

    display(){
        let curr=this.head
        while(curr){
            console.log('ll',curr.data)
            curr =curr.next
        }
    }
}

let ll= new linkedList()
ll.insertFirst(array)
ll.display()
console.log(ll);