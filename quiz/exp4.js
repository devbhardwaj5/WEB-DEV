// ===== Dynamic To-Do List JavaScript =====

// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

// Update Task Counter
function updateCounter() {
    const tasks = document.querySelectorAll("#taskList li");
    const completedTasks = document.querySelectorAll(".completed");

    pendingCount.textContent = "Pending: " + (tasks.length - completedTasks.length);
    completedCount.textContent = "Completed: " + completedTasks.length;
}

// Add Task Function
function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Task text span
    const span = document.createElement("span");
    span.textContent = taskText;

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("task-buttons");
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    // Append elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonDiv);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Checkbox functionality
    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed");
        updateCounter();
    });

    // Delete functionality
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
        updateCounter();
    });

    // Edit functionality
    editBtn.addEventListener("click", function () {
        const newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    });

    updateCounter();
}

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

// Add task on Enter key press
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});