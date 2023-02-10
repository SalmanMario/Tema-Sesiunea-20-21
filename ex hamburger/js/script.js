const menuIcon = document.querySelector(".menu-icon");
const links = document.querySelector(".links");

menuIcon.addEventListener("click", function () {
    if (links.classList.contains("show-dropdown")) {
        links.classList.remove("show-dropdown");
    } else {
        links.classList.add("show-dropdown");
    }
})

