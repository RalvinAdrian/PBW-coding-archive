class Todo {
    constructor(title, todoList) {
        this.title = title;
        this.todoList = todoList;
    }

    validate() {
        if (this.title.length < 4 || this.todoList.length < 1 ||
            // trim array dan check jika string kosong maka 
            // validasi gagal
            this.todoList.some((todo) => todo.trim() === "")) {
            return false;
        }
        else {
            return true;
        }
    }

    toJSON() {
        return JSON.stringify({
            title: this.title,
            todo: this.todoList,
        });
    }
}