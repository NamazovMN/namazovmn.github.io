let burgerBtn = document.querySelector(".nav-box-phone-btn")
let burgerMenu = document.querySelector(".nav-phone-menu")

let isBurgerOpen = false;

burgerBtn.onclick = function() {
    if (!isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, center";
        isBurgerOpen = true;
        console.log(isBurgerOpen)

    }
    else if (isBurgerOpen){
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        isBurgerOpen = false;
        console.log(isBurgerOpen)

    }
}

let menuElements = document.querySelectorAll(".burger-element")
console.log(menuElements)

menuElements.forEach(sectionEl => {
    sectionEl.onclick = function() {
        burgerMenu.style.display='none';
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        isBurgerOpen = false;
    }
})