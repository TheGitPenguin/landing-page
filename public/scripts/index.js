const body = document.querySelector("body");
const vpsCard = document.getElementById("vps-card");
const gamesCard = document.getElementById("games-card");

body.addEventListener('scroll', () =>
    {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
        console.log("Reached the bottom of the page");
        }
    }
);

vpsCard.addEventListener('click', () =>
    {
        window.location.href = "/vps.html";
    }
);

gamesCard.addEventListener('click', () =>
    {
        window.location.href = "/games.html";
    }
);