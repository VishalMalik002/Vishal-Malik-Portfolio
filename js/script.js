document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE NAVIGATION
    // =========================

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen.toString()
            );

        });


        const navLinks = document.querySelectorAll(".nav-menu a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    // =========================
    // CONTACT FORM
    // =========================

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm && formStatus) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();


            // Empty field validation
            if (name === "" || email === "" || message === "") {

                formStatus.textContent =
                    "Please fill in all fields.";

                return;
            }


            // Email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formStatus.textContent =
                    "Please enter a valid email address.";

                return;
            }


            // Success message
            formStatus.textContent =
                `Thank you, ${name}! Your message has been received.`;

            contactForm.reset();

        });

    }


    // =========================
    // ACTIVE NAVBAR ON SCROLL
    // =========================

    const sections = document.querySelectorAll("section");
    const navigationLinks = document.querySelectorAll(".nav-menu a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();


    // =========================
    // SCROLL REVEAL ANIMATION
    // =========================

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-container, " +
        ".skill-category, " +
        ".project-card, " +
        ".timeline-item, " +
        ".certification-card, " +
        ".contact-container"
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("show");

        });

    }


    // =========================
    // BACK TO TOP
    // =========================

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        backToTop.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }

});
