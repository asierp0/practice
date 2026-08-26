
// type narrowing with "typeof" - "in" - "instanceOf" 


//typeof

function printId(id: string | number): void{
    console.log(id.toUpperCase());
}

function logId(id: string | number): void{
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }
    else{
        console.log(id);
    }
}

//in


type User = {
    id: number;
    name: string;
};

type RegisteredUser = {
    id: number;
    name: string;
    email: string;
};

function printUser(user: User | RegisteredUser): void {
    if ("email" in user) {
        console.log(user.email);
    } else {
        console.log(user.name);
    }
}

// instanceof

class Agent {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string){
        this.id = id
        this.name = name
        this.email = email
    }
}

const agent = new Agent(1, "Aaron", "aaron@example.com")

if(agent instanceof Agent){
    console.log(agent);
}