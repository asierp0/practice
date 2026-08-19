"use strict";
// CUSTOMERS
Object.defineProperty(exports, "__esModule", { value: true });
const customerOne = {
    id: 1,
    firstName: "Bob",
    lastName: "Vance",
    email: "bvance@example.com"
};
const customerTwo = {
    id: 2,
    firstName: "Ken",
    lastName: "Jennings",
    email: "kjennings@example.com"
};
const agentOne = {
    id: 1,
    title: "Support",
    name: "Tony",
    department: "IT"
};
const agentTwo = {
    id: 2,
    title: "Support",
    name: "Susan",
    department: "Help Desk"
};
const agentThree = {
    id: 3,
    title: "Analyst",
    name: "Jim",
    department: "SOC"
};
const tickets = [
    {
        id: 1,
        title: "Failed Connection",
        description: "User is unable to connect to financial services.",
        priority: "high",
        status: "open",
        createdBy: customerOne,
        assignedTo: agentOne,
        tags: ["connection", "login", "financial services"],
        isActive: true
    },
    {
        id: "A-1",
        title: "Account Lockout",
        description: "User maxed out attempts, resulting in an account lockout.",
        priority: "low",
        status: "open",
        createdBy: customerTwo,
        assignedTo: agentTwo,
        tags: ["locked out", "user error"],
        isActive: true
    },
    {
        id: 3,
        title: "Feature change request",
        description: "Management wants an additional field added to account-signup.",
        priority: "low",
        status: "open",
        createdBy: agentOne,
        assignedTo: agentOne,
        tags: ["feature"],
        isActive: true
    }
];
const escalatedTicket = {
    id: 4,
    title: "Possible Security Breach",
    description: "Suspicious network activity detected by analyst",
    priority: "high",
    status: "processing",
    createdBy: agentOne,
    assignedTo: agentThree,
    tags: ["security", "high-risk"],
    isActive: true,
    escalatedBy: agentThree,
    escalationCause: "Possible network breach",
    escalationDate: new Date()
};
tickets.push(escalatedTicket);
// FUNCTIONS
function checkEscalatedTicket(ticket) {
    return 'escalatedBy' in ticket;
}
function displayTicket(ticket) {
    if (checkEscalatedTicket(ticket)) {
        console.log("========= ESCALATED TICKET =========");
        console.log(`Escalated By: ${ticket.escalatedBy.name}`);
        console.log(`Cause: ${ticket.escalationCause}`);
        console.log(`Date: ${ticket.escalationDate}`);
    }
    else {
        console.log("========TICKET========");
    }
    if (typeof ticket.id === 'string') {
        console.log(`TicketID: ${ticket.id}`);
    }
    else if (typeof ticket.id === "number") {
        console.log(`Numeric Ticket ID: ${ticket.id}`);
    }
    console.log(`Title: ${ticket.title}`);
    console.log(`Priority: ${ticket.priority}`);
    console.log(`Status: ${ticket.status}`);
    console.log(`Description: ${ticket.description}`);
    if ("email" in ticket.createdBy) {
        console.log(`Ticket created by customer: ${ticket.createdBy.firstName} ${ticket.createdBy.lastName}`);
    }
    else {
        console.log(`Ticket created by agent: ${ticket.createdBy.name}\n`);
    }
}
for (const ticket of tickets) {
    displayTicket(ticket);
}
// Special Type Examples: Any, Unknown, Never
function anyTypeExample() {
    const mockTicket = {
        id: 12,
        title: "mock ticket",
        agent: "dave"
    };
    console.log("=== ANY TYPE EXAMPLE ===");
    console.log(`Ticket Title: ${mockTicket.title}`);
    try {
        console.log(`TicketID: ${mockTicket.id.toUpperCase()}`);
    }
    catch (error) {
        console.log("ID should be displayed here - Runtime error caused by ANY allowing a number to use a string method.\n");
    }
}
anyTypeExample();
// Unknown type example
const unknownData = {
    name: "Bob Vance",
    age: 45,
    profession: "refridgerator salesman"
};
function unknownTypeExample(unknownData) {
    console.log("=====UNKNOWN TYPE EXAMPLE======");
    console.log("This is possible due to type checking, which is necessary with the Unknown type.");
    if (typeof unknownData === "object") {
        console.log("Incoming data is an Object");
    }
    else {
        console.log("shape of data could not be determined");
    }
    for (const value of Object.values(Object(unknownData))) {
        if (typeof value === 'string') {
            console.log(`The object contains the following string: ${value}\n`);
        }
        if (typeof value === 'number') {
            console.log(`The object contains the following numeric value: ${value}`);
        }
    }
}
unknownTypeExample(unknownData);
// NEVER TYPE EXAMPLE
function neverTypeExample(message) {
    throw new Error(message);
}
console.log('=====NEVER TYPE EXAMPLE======');
try {
    neverTypeExample("Ticket processing failure");
}
catch (error) {
    console.log("A never type does not return a value, it throws instead.\n");
}
//Type Assertion
const person = {
    id: 5,
    title: "analyst",
    name: "Lucy",
    department: "SOC"
};
const personAgent = person;
console.log('======TYPE ASSERTION=======');
console.log(`Agent: ${personAgent.name}`);
console.log(`Department: ${personAgent.department}`);
//# sourceMappingURL=index.js.map