
//classes

class User{
    readonly id: number
    public name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

class Task{
    readonly id: number;
    public title: string;
    public description: string;
    private status: "in-progress" | "complete"
    private assignedTo: User | "unassigned";

    constructor(id: number, title: string, description: string, status: "in-progress" | "complete", assignedTo: User | "unassigned"){
        this.id = id
        this.title = title
        this.description = description
        this.status = status
        this.assignedTo = assignedTo
    }

    get ticketState(){
        return {status: this.status, assignedTo: this.assignedTo};
    }

    assignTask(user: User){
        this.assignedTo = user;
    }

    completeTask(){
        if(this.status === "complete"){
            console.log("This task has already been complete")
        }           
        else{
            this.status = "complete"
        }
    }
}

class TaskManager{
    private tasks: Task[]

        constructor(tasks: Task[]){
            this.tasks = tasks
        }

    get taskList(): readonly Task[]{
        return this.tasks;
    }

    setTasks(tasks: Task[]){
        this.tasks = tasks;
    }

    addTask(task: Task){
        this.tasks.push(task)
    }
    deleteTask(id: number){
        
        let index = this.tasks.findIndex((task) => task.id === id)
        if(index != -1){
            this.tasks.splice(index, 1);
        }
        else{
            console.log("Task with that ID does not exist.")
        }
    }

    filterTasks(status: "in-progress" | "complete"): Task[] {
        
        const completeTasks = this.tasks.filter(task => task.ticketState.status === status);
        return completeTasks;
    }

    assignTask(user: User, id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if(!task){
            console.log("Task does not exist.");
        }else{
            task.assignTask(user);
        }  
    }

    completeTask(id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if(!task){
            console.log(`A task with ID: ${id} does not exist.`)
        }else{
            task.completeTask();
        }
    }

    printTaskSummary(): void{
        for(const task of this.tasks){

            const name = task.ticketState.assignedTo === "unassigned" ? "unassigned" : task.ticketState.assignedTo.name;

            console.log(`=====TASK ID: ${task.id}=====
TASK: ${task.title}
STATUS: ${task.ticketState.status}
ASSIGNED TO: ${name}\n`);
            
        }
    }
}

//user objects

const userOne: User = new User(1, "Aaron");
const userTwo: User = new User(2, "Joe");

//task objects

const taskOne: Task = new Task(1, "Mow Lawn", "Mow the lawn, front and back", "in-progress", "unassigned");
const taskTwo: Task = new Task(2, "Take Out Trash", "Collect and take the garbage to the dumpster", "complete", "unassigned");
const taskThree: Task = new Task(3, "Learn to Code", "Learn to write programs in JavaScript.", "in-progress", "unassigned");
const taskFour: Task = new Task(4, "Walk Dog", "Walk the dog for one mile.", "complete", "unassigned");
const taskFive: Task = new Task(5, "Take Nap", "Sleep for 1 hour", "in-progress", "unassigned");

//task manager objects

const taskManager: TaskManager = new TaskManager([]);

//async mock

async function fetchTasks(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve([taskOne, taskTwo, taskThree, taskFour, taskFive]);
        }, 1000);
    });
}

async function assignTaskManager(): Promise<void>{
const tasklist = await fetchTasks();

taskManager.setTasks(tasklist);
}

//mock async save update 

async function saveData(task: Task): Promise<Task> {
    
        return new Promise<Task>((resolve, reject) => {
            setTimeout(() => {
                if(task.ticketState.assignedTo === "unassigned"){
                    reject(new Error("Save Failed"))
                }
                else{
                resolve(task);
                }
            }, 1000);
        });
    
}

async function saveTask(task: Task): Promise<void> {

    try{
       await saveData(task);
       console.log("Save Successful\n")
    }
    catch(error){
       console.log("Save Failed\n")
    }
}

async function main(): Promise<void>{
    
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

    console.log("===== COMPLETED TASK SUMMARY =====")
    console.log(completedTasks);

}

main();


