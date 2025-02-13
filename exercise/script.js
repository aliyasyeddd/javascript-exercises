console.log("a");


const container = document.querySelector("#container");

const divContainer = document.createElement("div")
divContainer.classList.add("div-container");
divContainer.setAttribute("style","border: 2px solid black; background-color: pink;" )

const divHeading = document.createElement("h1");
divHeading.textContent = "I'm in a div";

const para = document.createElement("p");
para.textContent = "ME TOO!";

divContainer.appendChild(divHeading);
divContainer.appendChild(para);
container.appendChild(divContainer);

const heading = document.createElement("h3");
heading.classList.add("heading");
heading.textContent = "I'm a blue h3!";
heading.style.color = "blue";

container.appendChild(heading);

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const text = document.createElement("p");
text.classList.add("description");
text.textContent = "Hey I'm red!";
text.setAttribute("style", "color: red");

container.appendChild(text);


