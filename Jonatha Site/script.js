// ==========================
// MENU MOBILE
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });


    // Fechar menu ao clicar em um link

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        });

    });

}


// ==========================
// TEXTO ANIMADO
// ==========================

const typingElement = document.querySelector(".typing");

const words = [
    "Tecnologia",
    "Desenvolvimento Web",
    "Programação",
    "Análise de Sistemas"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) {
        return;
    }

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (
        !deleting &&
        charIndex === currentWord.length
    ) {
        deleting = true;
        speed = 1500;
    }

    if (
        deleting &&
        charIndex === 0
    ) {
        deleting = false;
        wordIndex =
            (wordIndex + 1) % words.length;

        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==========================
// ANIMAÇÃO DAS SEÇÕES
// ==========================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-text, " +
    ".info-card, " +
    ".skill-card, " +
    ".timeline-item, " +
    ".experience-card, " +
    ".project-card, " +
    ".contact-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


// ==========================
// BOTÃO VOLTAR AO TOPO
// ==========================

const backToTop =
    document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

}


// ==========================
// MENU ATIVO
// ==========================

const sections =
    document.querySelectorAll("main section");

const menuItems =
    document.querySelectorAll(".nav-links a");

if (sections.length && menuItems.length) {

    const updateActiveMenu = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        menuItems.forEach(item => {

            item.classList.remove("active");

            if (
                item.getAttribute("href") ===
                `#${currentSection}`
            ) {

                item.classList.add("active");

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveMenu,
        { passive: true }
    );

    updateActiveMenu();
}


// ==========================
// ANO AUTOMÁTICO
// ==========================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}