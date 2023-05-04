var addTodo = document.getElementById('todoform');
var todoItems = document.getElementById('todoList');
var todo = document.getElementById('todo');
var todoHeading = document.getElementById('todoHeading')
var count = 0;
addTodo.addEventListener('submit', (e) => {

    e.preventDefault();
    var li = document.createElement('li')
    var button = document.createElement('button')
    var editButton = document.createElement('button')

    if (todo.value !== '') {

        li.setAttribute('class', 'list-group-item')
        li.setAttribute('id', `todo${count}`)
        ++count;

        button.setAttribute('class', 'btn btn-danger right')
        button.setAttribute('onclick', 'deleteTodo(this)')
        button.appendChild(document.createTextNode('Delete'))

        editButton.setAttribute('class', 'btn btn-default default right')
        editButton.setAttribute('onclick', 'editTodo(this)')
        editButton.setAttribute('data-toggle', 'modal')
        editButton.setAttribute('data-target', '#centralModalSuccess')
        editButton.appendChild(document.createTextNode('Edit'))

        li.appendChild(document.createTextNode(todo.value))
        li.appendChild(button)
        li.appendChild(editButton)
        todoItems.appendChild(li)
        todo.value = '';

        todoHeading.style.display = 'block';

    }
})


deleteAllTodo = () => {
    todoItems.innerHTML = '';
    todoHeading.style.display = 'none';
}
deleteTodo = (e) => {
    e.parentNode.remove();
}

editTodo = (e = this) => {
    var updateTodoValue = document.getElementById('updateTodoValue')
    updateTodoValue.value = e.parentNode.firstChild.nodeValue
    localStorage.setItem('id', e.parentNode.id);
}
function updatetodo() {
    var id = localStorage.getItem('id');
    document.getElementById(id).firstChild.nodeValue = updateTodoValue.value;
    document.getElementById(id).firstChild.nodeValue.style.color = 'green';
    localStorage.removeItem('id')
}