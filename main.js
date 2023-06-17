const gotop = document.querySelector(".gotopbtn");

var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px"
}

window.addEventListener("scroll", () => {

    if(window.pageYOffset > 100) {
        gotop.classList.add("active");
    }
    else{
        gotop.classList.remove("active");
    }

})