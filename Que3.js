class car{
    //properties
    company;
    model;
    year;

    //constructor
    constructor(c,m,y){
        this.company = c
        this.model = m
        this.year = y
    }

    //method/behaviour
    getDescription(){
        return `This is car ${this.year} ${this.company} ${this.model}`
    }
}

//obj
let c = new car("Audi", "latest", 2022)
console.log(c);
console.log(c.getDescription())