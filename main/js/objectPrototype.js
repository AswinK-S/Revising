function Person (firstName,lastName){
this.firstName=firstName
this.lastName=lastName
}

Person.prototype.fullName=function(){
    return this.firstName + ' ' + this.lastName
}

let obj = new Person('Aswin','K S')
console.log('obj',obj,)
console.log('fullname',obj.fullName())