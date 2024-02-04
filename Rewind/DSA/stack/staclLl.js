class Node{
    constructor(data){
        this.data = data
        this.next = 0
    }
}

class Stack{
    constructor(){
        this.top =null
        this.size =0
    }


    // add data to the stack
    push(data){
        let newNode = new Node(data)
        if(this.top ==null){
           this.top = newNode 
        }
        else{
            newNode.next=this.top
            this.top = newNode
        }
        this.size++
    }

    // remove data from the stack
    pop(){
        if(this.top==null){
           return console.log('empty stack');
        }

        let curr = this.top
        curr=curr.next
        this.top = curr
        this.size--
    }

    //check pallindrome
    isPallindrome(){
        let arr=[]
        if(this.top==null){
            return console.log('empty stack');
         }
         let curr = this.top
         while(curr){
            arr.push(curr.data)
            curr=curr.next
         }

         for(let i=0,j=arr.length-1;i<Math.floor(arr.length/2);i++,j--){
            if(arr[i]!==arr[j]){
                return console.log('not pallindrome');
            }
            
        }
        console.log('pallindrome');
    }

    displayStack(){
        if(this.top==null){
           return console.log('empty stack');
        }

        let curr = this.top
        while(curr){
            console.log(curr.data);
            curr=curr.next
        }
    }
}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(40)
stack.push(30)
stack.push(20)
stack.push(10)
stack.isPallindrome()
stack.pop()
stack.pop()
stack.isPallindrome()
stack.displayStack()
console.log(stack);