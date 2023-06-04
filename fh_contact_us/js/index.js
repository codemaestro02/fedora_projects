const bars = document.querySelector("nav .bars");
const cancelBtn = document.querySelector("nav .cancel");

const menu = document.querySelector("nav");

const subMenu = document.querySelector("nav .nav-links");

const logo = document.querySelector("nav .logo img");

if (document.body.clientWidth <= 700){
    bars.classList.add("active");
    bars.classList.remove("unactive");
    subMenu.style.display = "none";
    
}

if (document.body.clientWidth <= 300){
    logo.src = "../images/fedora_image.png";
    logo.style.width = "50px";
    logo.parentNode.style.columnGap = "50vw";
    logo.parentNode.style.padding = "10px";
    
} else {
    logo.src = "../images/Fedoralogo_name@2x.png";
}


const dropdown = function(){
    bars.addEventListener("click", function(){

        menu.style.flexDirection = "column";
        menu.style.alignItems = "flex-start";
        bars.classList.add("unactive");
        bars.classList.remove("active");
        cancelBtn.classList.remove("unactive");
        cancelBtn.classList.add("active");
        subMenu.style.display = "flex";
        subMenu.classList.add("dropdown");
        
        
    });

    cancelBtn.addEventListener("click", function(){
        menu.style.flexDirection = "row";
        menu.style.alignItems = "center";
        cancelBtn.classList.add("unactive");
        cancelBtn.classList.remove("active");
        bars.classList.add("active")
        bars.classList.remove("unactive")
        subMenu.style.display = "none";
        subMenu.classList.remove("dropdown");
    });
};

dropdown();