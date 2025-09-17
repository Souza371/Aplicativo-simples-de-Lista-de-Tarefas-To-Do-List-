document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('task-list');

    function createTaskElement(taskText, completed = false) {
        const li = document.createElement('li');
        li.className = 'task-item' + (completed ? ' completed' : '');

        const span = document.createElement('span');
        span.textContent = taskText;

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'action-btn complete';
        completeBtn.title = 'Concluir';
        completeBtn.innerHTML = completed ? '✔️' : '✅';
        completeBtn.onclick = function () {
            li.classList.toggle('completed');
            completeBtn.innerHTML = li.classList.contains('completed') ? '✔️' : '✅';
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn delete';
        deleteBtn.title = 'Remover';
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.onclick = function () {
            li.remove();
        };

        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(span);
        li.appendChild(actions);
        return li;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText) {
            const taskEl = createTaskElement(taskText);
            list.appendChild(taskEl);
            input.value = '';
            input.focus();
        }
    });
});
