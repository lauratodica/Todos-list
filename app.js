const addItem = document.querySelector('.add');
const valueTodo = document.querySelector('.add input');
const ulList = document.querySelector('.todos');
const searchItem = document.querySelector('.search input');

const addToList = todos => {
    if(todos.length) {
        ulList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todos}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `
    };

};


const filteredSearch = term => {
    Array.from(ulList.children)
        .filter(todos => !todos.textContent.includes(term))
        .forEach(todos => todos.classList.add('filtered'));

    Array.from(ulList.children)
        .filter(todos => todos.textContent.includes(term))
        .forEach(todos => todos.classList.remove('filtered'));
};

addItem.addEventListener('submit', e => {
    e.preventDefault();
    const todos = valueTodo.value.trim();
    addToList(todos);
    addItem.reset();
});


ulList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }; 
});


searchItem.addEventListener('keyup', () => {
    const term = searchItem.value.trim();
    filteredSearch(term);
});