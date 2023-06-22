let todo1 = 99; 
let todo2 = 'wash cloth'; 
let todo3 = 'click me'; 
let todo4 = 'Attand standups'; 

function myfun (todolist) {
    const element = document.createElement('div'); 
    element.innerHTML = todolist; 
    document.body.appendChild(element);
}

myfun(todo1); 
myfun(todo2); 
myfun(todo3); 
myfun(todo4);

let todo = ['mark', 'ama', 'food', 'yaw']; 
todo.push('evans'); 

todo.pop(); 

function greeting (firstname) {
    console.log('Hello ' + firstname);
}
greeting('evans'); 

function toUpper (str) {
    console.log(str.toUpperCase()); 
}
toUpper('evans'); 
