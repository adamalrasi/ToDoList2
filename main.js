let btn = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer");
let input = document.getElementById("inputField");

btn.addEventListener("click", function () {
  let p = document.createElement("p");
  p.classList.add("paragraph-styling");
  p.innerText = input.value;
  container.appendChild(p);
  input.value = "";
  p.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
  });
  p.addEventListener("dblclick", function () {
    container.removeChild(p);
  });
});
