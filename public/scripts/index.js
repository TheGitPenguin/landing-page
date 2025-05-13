const body = document.querySelector("body");
const vpsCard = document.getElementById("vps-card");

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
        
    }
);