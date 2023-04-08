function tambah(parentSelector) {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "todoItem"
    newInput.classList.add('item');
    newInput.style.gridColumnStart = "2";
    parentSelector.appendChild(newInput);
}

document.addEventListener("DOMContentLoaded", function () {
    const inputTitle = document.querySelector('#titleInput')

    // Selector untuk elemen form
    // const mainForm = document.querySelector()
    const form = document.querySelector('#main-form');
    const createButton = document.querySelector('#create');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log(Array.from(formData));
    }
    );

    const addButton = document.querySelector('#addItem');
    const itemParentNode = document.querySelector('#itemParentNode')

    inputTitle.addEventListener('input', () => {
        if (inputTitle.value.length < 4) {
            inputTitle.style = 'background-color:Red';
        }
        else {
            inputTitle.style = 'background-color:none';
        }
    })

    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        tambah(itemParentNode);
    });

    createButton.addEventListener("click", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const title = formData.get("Title");
        const todoList = Array.from(formData.getAll("todoItem"));

        const todo = new Todo(title, todoList);
        if (todo.validate() === false) {
            console.log("Validation failed");
            return Promise.reject("Validation failed");
        }
        console.log("processing...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(todo.toJSON());
    });
})