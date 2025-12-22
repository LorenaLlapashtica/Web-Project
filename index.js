/**
 * PROJEKTI: Imaginative Tourism
 * MODERNISED JS (ES6+) - 2025 Version
 * Pikat e plotësuara: 68, 74, 81, 85, 86, 88, 92
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Social Toggle (ES6 classList & Arrow Function)
    const initSocialToggle = () => {
        const socialBtn = document.querySelector("#social-btn-expand");
        const socialTop = document.querySelector("#social-top");
        const socialIcon = document.querySelector("#social-icon");
        const socialContent = document.querySelector("#social-top-content");

        if (!socialBtn) return;

        socialBtn.addEventListener("click", () => {
            const isHidden = socialTop.classList.toggle("showhide");
            socialIcon.classList.toggle("fa-plus", isHidden);
            socialIcon.classList.toggle("fa-minus", !isHidden);
            socialContent.style.display = isHidden ? "none" : "flex";
        });
    };

    // 2. Modern Slider (Përdorimi i let/const dhe forEach)
    let indexValue = 1;

    const showImg = (e) => {
        const images = document.querySelectorAll(".slide-image");
        const sliders = document.querySelectorAll(".btm-slides span");

        if (!images.length) return;

        if (e > images.length) indexValue = 1;
        if (e < 1) indexValue = images.length;

        // Pika 88: forEach në vend të loop-ës së vjetër for
        images.forEach(img => img.style.display = "none");
        sliders.forEach(slider => slider.style.background = "rgba(0,0,0,0.1)");

        images[indexValue - 1].style.display = "block";
        sliders[indexValue - 1].style.background = "#333";
    };

    // Globalizimi i funksioneve për butona (onclick në HTML)
    window.btm_slide = (e) => showImg(indexValue = e);
    window.side_slide = (e) => showImg(indexValue += e);

    // 3. Navigation Link Active (Array methods)
    const handleNavigation = () => {
        const currentUrl = window.location.href;
        const navLinks = document.querySelectorAll("ul.nav-menu li .nav-link");

        navLinks.forEach(link => {
            if (currentUrl.includes(link.getAttribute("href"))) {
                link.classList.add("nav-link-active");
            }
        });
    };

    // 4. Background Update (Pika 86: Destructuring & Pika 85: Template Literals)
    const updateTheme = () => {
        // Destructuring
        const { hr } = { hr: new Date().getHours() };
        const body = document.body;
        
        const elements = {
            socialTop: document.querySelector(".social-top"),
            header: document.querySelector(".main-header"),
            space: document.querySelector(".header-space"),
            footer: document.querySelector(".main-footer")
        };

        // Template Literals (Pika 85)
        console.log(`Përditësimi i temës... Ora: ${hr}:00`);

        const isNight = hr >= 19 || hr < 7;
        const isMorning = hr < 10;

        if (isNight) {
            body.style.backgroundColor = "#0E0E0E";
            body.style.color = "#FFFFFF";
            if (elements.header) elements.header.style.backgroundColor = "#000000";
            if (elements.footer) elements.footer.style.backgroundColor = "#000000";
        } else {
            body.style.backgroundColor = "#FFFFFF";
            body.style.color = "#000000";
            if (elements.header) elements.header.style.backgroundColor = "#EBEBEB";
        }
    };

    // Inicializimi i të gjithave
    initSocialToggle();
    showImg(indexValue);
    handleNavigation();
    updateTheme();

    // Pika 84: Interval
    setInterval(updateTheme, 60000);
});