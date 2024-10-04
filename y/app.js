var list = document.getElementById("list");

function addtodo(){
    var todo_item = document.getElementById("todo_item");

// create list item

var li = document.createElement("li");
li.appendChild(document.createTextNode(todo_item.value))

// delete button

var deleteButton = document.createElement("button");

var deltext = document.createTextNode('Delete');

deleteButton.setAttribute("onclick","deleteitems(this)")

deleteButton.appendChild(deltext);

li.appendChild(deleteButton);

//create edit button

var editbtn = document.createElement('button');
var edittxt = document.createTextNode("Edit")
editbtn.setAttribute("onclick","edititems(this)")

editbtn.appendChild(edittxt);
li.appendChild(editbtn);
console.log(li);


list.appendChild(li);
todo_item.value = "";

}

function deleteitems(e){
    e.parentNode.remove()
}


function edititems(e){

    var value = e.parentNode.firstChild.nodeValue;
    var editedvalue = prompt("Enter Edit Value",value);
    e.parentNode.firstChild.nodeValue=editedvalue;

}

function deleteall(){
    list.innerHTML="";
}