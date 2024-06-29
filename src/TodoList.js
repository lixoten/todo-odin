import Todo from './Todo.js';

class TodoList {
    constructor() {
        this.todos = []
        this.idCounter = 0;
    }

    get todoList() {
        return this.todos;
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);

        console.log(123);
    }

    addTodo(name) {
        this.idCounter++;
        const newTodo = new Todo(this.idCounter, name);
        this.todos.push(newTodo);
        return this.idCounter;
    }
}

export default TodoList;