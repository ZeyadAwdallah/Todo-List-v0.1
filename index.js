// Variables
const documentTasks = document.getElementById("tasks");
const input = document.getElementById("input");
const completeAll = document.getElementById("completeAll");
const deleteComplete = document.getElementById("deleteComplete");

const editModal = document.getElementById("editModal");
const editInput = document.getElementById("editInput");
const closeEditModal = document.getElementById("closeEditModal");
const saveEdit = document.getElementById("saveEdit");

const deleteModal = document.getElementById("deleteModal");
const deleteTaskText = document.getElementById("deleteTaskText");
const closeDeleteModal = document.getElementById("closeDeleteModal");
const confirmDelete = document.getElementById("confirmDelete");

let tasks = [];
let currentEditIndex = null;
let currentDeleteIndex = null;

// Storage Functions

// Store tasks in local storage
function storeTasks() {
    let taskString = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskString);
}

// Retrieve tasks from local storage
function getTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
        tasks = storedTasks;
    }
}

// UI/UX Functions

// Fill the task list with tasks
function fill() {
    documentTasks.innerHTML = "";
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        let content = `
            <div class="task" onclick="toggleTask(${index})">
                <div class="taskInfo">
                    <p class="${task.isDone ? "done" : ""}">${task.title}</p>
                    <span>${task.date}</span>
                </div>
                <div class="btns">
                    ${task.isDone ? `<button class="btn" id="notDone" onclick="doneOrNot(${index}, event)">Redo</button>` : `<button class="btn" id="done" onclick="doneOrNot(${index}, event)">Done</button>`}
                    <button class="btn" id="edit" onclick="openEditModal(${index}, event)">Edit</button>
                    <button class="btn" id="delete" onclick="openDeleteModal(${index}, event)">Delete</button>
                </div>
            </div>`;
        documentTasks.innerHTML += content;
    }
}

// Add a new task to the list
function addTask(title) {
    let now = new Date();
    // Format date as YYYY/MM/DD | HH:MM
    let date = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + " | " + now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');
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

// Open the delete confirmation modal
function openDeleteModal(index, event) {
    event.stopPropagation();
    currentDeleteIndex = index;
    let task = tasks[index];
    deleteTaskText.textContent = "Do you want to delete this task: " + task.title;
    deleteModal.style.display = "block";
}

// Delete a task from the list
function deleteTask() {
    tasks.splice(currentDeleteIndex, 1);
    storeTasks();
    fill();
    closeDeleteModal.click();
}

// Open the edit task modal
function openEditModal(index, event) {
    event.stopPropagation();
    currentEditIndex = index;
    let task = tasks[index];
    editInput.value = task.title;
    editModal.style.display = "block";
}

// Update an existing task
function updateTask() {
    let task = tasks[currentEditIndex];
    let newTitle = editInput.value.trim();
    if (newTitle !== "") {
        task.title = newTitle;
        storeTasks();
        fill();
        closeEditModal.click();
    }
}

// Toggle the done status of a task
function doneOrNot(index, event) {
    event.stopPropagation();
    let task = tasks[index];
    task.isDone = !task.isDone;
    storeTasks();
    fill();
}

// Toggle the done status of a task by clicking on it
function toggleTask(index) {
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

// Event listeners for modal buttons
closeEditModal.addEventListener("click", function () {
    editModal.style.display = "none";
});

saveEdit.addEventListener("click", updateTask);

closeDeleteModal.addEventListener("click", function () {
    deleteModal.style.display = "none";
});

confirmDelete.addEventListener("click", deleteTask);

// Load tasks from local storage on page load
getTasks();
fill();
