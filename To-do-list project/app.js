const addForm = document.querySelector('.add');
const listTodos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const addToHTML = (todo) => {
    let html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa-solid fa-trash delete"></i>
        </li>
    `;
    listTodos.innerHTML += html;
}

addForm.addEventListener('submit', e => {

    e.preventDefault();
    
    const todo = addForm.add.value.trim();

    if(todo.length){
        addToHTML(todo);
        addForm.reset();
    }
})

listTodos.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

const filterTodos = (searchItem) => {

    Array.from(listTodos.children)
        .filter((todo) => {
            return !todo.textContent.toLocaleLowerCase().includes(searchItem);
        })
        .forEach((todo) => {
            return todo.classList.add('filtered');
        })

    Array.from(listTodos.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(searchItem))
        .forEach((todo) => todo.classList.remove('filtered'))
}

// keyup events
search.addEventListener('keyup', () => {
    const searchItem = search.value.trim().toLowerCase();
    filterTodos(searchItem);
})