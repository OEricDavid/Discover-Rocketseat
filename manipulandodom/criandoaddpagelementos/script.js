// Criando e adiconando elementos

// createElement
const div = document.createElement("div");
div.innerText = "Olá devs!";
const script = body.querySelector("script");
/*
// append prepend
const body = document.querySelector("body");

body.append(div);
//body.prepend(div);
*/
// insertBefore

body.insertBefore(div, script);
