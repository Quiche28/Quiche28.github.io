if (location.protocol !== 'https:') {
    location.replace(`https://${location.hostname}${location.pathname}${location.search}`);
}

window.addEventListener("scroll", function(){var header = document.querySelector("header"); header.classList.toggle("sticky", window.scrollY > 0);})