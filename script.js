var div = document.getElementById("hello");
div.style.backgroundColor = "purple"
div.style.height="100px";
div.style.padding="50px 50px 50px 10px";
div.style.borderRadius="20px";
div.style.boxShadow="black 5px 5px 10px";
var p = document.createElement("p");
var text = "javescript and html are awesome";
p.innerHTML = text;
p.style.fontStyle="italic";
div.appendChild(p);