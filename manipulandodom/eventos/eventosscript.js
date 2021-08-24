// Eventos
/*
function print() {
  console.log("print");
}

const input = document.querySelector("input");

input.onkeyup = function () {
  console.log("rodei");
};

const h1 = document.querySelector("h1");

h1.addEventListener("click", print);
//h1.addEventListener('mouseover', print);

function print() {
  console.log("click");
}
*/

// argumeto event

const input = document.querySelector("input");

input.onkeyup = function (event) {
  console.log(event.currentTarget);
};
