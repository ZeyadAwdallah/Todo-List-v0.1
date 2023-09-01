// Variables
const documentTasks = document.getElementById("tasks");
const input = document.getElementById("input");
const completeAll = document.getElementById("completeAll");
const deleteComplete = document.getElementById("deleteComplete");

let tasks = [];

// Storage Functions
// Function to store tasks in local storage
function storeTasks() {
    let taskString = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskString);
}

// Function to get tasks from local storage
function getTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
        tasks = storedTasks;
    }
}

// UI/UX Functions

// Function to render tasks
function fill() {
    documentTasks.innerHTML = "";
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        let content = `
            <div class="task">
                <div class="taskInfo">
                    <p class="${task.isDone ? "done" : ""}">${task.title}</p>
                    <span>${task.date}</span>
                </div>
                <div class="btns">
                    ${task.isDone ? `<button class="btn" id="notDone" onclick="doneOrNot(${index})">Redo</button>` : `<button class="btn" id="done" onclick="doneOrNot(${index})">Done</button>`}
                    <button class="btn" id="edit" onclick="updateTask(${index})">Edit</button>
                    <button class="btn" id="delete" onclick="deleteTask(${index})">Delete</button>
                </div>
            </div>`;
        documentTasks.innerHTML += content;
    }
}

// Function to add a new task
function addTask(title) {
    let now = new Date();
    let date = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + " | " + now.getHours() + ":" + now.getMinutes();
    let task = {
        "title": title,
        "date": date,
        "isDone": false,
    };
    tasks.push(task);
    storeTasks();
    fill();
}

// Event listener for Enter key in the input field
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (this.value.trim() !== '') {
            addTask(this.value);
            this.value = "";
        } else {
            window.alert("Enter a task first");
        }
    }
});

// Function to delete a task
function deleteTask(index) {
    let task = tasks[index];
    let isConfirmed = confirm("Do you want to delete this task: " + task.title);
    if (isConfirmed) {
        tasks.splice(index, 1);
        storeTasks();
        fill();
    }
}

// Function to update a task
function updateTask(index) {
    let task = tasks[index];
    let newTitle = prompt('Enter your edit', task.title);
    if (newTitle.trim() !== "") {
        task.title = newTitle;
        storeTasks();
        fill();
    }
}

// Function to mark a task as done or not done
function doneOrNot(index) {
    let task = tasks[index];
    task.isDone = !task.isDone;
    storeTasks();
    fill();
}

// Event listener for "Complete All" button
completeAll.addEventListener("click", function () {
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        if (!task.isDone) {
            task.isDone = true;
        }
    }
    storeTasks();
    fill();
});

// Event listener for "Delete Completed" button
deleteComplete.addEventListener("click", function () {
    for (let index = tasks.length - 1; index >= 0; index--) {
        const task = tasks[index];
        if (task.isDone) {
            tasks.splice(index, 1);
        }
    }
    storeTasks();
    fill();
});

// Load tasks from local storage on page load
getTasks();
fill();