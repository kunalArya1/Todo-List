function one(){
    const button = document.querySelector(".submit");
    const todoList = document.querySelector(".todolist"); 
    
    const todonr = document.querySelector(".todo-nr b");
    
    const items = todoList.children;
    button.addEventListener("click",function(){
        const newItem = document.createElement("li");
        newItem.classList.add("items");
        newItem.innerHTML=`Item ${items.length+1}`;
        todoList.appendChild(newItem);
        todonr.innerText = items.length;
    })
    
}

// one();

const button = document.querySelector(".submit");
const body = document.querySelector("body");
const div = document.createElement("div");
div.innerHTML="<h1>kunal</h1>";
div.classList.toggle("toggleNav");
body.appendChild(div);


button.addEventListener("click",function(){
    div.classList.toggle("toggleNav");
    body.appendChild(div);
    
})
