const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (res, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver plaicações/serviçoes de forma fácil",
    },
    {
      title: "E",
      message: "ssencial para devenvolvimentos",
    },
    {
      title: "M",
      message: "uitas funcionalidades",
    },
    {
      title: "A",
      message: "bsolutamente incrível",
    },
    {
      title: "I",
      message: "nstalando EJS",
    },
    {
      title: "S",
      message: "implesente amazing",
    },
  ];

  const subtitle =
    "Uma linguagem de modelagem para criação de paginas html utilizando Javascript";
  res.render("pages/index", {
    qualidades: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function (res, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("rodando");
