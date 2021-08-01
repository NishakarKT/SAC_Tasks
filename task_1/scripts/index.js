const scroll_to_top = document.querySelector(".scroll_to_top");

scroll_to_top.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;;
});

