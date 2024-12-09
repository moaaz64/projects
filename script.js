let nav = document.getElementById('navbar');
let button = document.getElementById('button');
let button_2 = document.getElementById('button_2');
button_2.style.display = "none";

button_2.onclick = function(){
  nav.style.display="none";
  button_2.style.display = "none";
  button.style.display = "";
}

button.onclick = function(){
  nav.style.display="block";
  button_2.style.display = "";
  button.style.display = "none";
}
