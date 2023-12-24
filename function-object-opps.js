// object creation using js object literal
let user = {
    id:101,
    name:"test1",
    age:30
}

console.log(user.name)

let contact = {
    id:1001,
    name:"test22",
    phone:40400404
}
let contact2 = {
    id:10003,
    name:"test333"
}

class Contact{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email=email
    }
}

let c1 = new Contact("test1",20,'test1@gmail.com')
let c2 = new Contact("test2",40,"test2@gmail.com")

let contacts = [];
contacts.push(c1)
contacts.push(c2);

console.log(c1)
console.log(c2)

console.log(contacts.length)

let salaries = [1000,2000,3000,4000]

//let newArr = [2000,40000,6000,8000]
// map in js

let newArr = salaries.map((item)=>{
    return item*2
})

console.log(newArr)
