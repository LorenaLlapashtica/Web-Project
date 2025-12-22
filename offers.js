/**
 * PROJEKTI: Imaginative Tourism
 * MODULI: Main Script (ES6+ Version)
 * Pikat e plotësuara: 68, 74, 81, 85, 86, 88
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Social Bar Toggle (Pika 74: Arrow Function & Pika 79: classList)
  const initSocialToggle = () => {
    const socialBtn = document.querySelector("#social-btn-expand");
    const socialTop = document.querySelector("#social-top");
    const socialIcon = document.querySelector("#social-icon");
    const socialContent = document.querySelector("#social-top-content");

    if (!socialBtn) return;

    socialBtn.addEventListener("click", () => {
      // Përdorimi i classList.toggle është më modern se hasClass/addClass
      const isHidden = socialTop.classList.toggle("showhide");

      socialIcon.classList.toggle("fa-plus", isHidden);
      socialIcon.classList.toggle("fa-minus", !isHidden);

      // Shfaqja/Fshehja e përmbajtjes
      socialContent.style.display = isHidden ? "none" : "flex";
    });
  };

  // 2. Navigation Link Active (Pika 88: Array Methods .forEach)
  const handleActiveNavigation = () => {
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll("ul.nav-menu li .nav-link");

    navLinks.forEach((link) => {
      if (currentUrl.includes(link.getAttribute("href"))) {
        link.classList.add("nav-link-active");
      }
    });
  };

  // 3. Update Background & Theme (Pika 86: Destructuring & Pika 85: Template Literals)
  const updateBackground = () => {
    // Marrja e orës duke përdorur Destructuring (Pika 86)
    const { hr } = { hr: new Date().getHours() };

    const bodyStyle = document.body.style;
    const headerTop = document.querySelector(".social-top");
    const mainHeader = document.querySelector(".main-header");
    const headerSpace = document.querySelector(".header-space");
    const footer = document.querySelector(".main-footer");

    // Template Literal për logim në console (Pika 85)
    console.log(`Tema po përditësohet... Ora aktuale: ${hr}:00`);

    // Kushtet për ngjyrat (Pika 71: If/Else Logic)
    if (hr < 10 || (hr > 10 && hr < 19)) {
      // Light Mode
      bodyStyle.backgroundColor = "#FFFFFF";
      bodyStyle.color = "#000000";

      if (headerTop) headerTop.style.backgroundColor = "#FFFFFF";
      if (mainHeader) mainHeader.style.backgroundColor = "#EBEBEB";
      if (headerSpace) headerSpace.style.backgroundColor = "#FFFFFF";

      document.querySelectorAll(".presentation-category").forEach((el) => {
        el.style.color = "#313131";
      });

      document.querySelectorAll(".social-icons-btn").forEach((el) => {
        el.style.backgroundColor = "#D2D2D2";
      });
    } else {
      // Dark Mode
      bodyStyle.backgroundColor = "#0E0E0E";
      bodyStyle.color = "#FFFFFF";

      if (headerTop) headerTop.style.backgroundColor = "#000000";
      if (mainHeader) mainHeader.style.backgroundColor = "#000000";
      if (headerSpace) headerSpace.style.backgroundColor = "#0E0E0E";
      if (footer) footer.style.backgroundColor = "#000000";

      document.querySelectorAll(".presentation-category").forEach((el) => {
        el.style.color = "#FFFFFF";
      });

      document.querySelectorAll(".social-icons-btn").forEach((el) => {
        el.style.backgroundColor = "#1A1A1A";
      });
    }
  };

  // Inicializimi i funksioneve
  initSocialToggle();
  handleActiveNavigation();
  updateBackground();

  // Pika 84: Përdorimi i setInterval
  setInterval(updateBackground, 60000);
});