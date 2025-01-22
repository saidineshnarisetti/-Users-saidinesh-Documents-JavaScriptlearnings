let person = {
    firstName: 'Sai',
    lastName: 'Dinesh',
    age:'32',
    funlName : function(){
        console.log(this.firstName+this.lastName)
    }
}
console.log(person.funlName())
console.log(person.firstName)
console.log(person['lastName'])
person.firstName = 'Narisetti'
console.log(person.firstName)

person.gender = 'Male' 
console.log(person)
console.log('gender' in person)

delete person.gender
console.log(person)

console.log('gender' in person)

for(let key in person){
    console.log("Key: "  + person[key])
}


