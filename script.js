let textDiv = document.getElementById("text").innerHTML;
let passwordDiv = document.getElementById("password");

let reg = /(?:password|пароль): <strong>[0-9a-z]*<\/strong>/g;
passwordDiv.innerHTML = textDiv.match(reg);
