const input = document.querySelector('#textinp'),
    addBtn = document.querySelector('#btn'),
    list = document.querySelector('#list'),
    delBtn = document.querySelector('.delbtn');

// add todo to list 
addBtn.addEventListener('click',()=>{
    if(input.value !== ''){
        addTodoFunc(input.value);
        input.value = '';
    }else{
        alert('Add a todo');
    }
    
});


function addTodoFunc(val){
    const li = createTodoFunc(val);
    list.appendChild(li);
    console.log(li);
};


function createTodoFunc(val){
    const li = document.createElement('li');
    li.textContent = val;
    const span = document.createElement('span');
    span.textContent = 'X';
    span.className = 'delbtn';
    li.appendChild(span);
    return li;
};


document.addEventListener('click',e=>{
    if(e.target.className === 'delbtn'){
        e.target.parentElement.remove();
    }
});