// let list = document.createElement("ul");
// let span = document.createElement("span");
// let button = document.createElement("button");

// list.classList.toggle("list");
// span.classList.toggle("span");
// button.classList.toggle("button");


const button = document.querySelector("button");
button.addEventListener("click", addListItem);

const deleteButton = document.querySelector("li>button");

function addListItem(){
    let element = document.querySelector("#item");
    console.log(element.value)
    const parentList = document.querySelector("ul");
    var text = element.value;
    console.log(text);
    element.value = "";
    let list = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");

    list.appendChild(span);
    list.appendChild(button);
    span.textContent = text;
    button.textContent = "Delete";
    button.addEventListener("click", function(e){
        removeListItem(e.target);
     });

    parentList.appendChild(list);
    element.focus();
    
}

function removeListItem(e){
    e.parentElement.remove();
    var element = document.querySelector("#item");
    element.focus();
}