class HashTable{
    constructor(size){
        this.table =new Array(size)
    }

    hash(key){
        let sum =0
        let wp=31
        for(let i=0;i<key.length;i++){
            let char=key[i]
            let values=char.charCodeAt(0)-96
            sum=(sum*wp+values)%this.table.length
        }
        return sum
    }

    //set the index
    set(key,value){
        let index =this.hash(key)
        if(!this.table[index]){
            this.table[index] =[]
        }
        this.table[index].push([key,value])
    }

    //get the value
    get(key){
       let index = this.hash(key)
       if(this.table[index]){
       for(let i=0;i<this.table[index].length;i++){
        // console.log('hash table :',this.table[index][i]);
         if(this.table[index][i][0]==key){
              console.log(this.table[index][i][1]);
         }
       } 
       } else{
        console.log('no data',undefined);  

       }
    }
}

let hashTable = new HashTable(6)
hashTable.set('asw','Aswin')
hashTable.set('aks','Akshay')
hashTable.set('aks','Akshay')
hashTable.set('c2',123)
hashTable.get('asw')
hashTable.get('c2')

