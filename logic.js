const navButton = document.querySelector("#navbar-button");
const questionButtons = document.querySelectorAll(".question-button");

navButton.addEventListener("click", function() {
    let navLinksList = document.querySelector(".nav-link-list");
    navLinksList.classList.toggle("active");
});

for (let btn of questionButtons) {
    btn.addEventListener("click", function() {
        btn.nextElementSibling.classList.toggle("opened");
        if (btn.children[0].classList.contains("fa-plus")) {
            btn.children[0].classList.replace("fa-plus", "fa-minus");
        } else {
            btn.children[0].classList.replace("fa-minus", "fa-plus");
        }
    });
}
