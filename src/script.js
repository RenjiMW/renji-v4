"use strict";
import "./scss/main.scss";

const translations = {
  en: {
    title: "Hi 😉, I'm Maciej — a junior front-end developer",
    description:
      "On this website, you can find the projects that helped me learn and a bit more about me.",
    buttonSASS: "Projects for learning SASS",
    buttonJS: "Projects for learning JS",
    buttonReact: "Projects for learning React",
    buttonMyProjects: "My projects",
    aboutMe: "About me",
    aboutMeHeading: "Nice to meet you! 😁",
    aboutMeText1:
      "I’m a junior Frontend Developer focused on building clean, responsive interfaces with React and modern CSS. I’ve been learning and building consistently since 2020 — one step at a time, with a strong focus on continuous improvement.",
    aboutMeText2:
      "I am a rather calm person with an open mind. I value working in a good team and the company of positive people.",
    aboutMeText3: "Outside of coding: rugby, gym, and video games 🎮",
    skills: "Skills",
    skillsHeading: "Here are my skills: ",
    english: `<i class="fa-solid fa-comment-dots"></i> English B2/B1`,
    contact: "Contact info",
    contactHeading: "Contact me: ",
    phone: `<i class="fa-solid fa-phone"></i> Phone: 510 871 609`,
    email: "e-mail: wielgosz.mac@gmail.com",
    footerThanks: "Thank you for visting my website!",
    courses: `If you are also learning programming, I encourage you to take Jonnas Schmetmann's <a href="https://codingheroes.io/" class="footer__link">courses</a> `,
    icons: `<p class="footer__text footer__icons" data-i18n="icons">The icons used are mainly from <a href="https://fontawesome.com/" class="footer__link" target="_blank" rel="noopener noreferrer">Font Awesome</a> and are licensed free of charge.</p>`,
  },
  pl: {
    title: "Cześć 😉, jestem Maciej — junior front-end developer",
    description:
      "Na tej stronie znajdziesz projekty, które pomogły mi się uczyć, oraz trochę więcej o mnie.",
    buttonSASS: "Projekty do nauki SASS",
    buttonJS: "Projekty do nauki JS",
    buttonReact: "Projekty do nauki React",
    buttonMyProjects: "Moje projekty",
    aboutMe: "O mnie",
    aboutMeHeading: "Miło Cię poznać! 😁",
    aboutMeText1:
      "Jestem junior Frontend Developerem, który zajmuje się tworzeniem przejrzystych, responsywnych interfejsów przy użyciu React i nowoczesnego CSS. Od 2020 roku nieustannie się uczę i tworzę — krok po kroku, kładąc duży nacisk na ciągłe doskonalenie.",
    aboutMeText2:
      "Jestem raczej spokojną osobą z otwartym umysłem. Cenię pracę w dobrym zespole i towarzystwo pozytywnych ludzi.",
    aboutMeText3: "Poza kodowaniem lubię: rugby, siłownię i gry wideo 🎮",
    skills: "Umiejętności",
    skillsHeading: "Oto moje umiejętności: ",
    english: `<i class="fa-solid fa-comment-dots"></i> Angielski B2/B1`,
    contact: "Dane kontaktowe",
    contactHeading: "Skontaktuj się ze mną: ",
    phone: `<i class="fa-solid fa-phone"></i>Telefon: 510 871 609`,
    footerThanks: "Dziękuję za odwiedzenie mojej strony!",
    courses:
      'Jeśli też uczysz się programowania, zachęcam Cię do skorzystania z kursów <a href="https://codingheroes.io/" class="footer__link">Jonnasa Schmetmanna</a>',
    icons: `<p class="footer__text footer__icons" data-i18n="icons">Użyte ikony pochodzą głównie z <a href="https://fontawesome.com/" class="footer__link" target="_blank" rel="noopener noreferrer">Font Awesome</a> i są na darmowej licencji.</p>`,
  },
};

// Menu main elements
const menu = document.querySelector(".options");
const toggleBtn = document.getElementById("toggle-menu");
// Menu buttons
const themeBtn = document.getElementById("toggle-theme");
const langBtn = document.getElementById("toggle-lang");
const closeBtn = document.getElementById("close-accordions");

// Accordion button-headers
const headers = document.querySelectorAll(".accordion-header");

// Menu open/close
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menu.classList.toggle("closed");
});

// Make the close button active when an accordion element is opened
function updateCloseButtonState() {
  const allContents = document.querySelectorAll(".accordion-content.open");
  closeBtn.classList.toggle("options__item--active", allContents.length > 0);
}

// Closing menu when clicking outside
document.body.addEventListener("click", (event) => {
  if (
    !menu.contains(event.target) &&
    event.target !== toggleBtn &&
    event.target !== closeBtn &&
    !Array.from(headers).some((header) => header.contains(event.target))
  ) {
    menu.classList.remove("open");
    menu.classList.add("closed");
  }
});

// /////////////// Accordion functionality
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");
    updateCloseButtonState();
  });
});

////////////////////////////////////////
// PAGE CONTENT CLOSE
closeBtn.addEventListener("click", () => {
  const allContents = document.querySelectorAll(".accordion-content.open");
  allContents.forEach((content) => {
    content.classList.remove("open");
  });
  updateCloseButtonState();
});

////////////////////////////////////////
// THEME MODE
const moonIcon = document.querySelector("#darkModeBtn");
const sunIcon = document.querySelector("#lightModeBtn");

// Check user's preferred color scheme
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;
const initialTheme = prefersDarkMode ? "dark-mode" : "light-mode";

// Set theme icon based on user's preference
function setThemeIcon(newThemeIcon) {
  if (newThemeIcon === "dark-mode") {
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }

  if (newThemeIcon === "light-mode") {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

// Sets the theme passed as an argument
const setBackgroundTheme = function (mode) {
  if (document.body.classList.length > 0) {
    document.body.className = "";
    document.body.classList.toggle(mode);
  } else {
    document.body.classList.toggle(mode);
  }
};

function setTailwindIcon(theme) {
  const tailwindIcon = document.getElementById("tailwind-icon");
  if (!tailwindIcon) return;
  if (theme === "dark-mode") {
    tailwindIcon.src = "/icons/tailwind-w.png";
  } else {
    tailwindIcon.src = "/icons/tailwind-b.png";
  }
}

const initialThemeState = function () {
  setThemeIcon(initialTheme);
  setBackgroundTheme(initialTheme);
};

document.addEventListener("DOMContentLoaded", initialThemeState());

themeBtn.addEventListener("click", () => {
  const bodyClass = document.body.className;
  const newBodyClass = bodyClass === "dark-mode" ? "light-mode" : "dark-mode";
  setBackgroundTheme(newBodyClass);
  setThemeIcon(newBodyClass);
  setTailwindIcon(newBodyClass);
});

// Accordion text color
headers.forEach((header) => {
  const spans = header.querySelectorAll("span");
  spans.forEach((span) => {
    if (document.body.classList.contains("dark-mode")) {
      span.classList.add("whiteColor");
    } else {
      span.classList.remove("whiteColor");
    }
  });
});

//////////////////////////////////////////////////
// TRANSLATION
let currentLang = "en"; // domyślny język
const enIcon = document.querySelector("#EN-icon");
const plIcon = document.querySelector("#PL-icon");

function changeFlag() {
  const currentLang = document.documentElement.getAttribute("lang");
  if (currentLang === "en") {
    enIcon.classList.remove("hidden");
    plIcon.classList.add("hidden");
  }

  if (currentLang === "pl") {
    plIcon.classList.remove("hidden");
    enIcon.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", changeFlag());

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value) {
      el.innerHTML = value; // <- kluczowe!
    }
  });
  document.documentElement.setAttribute("lang", lang);
  currentLang = lang;
}

langBtn.addEventListener("click", () => {
  const newLang = currentLang === "en" ? "pl" : "en";
  updateLanguage(newLang);
  changeFlag();
});

//////////////////////////////////////////////////
// Scaling project images for touch screens
const projectLinks = document.querySelectorAll(".projects a");
let activePreview = null;

const isTouchDevice =
  window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

if (isTouchDevice) {
  projectLinks.forEach((link) => {
    const img = link.querySelector("img");

    link.addEventListener("click", (e) => {
      if (activePreview === link) {
        return;
      }

      e.preventDefault();

      if (activePreview) {
        activePreview.querySelector("img").classList.remove("preview");
      }

      img.classList.add("preview");
      activePreview = link;
    });
  });

  document.addEventListener("click", (e) => {
    const clickedInside = [...projectLinks].some((link) =>
      link.contains(e.target),
    );
    if (!clickedInside && activePreview) {
      activePreview.querySelector("img").classList.remove("preview");
      activePreview = null;
    }
  });
} else {
  projectLinks.forEach((link) => {
    const img = link.querySelector("img");

    link.addEventListener("mouseenter", () => {
      img.classList.add("preview");
    });

    link.addEventListener("mouseleave", () => {
      img.classList.remove("preview");
    });
  });
}
