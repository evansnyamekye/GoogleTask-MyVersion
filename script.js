let todo1 = 99; 
let todo2 = 'wash cloth'; 
let todo3 = 'click me'; 
let todo4 = 'Attand standups'; 

function myfun (todolist) {
    const element = document.createElement('div'); 
    element.innerHTML = todolist; 
    document.body.appendChild(element)
}

myfun(todo1); 
myfun(todo2); 
myfun(todo3); 
myfun(todo4);