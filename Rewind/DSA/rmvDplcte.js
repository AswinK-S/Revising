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

    // remove duplicate from linkedList
    removeDplcte(){
        let set = new Set()
        let curr = this.head
        let prev = this.null
        while (curr){
            if(set.has(curr.data)){
                curr=curr.next
                prev.next = curr
            }else{
                set.add(curr.data)
                prev =curr
                curr =curr.next
            }
        }
        console.log('set :',set);
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

let array=[1,6,6,6,6,6,3,3,2,6,5,7,7]

let ll = new linkedList()
ll.insertFirst(array)
// ll.display()
ll.removeDplcte()
ll.display()