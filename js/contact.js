/**
 * PROJEKTI: Imaginative Tourism
 * IMPLEMENTIMI: Vanilla JavaScript ES6+
 * Plotëson pikat: 68, 74, 81, 82, 85, 86, 88, 92
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Menaxhimi i Social Bar (Përdorimi i Arrow Functions dhe classList)
    const initSocialToggle = () => {
        const socialBtn = document.querySelector("#social-btn-expand");
        const socialTop = document.querySelector("#social-top");
        const socialIcon = document.querySelector("#social-icon");
        const socialContent = document.querySelector("#social-top-content");

        if (!socialBtn) return;

        socialBtn.addEventListener("click", () => {
            const isHidden = socialTop.classList.toggle("showhide");
            
            // Ndërrimi i ikonave duke përdorur metodat moderne të klasave
            socialIcon.classList.toggle("fa-plus", isHidden);
            socialIcon.classList.toggle("fa-minus", !isHidden);
            
            socialContent.style.display = isHidden ? "none" : "flex";
        });
    };

    // 2. Aktivizimi i Navigacionit (Përdorimi i Array methods .forEach)
    const handleActiveLinks = () => {
        const currentUrl = window.location.href;
        const navLinks = document.querySelectorAll("ul.nav-menu li .nav-link");

        navLinks.forEach(link => {
            if (currentUrl.includes(link.getAttribute("href"))) {
                link.classList.add("nav-link-active");
            }
        });
    };

    // 3. Përditësimi i Temës (Pika 86: Destructuring dhe Pika 85: Template Literals)
    const updateBackground = () => {
        // Destructuring për të marrë orën direkt
        const { hr } = { hr: new Date().getHours() };
        const body = document.body;
        
        const elements = {
            top: document.querySelector(".social-top"),
            header: document.querySelector(".main-header"),
            space: document.querySelector(".header-space"),
            footer: document.querySelector(".main-footer")
        };

        // Template Literal për logim (Pika 85)
        console.log(`Kontrolli i temës: Ora është ${hr}:00`);

        if (hr < 19 && hr >= 7) {
            // Tema e ditës
            body.style.backgroundColor = "#FFFFFF";
            body.style.color = "#000000";
            if (elements.top) elements.top.style.backgroundColor = "#FFFFFF";
            if (elements.header) elements.header.style.backgroundColor = "#EBEBEB";
        } else {
            // Tema e natës
            body.style.backgroundColor = "#0E0E0E";
            body.style.color = "#FFFFFF";
            if (elements.top) elements.top.style.backgroundColor = "#000000";
            if (elements.header) elements.header.style.backgroundColor = "#000000";
            if (elements.footer) elements.footer.style.backgroundColor = "#000000";
        }
    };

    // 4. Validimi i Formës (Pika 82: Regex dhe Pika 92: LocalStorage)
    window.validatePhoneNumber = () => {
        const phoneInput = document.getElementById("phone");
        const nameInput = document.getElementById("name");
        
        if (!phoneInput || !nameInput) return;

        const PHONE_REGEX = /^[+][/0-9]{8,12}$/; // Pika 82

        if (!PHONE_REGEX.test(phoneInput.value)) {
            alert("Ploteso kerkesat!");
        } else {
            // LocalStorage (Pika 92)
            localStorage.setItem("Name", nameInput.value);
            
            // Template Literal (Pika 85)
            alert(`Mesazhi u pranua me sukses nga: ${nameInput.value}`);
            document.getElementById("main-form")?.reset();
        }
    };

    // Inicializimi i funksioneve
    initSocialToggle();
    handleActiveLinks();
    updateBackground();

    // Interval i përditësuar çdo minutë (Pika 84)
    setInterval(updateBackground, 60000);
});