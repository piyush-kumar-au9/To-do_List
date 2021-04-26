var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var myNodeList = document.getElementsByTagName("li");
var closeBtns = document.getElementsByClassName("close");
var i;

for(i=0; i<nodeListLength(); i++){
	createCloseButton(i);
}

function inputLength() {
	return input.value.length;
}

// to get the total length of the list items
function nodeListLength(){
	return myNodeList.length;
}
function closeBtnsLength(){
	return closeBtns.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createCloseButton(nodeListLength() - 1);
}

// to append close buttons with the list items
function createCloseButton(index){
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodeList[index].appendChild(span);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// for toggling done class on and off
function itemCancel(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}
}

// for deleting items
function deleteItems(){
	var parentElement = this.parentElement;
	parentElement.style.display = "none";
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", itemCancel);

for(i=0; i<closeBtnsLength(); i++){
	closeBtns[i].addEventListener("click", deleteItems);
}