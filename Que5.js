class Person{
    //properties
    name;
    age;

    //constructor
    constructor(n = "Unknown",a = 0){
        this.name = n;
        this.age = a;
    }

    //method/behaviour
    getDetails(){
            return `Name : ${this.name}, Age: ${this.age}`
    }
}

let person = new Person("Himanshi", 30)
console.log(person)
console.log(person.getDetails());

let person2 = new Person()
console.log(person2)
console.log(person2.getDetails());