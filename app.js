const taskInput = document.querySelector('#taskInput');
const taskInputBtn = document.querySelector('#taskInputBtn');
const taskCtn = document.querySelector('#tasks');
taskInputBtn.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.classList.add('task-item');
    newTask.textContent = taskInput.value;
    taskCtn.appendChild(newTask);
})