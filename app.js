// Selectors
const taskInput = document.querySelector('#taskInput');
const taskInputBtn = document.querySelector('#taskInputBtn');
const taskCtn = document.querySelector('#tasks');
// Event listener to add new task
taskInputBtn.addEventListener('click', () => {
    // If input is empty return
    if(taskInput.value == ''){return};
    // Creating new task and adding classes
    const newTask = document.createElement('p');
    newTask.classList.add('task-item');
    newTask.textContent = taskInput.value;
    // Appending task to page container
    taskCtn.appendChild(newTask);
    // Reseting input value
    taskInput.value = '';
    // Adding event listener to task to add complete class
    newTask.addEventListener('click', () => {
        newTask.classList.toggle('line-through');
    });
    // Adding event listener to task to remove task
    newTask.addEventListener('dblclick', () => {
        taskCtn.removeChild(newTask);
    });
});