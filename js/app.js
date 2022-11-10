document.addEventListener("DOMContentLoaded", (event) =>  {


    

    var toggleMenu= document.getElementById("toggleMenu");
    var closeMenu = document.getElementById("closeMenu");
    var navOption = document.querySelector(".nav-option");
    var hireMe = document.getElementById("hire");


    


        closeMenu.addEventListener('click', ()=> {

            navOption.style.display = "none";
            
        })


   

        

    toggleMenu.addEventListener('click', ()=> {

        navOption.style.display = "block";
        
    })


   

    


})