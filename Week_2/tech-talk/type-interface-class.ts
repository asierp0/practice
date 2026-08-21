
//interface 

interface User1 {
    id: number;
    name: string;
    age: number;
    greet(): void;
}

interface Admin1 extends User1{
    clearance: Clearance;
}

//type

type User2 = {
    id: number,
    name: string,
    age: number,
    greet(): void
}

type Admin2 = User2 & {
    clearance: Clearance
}

type Clearance = "lvl-1" | "lvl-" | "lvl-3";


//Class 

class User3{
    constructor(
     public id: number,   
     public name: string,
     public age: number

    ){}

    greet(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

const user = new User3(2, "Aaron", 39);