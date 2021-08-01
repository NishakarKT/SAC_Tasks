const mainNav__searchBox = document.querySelector(".mainNav__right");
const mainNav__searchBox_input = mainNav__searchBox.lastElementChild;

mainNav__searchBox_input.addEventListener("focus", (e) => {
    mainNav__searchBox.style.border = "1.5px solid black";
});

mainNav__searchBox_input.addEventListener("blur", (e) => {
    mainNav__searchBox.style.border = "1.5px solid #d4d4d4";
});