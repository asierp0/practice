"use strict";
//classes
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Task {
    id;
    title;
    description;
    status;
    assignedTo;
    constructor(id, title, description, status, assignedTo) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.assignedTo = assignedTo;
    }
    get ticketState() {
        return { status: this.status, assignedTo: this.assignedTo };
    }
    assignTask(user) {
        this.assignedTo = user;
    }
    completeTask() {
        if (this.status === "complete") {
            console.log("This task has already been complete");
        }
        else {
            this.status = "complete";
        }
    }
}
class TaskManager {
    tasks;
    constructor(tasks) {
        this.tasks = tasks;
    }
    get taskList() {
        return this.tasks;
    }
    setTasks(tasks) {
        this.tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask(id) {
        let index = this.tasks.findIndex((task) => task.id === id);
        if (index != -1) {
            this.tasks.splice(index, 1);
        }
        else {
            console.log("Task with that ID does not exist.");
        }
    }
    filterTasks(status) {
        const completeTasks = this.tasks.filter(task => task.ticketState.status === status);
        return completeTasks;
    }
    assignTask(user, id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            console.log("Task does not exist.");
        }
        else {
            task.assignTask(user);
        }
    }
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            console.log(`A task with ID: ${id} does not exist.`);
        }
        else {
            task.completeTask();
        }
    }
    printTaskSummary() {
        for (const task of this.tasks) {
            const name = task.ticketState.assignedTo === "unassigned" ? "unassigned" : task.ticketState.assignedTo.name;
            console.log(`=====TASK ID: ${task.id}=====
TASK: ${task.title}
STATUS: ${task.ticketState.status}
ASSIGNED TO: ${name}\n`);
        }
    }
}
//user objects
const userOne = new User(1, "Aaron");
const userTwo = new User(2, "Joe");
//task objects
const taskOne = new Task(1, "Mow Lawn", "Mow the lawn, front and back", "in-progress", "unassigned");
const taskTwo = new Task(2, "Take Out Trash", "Collect and take the garbage to the dumpster", "complete", "unassigned");
const taskThree = new Task(3, "Learn to Code", "Learn to write programs in JavaScript.", "in-progress", "unassigned");
const taskFour = new Task(4, "Walk Dog", "Walk the dog for one mile.", "complete", "unassigned");
const taskFive = new Task(5, "Take Nap", "Sleep for 1 hour", "in-progress", "unassigned");
//task manager objects
const taskManager = new TaskManager([]);
//async mock
async function fetchTasks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([taskOne, taskTwo, taskThree, taskFour, taskFive]);
        }, 1000);
    });
}
async function assignTaskManager() {
    const tasklist = await fetchTasks();
    taskManager.setTasks(tasklist);
}
//mock async save update 
async function saveData(task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (task.ticketState.assignedTo === "unassigned") {
                reject(new Error("Save Failed"));
            }
            else {
                resolve(task);
            }
        }, 1000);
    });
}
async function saveTask(task) {
    try {
        await saveData(task);
        console.log("Save Successful");
    }
    catch (error) {
        console.log("Save Failed");
    }
}
async function main() {
    await assignTaskManager();
    console.log("=====Ticket Summary=====\n");
    taskManager.printTaskSummary();
    taskManager.assignTask(userTwo, 3);
    taskManager.printTaskSummary();
    taskManager.completeTask(1);
    taskManager.printTaskSummary();
    await saveTask(taskThree);
    await saveTask(taskTwo);
    const completedTasks = taskManager.filterTasks("complete");
    console.log("===== COMPLETED TASK SUMMARY =====");
    console.log(completedTasks);
}
main();
//# sourceMappingURL=index.js.map