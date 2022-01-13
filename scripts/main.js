const input = document.querySelector('#textinp'),
    addBtn = document.querySelector('#btn'),
    list = document.querySelector('#list'),
    delBtn = document.querySelector('.delbtn');

// add todo to list 
addBtn.addEventListener('click', () => {
    if (input.value !== '') {
        addTodoFunc(input.value);
        input.value = '';
    } else {
        alert('Add a todo');
    }

});


function addTodoFunc(val) {
    const li = createTodoFunc(val);
    list.appendChild(li);
    addToLocal(val);
};


function createTodoFunc(val) {
    const li = document.createElement('li');
    li.textContent = val;
    const span = document.createElement('span');
    span.textContent = 'X';
    span.className = 'delbtn';
    li.appendChild(span);
    return li;
};


document.addEventListener('click', e => {
    if (e.target.className === 'delbtn') {
        removeFromLocal(e.target.parentElement.textContent)
        e.target.parentElement.remove();
    }
});

// adding todos to localstorage
const todoArr = [];
function addToLocal(val) {
    todoArr.push(val);
    localStorage.setItem('todo', JSON.stringify(todoArr));
};

// removing todos to localstorage
function removeFromLocal(val) {
    val = val.slice(0, -1);
    let todoArr = JSON.parse(localStorage.getItem('todo'));
    todoArr = todoArr.filter(i => i !== val);
    localStorage.setItem('todo', JSON.stringify(todoArr));
};

//get todos from localstorage
document.addEventListener('DOMContentLoaded',()=>{
    const todoArr = JSON.parse(localStorage.getItem('todo'));
    if(todoArr !== null){
        todoArr.forEach(i=> addTodoFunc(i));
    }
});
