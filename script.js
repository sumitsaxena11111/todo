document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#new-task').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete" onclick="deleteTask(this)">Delete</button>`;
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
