const getFlagValue = require("./parte1");

console.log(`Olá ${getFlagValue("--name")}. ${getFlagValue("--greeting")}`);
