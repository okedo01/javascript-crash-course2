const addForm = document.querySelector('.add');
const listTodos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const addToHTML = (todo) => {
    const html = `
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
    
    if(todo.length) {
        addToHTML(todo);
        addForm.reset();
    }
    
})

listTodos.addEventListener('click', event => {
    const liTag = event.target.classList.contains('delete');
    if(liTag){
        event.target.parentElement.remove();
    }
})

const filteredTodos = (searchItem) => {

    Array.from(listTodos.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(searchItem))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(listTodos.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(searchItem))
        .forEach((todo) => todo.classList.remove('filtered'))
    
}

search.addEventListener('keyup', () => {
    const searchItem = search.value.trim().toLowerCase();
    filteredTodos(searchItem);
})
