document.addEventListener('DOMContentLoaded', function () {
    const addTaskForm = document.getElementById('add-task-form');
    const taskUl = document.getElementById('task-ul');
    const completedUl = document.getElementById('completed-ul');

    addTaskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const taskTitle = document.getElementById('task-title').value;
        const taskDescription = document.getElementById('task-description').value;

        if (taskTitle && taskDescription) {
            const task = {
                title: taskTitle,
                description: taskDescription,
                dateCreated: new Date(),
                completed: false,
            };

            addTaskToList(task, taskUl);
            addTaskForm.reset();
        }
    });

    function addTaskToList(task, list) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.title}: ${task.description}</span>
            <span>
                <button class="complete-button">Complete</button>
                <button class="delete-button">&times;</button>
            </span>
        `;

        const completeButton = li.querySelector('.complete-button');
        completeButton.addEventListener('click', function () {
            completeTask(task, li);
        });

        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            deleteTask(task, li);
        });

        list.appendChild(li);
    }

    function completeTask(task, listItem) {
        task.completed = true;
        listItem.classList.add('completed-task');
        completedUl.appendChild(listItem);
    }

    function deleteTask(task, listItem) {
        if (task.completed) {
            completedUl.removeChild(listItem);
        } else {
            taskUl.removeChild(listItem);
        }
    }
});
