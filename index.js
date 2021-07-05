// Write your code here!
let main = document.querySelector('main#main');
main.remove();
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
document.querySelector('h1#victory').innerHTML= "is the champion";
