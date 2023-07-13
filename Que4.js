class Employee{
    //properties
    name;
    position;
    salary;

    // constructor
    constructor(n,p,s){
        this.name = n;
        this.position = p;
        this.salary = s;
    }

    //method/behavior
    getSalary(){
        return `The salary of the employee is ${this.salary}`
    }
}

let e = new Employee("Ram", "HR", 50000)
console.log(e)
console.log(e.getSalary());