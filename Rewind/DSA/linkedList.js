// let n1 = {
//     data:100
// }

// let n2 = {
//     data:200
// }

// n1.next = n2
// console.log(n1);


//linked list

class node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor (){
        this.head = null
        this.size = 0
    }

    //insert at the head
    insertAtFirst(data){
        const newNode = new node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    //insert at the end
    insertAtLast(data){
        const newNode = new node(data)
        if(!this.head){
            this.head = newNode
        }
        let curr = this.head
        while(curr.next){
            curr =curr.next
        }
        curr.next=newNode
        this.size++

    }

    // insert value after the given value
    insertAfter(insertData,value){
        if(this.size==0){
            console.log('empty list');
        }

        let newNode = new node(insertData)
        let curr = this.head
        while(!curr.data == value){
        curr=curr.next            
        }
        newNode.next = curr.next
        curr.next = newNode
    }

    // insert before the given value
    insertBefore(insertData,value){
        let prev=null
        if(this.head==null){
            console.log('empty list');
        }
        let newNode = new node(insertData)
        let curr = this.head
        while(curr.data !== value){
            prev = curr
            curr=curr.next
        }
        prev.next=newNode
        newNode.next=curr
    }


    //delete the given value
    delete(data){
        if(!this.head){
            console.log('empty list');
        }

        let prev = null
        let curr = this.head

        while(curr !== null && curr.data !== data){
            prev = curr
            curr = curr.next
        }
        if(curr !== null && curr.data == data  ){
            prev.next = curr.next
            this.size--
        }else{
            console.log('no value found');
        }
    }

    //find the mid
    findMid(){
        if(!this.head){
            console.log('empty list');
        }
        let mid = this.head
        let full = this.head

        while(full && full.next !==null){
            mid = mid.next
            full = full.next.next
        }
        console.log('mid :', mid.data);
    }

    // reverse the linked list
    


    //display
    display(){
        let result =[]
        if(this.size==0){
            console.log('empty array');
        }
        let curr = this.head
        while(curr){
            result.push(curr.data)
            curr=curr.next
        }
        console.log('display :',result);
    }
}

let ll = new linkedList()
ll.insertAtFirst(100)
ll.insertAtFirst(200)
ll.insertAtFirst(300)
ll.insertAtLast(400)
ll.insertAfter(250,300)
// ll.insertBefore(150,100)
ll.delete(250)
console.log(ll);
ll.display()
ll.findMid()