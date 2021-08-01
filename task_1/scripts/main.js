const scroll_to_top = document.querySelector(".scroll_to_top");

scroll_to_top.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;;
});

const mainNav__searchBox = document.querySelector(".mainNav__right");
const mainNav__searchBox_input = mainNav__searchBox.lastElementChild;

mainNav__searchBox_input.addEventListener("focus", (e) => {
    mainNav__searchBox.style.border = "1.5px solid black";
});

mainNav__searchBox_input.addEventListener("blur", (e) => {
    mainNav__searchBox.style.border = "1.5px solid #d4d4d4";
});

const subNav__links = document.getElementsByClassName("subNav__link");
const subNav__activeLink = document.querySelector(".subNav__activeLink");
const hoverBubble = document.querySelector(".subNav__hoverBubble");

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

});

const footer__serverTime = document.querySelector(".footer__serverTime");

setInterval(() => {
    const now = new Date();
    const dateElems = now.toString().split(" ");
    const [, month, date, year, time, gmt] = dateElems;
    footer__serverTime.innerHTML = `${month}/${date}/${year} ${time} <sup>${gmt}</sup>`;
}, 1000);


