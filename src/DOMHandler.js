// DOMHandler.js
import ApplicationController from "./ApplicationController.js";

export default class DOMHandler {
    constructor() {
        this.elements = {
            addTodoButton: document.getElementById("add-todo-button"),
            addTodoContainer: document.getElementById("add-todo"),
            inputTodoName: document.getElementById("input-todo-name"),
            saveTodoButton: document.getElementById("save-todo"),
            cancelTodoButton: document.getElementById("cancel-todo"),

            todoList: document.getElementById("todo-list"),
            deleteItem: document.getElementById("todo-list"),
        }

        this.app = new ApplicationController();

        this.todoList = this.app.getTodos();

        for (const todo of this.todoList) {
            this.displayTodoInDom(todo.id, todo.name);
        }


        this.elements.addTodoButton.addEventListener("click", () => {
            this.elements.addTodoContainer.classList.toggle("show")
        });

        this.elements.cancelTodoButton.addEventListener("click", () => {
            this.elements.addTodoContainer.classList.toggle("show")
        })

        this.elements.saveTodoButton.addEventListener("click", () => {
            this.elements.addTodoContainer.classList.toggle("show")
            const todoName = this.elements.inputTodoName.value;
            const newId = this.app.addTodo(todoName)
            this.displayTodoInDom(newId, todoName);
        })


    }


    displayTodoInDom(todoId, todoName) {
        const listItem = document.createElement('li');
        listItem.textContent = todoName + todoId;
        this.elements.todoList.appendChild(listItem);

        const img1 = document.createElement('img');
        img1.classList.add("set-todo")
        img1.setAttribute("src", "../assets/images/option.png");
        listItem.appendChild(img1);

        const img2 = document.createElement('img');
        img2.classList.add("edit-todo")
        img2.setAttribute("src", "../assets/images/edit-text.png");
        listItem.appendChild(img2);

        const img3 = document.createElement('img');
        img3.classList.add("delete-todo")
        img3.setAttribute("src", "../assets/images/delete.png");
        listItem.appendChild(img3);

        img1.addEventListener("click", () => {
            console.log(`set control- ${todoId}`)
        })

        img2.addEventListener("click", () => {
            console.log(`Edit - ${todoId}`)
        })

        img3.addEventListener("click", () => {
            console.log(`Removed - ${todoId}`)
            listItem.remove();
            this.app.removeTodo(todoId)
        })
    }
}