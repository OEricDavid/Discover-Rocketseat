// getElementById() (element)
/*
const element1 = document.getElementById("blog-title");
console.log(element1);

// getElementByClassName() (html collection não pode ser feito um forEach)
const element2 = document.getElementsByClassName("one");
console.log(element2);

//getElementByTagName() (html collection)
const element3 = document.getElementsByTagName("h1");
console.log(element3);

//querySelector() (element)
const element4 = document.querySelector("");
console.log(element4);

//querySelectorAll() (nodelist pode ser feito um forEach)
const elemement5 = document.querySelectorAll("#one");
console.log(elemement5);
*/
// manipulando conteudo
// textContent
/*
const element = document.querySelector("h1");
element.textContent += " Olá devs!";
console.log(element.textContent);
*/
// innertext
/*
const element = document.querySelector("h1");
element.innerText = "Olá devs!";

 inner html
const element = document.querySelector("h1");
element.innerHTML = "Olá devs! <small>!!!</small>";
*/
// Manipulando conteudo
// value
/*
const element = document.querySelector("input");
console.log(element.value);
element.value = "Valor inserido";
*/

// atributos
/*
const header = document.querySelector("header");
header.setAttribute("id", "header");

const headerID = document.querySelector("#header");

console.log(headerID.getAttribute("class"));

header.removeAttribute("id");
header.removeAttribute('class');
*/

// Alterando estilos
/*
const element = document.querySelector("body");

element.style.backgroundColor = "#f9f3D2";
*/
// classList
/*
const element = document.querySelector("body");

element.classList.add("active", "green");
console.log(element.classList);
//element.classList.remove("active");
element.classList.toggle("active");
*/

// navegando pelos elementos
// parentNode parentElement
/*
const body = document.querySelector("body");

console.log(body.parentElement);

const element = document.querySelector("h1");
console.log(element.parentElement);
*/

// childNodes children
/*
const el = document.querySelector("body");

console.log(el.childNodes);
console.log(el.children);
// firstchild
console.log(el.firstChild);
console.log(el.firstElementChild);
// lastchild
console.log(el.lastChild);
console.log(el.lastElementChild);
*/
// nextSibling
const el = document.querySelector("header");
console.log(el.previousSibling);
console.log(el.previousElementSibling);
console.log(el.nextSibling);
console.log(el.nextElementSibling);
