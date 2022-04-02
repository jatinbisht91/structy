const tabs = document.querySelectorAll("[data-target-tab]");
const spans = document.querySelectorAll(".icons-container span");
const popUp = document.querySelector(".popUp")
const hamburger = document.querySelector(".sm-nav-right i")
const overlay = document.querySelector(".overlay")
const signIn = document.querySelector(".signIn")
const symbol = document.querySelector(".symbol")
const icon = document.querySelector(".fa-bars")

window.onload = function () {
    document.querySelector(".hero img").style.transform = "translateY(0)";
    document.querySelector(".hero img").style.opacity = 1;

    document.querySelector(".hero h1").style.transform = "translateY(0)";
    document.querySelector(".hero h1").style.opacity = 1;

    document.querySelector(".hero p").style.transform = "translateY(0)";
    document.querySelector(".hero p").style.opacity = 1;

    document.querySelector(".hero div").style.transform = "translateY(0)";
    document.querySelector(".hero div").style.opacity = 1;

}

popUp.addEventListener("click", () => {

    overlay.classList.add("active");
    signIn.classList.add("active");
})

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    signIn.classList.remove("active");
})

tabs.forEach((tab) => {
    tab.addEventListener("mouseover", () => {
        spans.forEach((span) => span.classList.remove("active"));
        const k = document.querySelector(tab.dataset.targetTab);
        k.classList.add('active');
    })

    tab.addEventListener("mouseout", () => {
        spans.forEach((span) => span.classList.remove("active"));
        document.querySelector(".default").classList.add("active");
    })
})



symbol.addEventListener("click", () => {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
        document.querySelector(".side-nav").style.transform = "translateX(0)";
    } else {
        icon.classList.replace("fa-times", "fa-bars");
        document.querySelector(".side-nav").style.transform = 'translateX(100%)';
    }

})


