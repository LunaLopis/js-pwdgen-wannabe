let name = prompt('come ti chiami?');
document.getElementById('greetings').innerHTML = name;


let surname = prompt('qual è il tuo cognome?');
document.getElementById('greetings').innerHTML = surname;

let color = prompt('qual è il tuo colore preferito?');
document.getElementById('greetings').innerHTML = color;

let newstring = `${name}${surname}${color}21`;
document.getElementById('greetings').innerHTML = newstring;




