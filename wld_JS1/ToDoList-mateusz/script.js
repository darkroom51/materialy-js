var todo1 = new ToDoList('#toDoList1', 'toDoList1')

document.querySelector('#fancyButton')
    .addEventListener('click', function () {
        todo1.addTask('fancy task')
    })

var todo2 = new ToDoList('#toDoList2', 'toDoList2')
