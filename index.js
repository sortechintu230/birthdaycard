const audio = new Audio('images/HBD.mp3');
var btn = document.getElementById("btn");
var box = document.querySelector(".blank-bg");
var birthdcontent = document.querySelector(".birthday-content");
var poppers = document.querySelector('img');
btn.addEventListener('click',()=>{
    box.classList.toggle('hide');
    birthdcontent.classList.toggle('show');
    poppers.classList.toggle('show');
    audio.play();
});