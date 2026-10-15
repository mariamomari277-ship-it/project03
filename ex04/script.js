
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskCount = document.getElementById("taskCount");
const taskList = document.getElementById("taskList");

function updateTaskCount() {
    taskCount.textContent = taskList.children.length;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
   
    }

    const li = document.createElement("li");

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    taskTextElement.addEventListener("click", function () {
        taskTextElement.classList.add("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    li.appendChild(taskTextElement);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    updateTaskCount();
    taskInput.value = "";
}

addButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
