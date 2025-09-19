document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('task-list');

    // Função para salvar tarefas no localStorage
    function saveTasks() {
        const tasks = [];
        const taskItems = list.querySelectorAll('.task-item');
        taskItems.forEach(item => {
            const text = item.querySelector('span').textContent;
            const completed = item.classList.contains('completed');
            tasks.push({ text, completed });
        });
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }

    // Função para carregar tarefas do localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem('todoTasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            tasks.forEach(task => {
                const taskEl = createTaskElement(task.text, task.completed);
                list.appendChild(taskEl);
            });
        }
    }

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
            saveTasks(); // Salva automaticamente
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn delete';
        deleteBtn.title = 'Remover';
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.onclick = function () {
            li.remove();
            saveTasks(); // Salva automaticamente
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
            saveTasks(); // Salva automaticamente
        }
    });

    // Carrega as tarefas salvas quando a página é carregada
    loadTasks();
});
