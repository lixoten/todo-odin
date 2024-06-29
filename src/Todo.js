export default class Todo {
    constructor(id, name) {
        this.id = id;
        this._name = name;
    }

    get name() {
        return this._name;
    }

    // editTodo(newName) {
    //     if (newName!== undefined) {
    //         this.name = newName;
    //     }
    // }
}
