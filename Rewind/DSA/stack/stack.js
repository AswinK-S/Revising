//stack using array

class Stack{
    constructor(value){
        this.value=[]
        this.size=0
    }

    //add value to the end 
    push(value){
        this.value[this.size]=value
        console.log(`added ${value} at index ${this.size}` );
        this.size++
    }

    //pop value
    pop(){
        if(this.size==0){
            console.log('empty');
        }

        let deletedValue = this.value[this.size-1]
        console.log('deleted value :',deletedValue);
        this.value.splice(this.size-1,1)
        this.size--
    }


}

let stack = new  Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop(40)
console.log(stack);