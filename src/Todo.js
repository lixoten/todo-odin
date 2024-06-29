class Todo {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    get name() {
        return this._name;
    }

    // Todo
    // editProject(newName) {
    //     if (newName!== undefined) {
    //         this.name = newName;
    //     }
    // }
}

function createTodo(id, name) {
    return new Todo(id, name);
}

export default Todo;
export { createTodo };