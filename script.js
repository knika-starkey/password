let textDiv = document.getElementById("text").innerHTML;
let passwordDiv = document.getElementById("password");

let reg = /(?:password|пароль): <b>[0-9a-z]*<\/b>/g;
passwordDiv.innerHTML = textDiv.match(reg);
