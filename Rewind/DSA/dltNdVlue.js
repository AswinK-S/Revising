class Node{
    constructor(data){
        this.data = data
        this.next =null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size =0
    }

    insertLast(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head=newNode
        }else{

            let curr=this.head
            while(curr.next!==null){
                curr=curr.next
            }
            curr.next=newNode
        }
        this.size++

    }

    //delete 
    deleteNode(value){
        if(!this.head){
            console.log('empty');
        }
        else{
            let curr=this.head
            let prev = null
            while(curr!==null && curr.data !== value ){
                prev = curr
                curr = curr.next
            }

            if(curr !== null && curr.data == value){
                prev.next=curr.next
                this.size--
            }else{
                console.log('no value found');
            }
        }
    }

    display(){
        let curr=this.head
        while(curr !== null){
            console.log(curr.data)
            curr=curr.next
        }
    }
}

let ll= new linkedList()
ll.insertLast(200)
ll.insertLast(100)
ll.insertLast(300)
ll.insertLast(400)
ll.deleteNode(40)
ll.display()
