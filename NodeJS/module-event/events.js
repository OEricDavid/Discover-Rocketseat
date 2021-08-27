const { EventEmitter } = require("events");
const ev = new EventEmitter();

ev.on("saySomething", (message) => {
  console.log("ouvi!", message);
});

ev.emit("saySomething", "Eric");
ev.emit("saySomething", "Bruno");
ev.emit("saySomething", "Lucas");
