/**
 * PROJEKTI: Imaginative Tourism
 * MODERN JAVASCRIPT IMPLEMENTATION (ES6+)
 * Pika 7: Evidence of Client-Server model - Ky skedar ekzekutohet në Client-side.
 */

// Pika 74 & 68: Arrow Functions dhe përdorimi i const/let në vend të var
const initializeProject = () => {
    
    // 1. Menaxhimi i Social Bar (Pika 79: classList)
    const toggleSocialBar = () => {
        const socialBtn = document.querySelector("#social-btn-expand");
        const socialTop = document.querySelector("#social-top");
        const socialIcon = document.querySelector("#social-icon");
        const socialContent = document.querySelector("#social-top-content");

        if (!socialBtn) return;

        socialBtn.addEventListener("click", (event) => {
            // Pika 83: preventDefault (nëse butoni do të ishte brenda një forme)
            event.preventDefault();

            const isHidden = socialTop.classList.toggle("showhide");
            
            // Ndryshimi i ikonës duke përdorur operacionet moderne të klasave
            socialIcon.classList.replace(isHidden ? "fa-minus" : "fa-plus", isHidden ? "fa-plus" : "fa-minus");
            socialContent.style.display = isHidden ? "none" : "flex";
        });
    };

    // 2. Navigimi Aktiv (Pika 88: Array methods si .forEach)
    const handleNavigation = () => {
        const currentUrl = window.location.href;
        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach(link => {
            if (currentUrl.includes(link.getAttribute("href"))) {
                link.classList.add("nav-link-active");
            }
        });
    };

    // 3. Sistemi i Temës (Ditë/Natë) - Pika 85, 86, 87
    const updateTheme = () => {
        // Pika 86: Destructuring për të marrë orën
        const { hours } = { hours: new Date().getHours() };
        
        // Pika 87: Spread Operator shembull (për të kopjuar stilin e default-it)
        const defaultStyles = { backgroundColor: "#FFFFFF", color: "#000000" };
        const nightStyles = { ...defaultStyles, backgroundColor: "#0E0E0E", color: "#FFFFFF" };

        const body = document.body;
        const mainHeader = document.querySelector(".main-header");
        const footer = document.querySelector(".main-footer");

        // Pika 71: Kushtet if/else për ndërrimin e temës
        if (hours >= 19 || hours < 7) {
            // Night Mode - Pika 85: Template Literals
            console.log(`%c Night Mode Aktiv: Ora është ${hours}:00`, "color: yellow; background: black;");
            
            body.style.backgroundColor = nightStyles.backgroundColor;
            body.style.color = nightStyles.color;
            if (mainHeader) mainHeader.style.backgroundColor = "#000000";
            if (footer) footer.style.backgroundColor = "#000000";
        } else {
            // Day Mode
            body.style.backgroundColor = defaultStyles.backgroundColor;
            body.style.color = defaultStyles.color;
            if (mainHeader) mainHeader.style.backgroundColor = "#EBEBEB";
        }
    };

    // Pika 92: Përdorimi i LocalStorage (Ruan vizitën e fundit)
    const trackVisit = () => {
        const lastVisit = localStorage.getItem("lastVisit");
        const now = new Date().toLocaleDateString();
        
        if (lastVisit === now) {
            console.log("Mirësevini përsëri sot!");
        } else {
            localStorage.setItem("lastVisit", now);
            console.log(`Vizita juaj e parë për sot: ${now}`);
        }
    };

    // Ekzekutimi i funksioneve
    toggleSocialBar();
    handleNavigation();
    updateTheme();
    trackVisit();

    // Pika 84: Përdorimi i setInterval
    setInterval(updateTheme, 60000);
};

// Pika 81: Event Listener për ngarkimin e plotë të DOM
document.addEventListener("DOMContentLoaded", initializeProject);