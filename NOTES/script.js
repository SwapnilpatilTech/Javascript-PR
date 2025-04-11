document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
  
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
  
  
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const task = { text: taskText, completed: false };
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        addTaskToDOM(task);
        taskInput.value = '';
      }
    });
  

    function addTaskToDOM(task) {
      const li = document.createElement('li');
      li.textContent = task.text;
      if (task.completed) {
        li.classList.add('completed');
      }
  
    
      li.addEventListener('click', () => {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        li.classList.toggle('completed');
      });
  
      // Delete task
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskList.removeChild(li);
      });

      function editTask(task, li) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = task.text;
        input.classList.add('edit-input');
      
        // Replace the task text with the input field
        li.innerHTML = '';
        li.appendChild(input);
        input.focus();
      
        // // Save the updated task text on Enter key press
        // input.addEventListener('keydown', (e) => {
        //   if (e.key === 'Enter') {
        //     saveEditedTask(task, li, input.value);
        //   }
        // });
      
        // Save the updated task text when input loses focus
        // input.addEventListener('blur', () => {
        //   saveEditedTask(task, li, input.value);
        // });
      }
      function saveEditedTask(task, li, newText) {
        task.text = newText.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        li.innerHTML = '';
        addTaskToDOM(task);
      }
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit-btn');
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        editTask(task, li);
      });
  
      li.appendChild(deleteBtn);
      li.appendChild(editBtn);
      taskList.appendChild(li);
    }
  });
  