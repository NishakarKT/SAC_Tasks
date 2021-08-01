const footer__serverTime = document.querySelector(".footer__serverTime");

setInterval(() => {
    const now = new Date();
    const dateElems = now.toString().split(" ");
    const [, month, date, year, time, gmt] = dateElems;
    footer__serverTime.innerHTML = `${month}/${date}/${year} ${time} <sup>${gmt}</sup>`;
}, 1000);
