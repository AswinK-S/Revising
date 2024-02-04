class Node{
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    insertAfter(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }else{
            let curr = this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next = newNode
        }

        this.size++
    }

    chckPlndrme(){
        if(!this.head){
            console.log('empty list');
        }
        let arr =[]
        let curr=this.head
        while(curr){
            arr.push(curr.data)
            curr = curr.next
        }
        for(let i=0,j=arr.length-1;i<Math.floor(arr.length/2);i++,j--){
            if(arr[i]!==arr[j]){
                return console.log('not pallindrome');
            }
            
        }
        console.log('pallindrome');
    }

    display(){
        if(this.head){
        console.log('empty list');
        }

        let start=this.head
        while(start){
            console.log(start.data);
            start = start.next
        }
    }
}

let list = new linkedList()
list.insertAfter(1)
list.insertAfter(2)
list.insertAfter(2)
list.insertAfter(2)
list.insertAfter(1)

list.display()
list.chckPlndrme()
