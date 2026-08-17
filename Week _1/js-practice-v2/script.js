const form = document.querySelector("form");
const input = document.querySelector("input");
const select = document.querySelector("select");
const btn = document.querySelector("button");
const taskCount = document.querySelector("span");
const taskList = document.querySelector("ul");


form.addEventListener("submit", addTask);

let taskArray = [];

function addTask(e){
    e.preventDefault();

    const taskObj = {
        name: "",
        priority: ""
    }

    taskObj.name = input.value;
    taskObj.priority = select.value;

    console.log(taskObj.name);

    taskArray.push(taskObj);

    let li = document.createElement("li");
    li.textContent = `${taskArray[0].name} - ${taskArray[0].priority}`
    taskList.appendChild(li);

}