
var newElement = document.createElement("h2");

var newText = document.createTextNode("Add by insertAdjacentElement.");

newElement.appendChild(newText);

var target = document.getElementById("practice");

target.insertAdjacentElement("afterbegin",newElement);






var test = document.getElementById("practice");
var newElement = "<h2>Add by insertAdjacentHTML. </h2>"
// test.insertAdjacentHTML("afterbegin",newElement);
// test.insertAdjacentHTML("beforebegin",newElement);
// test.insertAdjacentHTML("afterend",newElement);
test.insertAdjacentHTML("beforeend",newElement);







