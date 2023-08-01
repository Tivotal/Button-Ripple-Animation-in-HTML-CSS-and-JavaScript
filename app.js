/* Created by Tivotal */

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //preventing default behaviour
    e.preventDefault();

    //creating new span tag
    let span = document.createElement("span");

    //adding class name to span tag
    span.classList.add("overlay");

    //appending span tag into button
    e.target.appendChild(span);

    //getting exact position where clicked on button
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    //changing overlay position according to clicked position
    span.style.left = x + "px";
    span.style.top = y + "px";
  });
});
