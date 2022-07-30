var firstName = prompt("Ismingiz nima?").trim();
var lastName = prompt("Familiyangiz nima?").trim();
var fatherName = prompt("Otangizni ismi nima?").trim();
var birthDay = prompt("Tug'ilgan kuningiz qachon?").trim();
var telNumber = prompt("Telefon raqamingizni kiriting?").trim();
var email = prompt("Elektron pochta manzilingizni kiriting?").trim();
var profession = prompt("Kasbingiz nima?").trim();


var paragraph = document.createElement("p");
paragraph.textContent = `Xush kelibsiz, ${firstName} ${lastName}!`;
document.body.appendChild(paragraph);

var paragraph2 = document.createElement("p");
paragraph2.textContent = `Otasining ismi ${fatherName}.`;
document.body.appendChild(paragraph2);

var paragraph3  = document.createElement("p");
paragraph3.textContent = `Tug'ilgan kuni: ${birthDay}.`;
document.body.appendChild(paragraph3);

var paragraph4  = document.createElement("p");
paragraph4.textContent = `Telefon raqami: ${telNumber}`;
document.body.appendChild(paragraph4);

var paragraph5  = document.createElement("p");
paragraph5.textContent = `Email: @${email}`;
document.body.appendChild(paragraph5);

var paragraph6  = document.createElement("p");
paragraph6.textContent = `Kasbi: ${profession}`;
document.body.appendChild(paragraph6);