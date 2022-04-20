document.addEventListener("DOMContentLoaded", (event) =>  {

var toggleMenu= document.getElementById("toggleMenu");

var closeMenu = document.getElementById("closeMenu");

var navOption = document.querySelector(".nav-option");



toggleMenu.addEventListener('click', ()=> {

    navOption.style.display = "block";
    
})
closeMenu.addEventListener('click', ()=> {

    navOption.style.display = "none";
    
})


})