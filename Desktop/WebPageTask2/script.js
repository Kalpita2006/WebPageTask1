document.getElementById("contactForm").addEventListener("submit", function(event) {

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let message = document.getElementById("message").value.trim();

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let messageError = document.getElementById("messageError");

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let phonePattern = /^[0-9]{10}$/;

nameError.textContent = "";
emailError.textContent = "";
phoneError.textContent = "";
messageError.textContent = "";

let isValid = true;


// Name validation
if(name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
}


// Email validation
if(email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
}
else if(!email.match(emailPattern)) {
    emailError.textContent = "Enter valid email format";
    isValid = false;
}


// Phone validation
if(phone === "") {
    phoneError.textContent = "Phone number is required";
    isValid = false;
}
else if(!phone.match(phonePattern)) {
    phoneError.textContent = "Enter 10 digit phone number";
    isValid = false;
}


// Message validation
if(message === "") {
    messageError.textContent = "Message cannot be empty";
    isValid = false;
}


if(!isValid) {
    event.preventDefault();
}

});

function addTask() {

let taskInput = document.getElementById("taskInput");

let taskValue = taskInput.value.trim();

if(taskValue === "") {

alert("Please enter a task");

return;

}

let li = document.createElement("li");

li.textContent = taskValue;

let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.classList.add("deleteBtn");


deleteBtn.onclick = function () {

li.remove();

};


li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);

taskInput.value = "";

}

function addImage() {

let imageInput = document.getElementById("imageInput");

let imageURL = imageInput.value.trim();

if(imageURL === "") {

alert("Please enter image URL");

return;

}

let imageBox = document.createElement("div");

imageBox.classList.add("image-box");


let img = document.createElement("img");

img.src = imageURL;


let deleteBtn = document.createElement("button");

deleteBtn.textContent = "X";

deleteBtn.classList.add("delete-btn");


deleteBtn.onclick = function() {

imageBox.remove();

};


imageBox.appendChild(img);

imageBox.appendChild(deleteBtn);


document.getElementById("gallery").appendChild(imageBox);


imageInput.value = "";

}