
// creation variable du paragraphe
let text = document.getElementById("text");
// creation variable pour quand au click on appelle une fonction
let pink = document.getElementById ("pink");
pink.addEventListener('click', changePink);

let blue = document.getElementById('blue');
blue.addEventListener('click', changeBlue );

let purple = document.getElementById("purple");
purple.addEventListener('click',changePurple);

let bold = document.getElementById("bold");
bold.addEventListener('click',changeBold);

let italic = document.getElementById("italic");
italic.addEventListener('click', changeItalic);
//  creation des fonctions
function changePink (){
    text.style.color= "pink";
}
function changeBlue (){
    text.style.color = "blue";
}
function changePurple(){
    text.style.color = "purple";
}
function changeBold(){
    text.style.fontWeight="bold";
}
function changeItalic (){
    text.style.fontStyle = "italic";
}