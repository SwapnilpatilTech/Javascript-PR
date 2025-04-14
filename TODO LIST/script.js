let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

// Load tasks from localStorage
window.onload = function () {
  if (localStorage.getItem("tasks")) {
    taskList.innerHTML = localStorage.getItem("tasks");
    addEventsToButtons();
  }
};

function addTask() {
  if (taskInput.value.trim() === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
    <span>${taskInput.value}</span>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
  addEventsToButtons();
}

function addEventsToButtons() {
  document.querySelectorAll(".edit").forEach(btn => {
    btn.onclick = function () {
      let span = this.parentElement.previousElementSibling;
      let newInput = document.createElement("input");
      newInput.type = "text";
      newInput.value = span.textContent;
      this.parentElement.parentElement.insertBefore(newInput, span);
      this.parentElement.parentElement.removeChild(span);
      this.textContent = "Save";
      this.className = "save";
    };
  });

  document.querySelectorAll(".save").forEach(btn => {
    btn.onclick = function () {
      let input = this.parentElement.previousElementSibling;
      let span = document.createElement("span");
      span.textContent = input.value;
      this.parentElement.parentElement.insertBefore(span, input);
      this.parentElement.parentElement.removeChild(input);
      this.textContent = "Edit";
      this.className = "edit";
      saveTasks();
      addEventsToButtons();
    };
  });

  document.querySelectorAll(".delete").forEach(btn => {
    btn.onclick = function () {
      this.parentElement.parentElement.remove();
      saveTasks();
    };
  });
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}
