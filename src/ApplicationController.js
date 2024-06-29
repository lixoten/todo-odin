// ApplicationController.js
import TodoList from './TodoList.js';
import Todo from "./Todo.js";

class ApplicationController {
    constructor() {

        this.todoList = new TodoList();
        // Create Default todo and add it to TodoList Class
        this.todoList.addTodo('Default')

    }


    getTodos() {
        return this.todoList.todoList;
    }

    removeTodo(id) {
        this.todoList.removeTodo(id);
        console.log(this.todoList)
    }

    addTodo(name) {
        return this.todoList.addTodo(name)
    }

}

export default ApplicationController;