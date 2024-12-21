const container = document.querySelector("#container");
const para = document.createElement("p");
para.classList.toggle("para");
para.textContent = "Hi I'm Red";
para.style.color = "red";
container.appendChild(para);


const headingThree = document.createElement("h3");
headingThree.classList.toggle("headingThree");
headingThree.textContent = "Hi I'm a Blue h3";
headingThree.style.color = "blue";
container.appendChild(headingThree);

const anotherDiv = document.createElement("div");
anotherDiv.classList.toggle("anotherDiv");
anotherDiv.style.backgroundColor = "pink";
anotherDiv.style.borderColor = "black";
anotherDiv.style.borderWidth = "2px";
anotherDiv.style.borderStyle = "solid";
container.appendChild(anotherDiv);

const child1 = document.createElement("h1");
child1.classList.toggle("child1");
child1.textContent = "I'm in a div";
anotherDiv.appendChild(child1);

const child2 = document.createElement("p");
child2.classList.toggle("child2");
child2.textContent = "ME TOO!";
anotherDiv.appendChild(child2);


function alertFunction(msg) {
    alert(msg);
  }
  const buttons = document.querySelectorAll("button");
  btn.addEventListener("click", function() {
    alertFunction("You clicked the button!");
  });
  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  
  // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      alert(button.id);
    });
  });
  
