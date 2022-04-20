document.addEventListener("DOMContentLoaded", (event) =>  {

    var toggleMenu= document.getElementById("toggleMenu");

    var closeMenu = document.getElementById("closeMenu");

    var navOption = document.querySelector(".nav-option");

    var hireMe = document.getElementById("hire");

    toggleMenu.addEventListener('click', ()=> {

        navOption.style.display = "block";
        
    })


    closeMenu.addEventListener('click', ()=> {

        navOption.style.display = "none";
        
    })

    


})