document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');

    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const listItem = document.createElement('li');

            const todoSpan = document.createElement('span');
            todoSpan.textContent = todoText;
            todoSpan.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });

            listItem.appendChild(todoSpan);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            todoInput.value = '';
        }
    }
});
