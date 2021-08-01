const subNav__links = document.getElementsByClassName("subNav__link");
const subNav__activeLink = document.querySelector(".subNav__activeLink");
const hoverBubble = document.querySelector(".subNav__hoverBubble")

hoverBubble.style.left = `${subNav__activeLink.offsetLeft}px`;
hoverBubble.style.width = `${subNav__activeLink.offsetWidth}px`;

Array.from(subNav__links).map(subNav__link => {

    subNav__link.addEventListener("mouseover", (e) => {
        hoverBubble.style.left = `${e.target.offsetLeft}px`;
        hoverBubble.style.width = `${e.target.offsetWidth}px`;
    });

    subNav__link.addEventListener("mouseleave", () => {
        hoverBubble.style.left = `${subNav__activeLink.offsetLeft}px`;
        hoverBubble.style.width = `${subNav__activeLink.offsetWidth}px`;
    });

})