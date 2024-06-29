//import Todo from './Todo.js';
import { createTodo } from './Todo.js';

class Project {
    constructor(id, name) {
        this.id =  id,
        this.name =  name,

        this.todos = [],
        this.todoIdCounter = 0;
    }

    // todo, not yet used
    get todoList() {
        return this.todos;
    }

    // todo, not yet used
    removeTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {
            throw new Error(`Todo with id ${id} does not exist.`);
        }

        this.todos = this.todos.filter(todo => todo.id !== id);

        console.log(123);
    }

    // todo, not yet used
    addTodo(name) {
        this.todoIdCounter++;
        // SRP change
        // const newTodo = new Todo(this.todoIdCounter, name);
        const newTodo = createTodo(this.todoIdCounter, name);

        this.todos.push(newTodo);
        return this.todoIdCounter;
    }
}

function createProject(id, name) {
    return new Project(id, name);
}

export { Project, createProject };