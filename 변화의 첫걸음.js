let inputbox = document.getElementById('inputbox');
let addButton = document.getElementById('addButton');
let ToDoList= document.getElementById('ToDoList');

addButton.addEventListener('click',function(){
  var list=document.createElement('li');
  list.innerText=inputbox.value;
  ToDoList.appendChild(list);
  inputbox.value="";
  list.addEventListener('click',function(){
    list.style.textDecoration="line-through";
  })
  list.addEventListener('dbclick',function(){
    ToDoList.removeChild(list);
  })
})
