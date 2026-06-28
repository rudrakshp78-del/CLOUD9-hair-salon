const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("onclick", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML = "✖";
    } else {
        menuToggle.innerHTML = "☰";
    }
});
