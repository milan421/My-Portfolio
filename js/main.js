///Code for Nigh mode///
let dark_theme = document.querySelector(".night_mode a");
let img = dark_theme.querySelector("img");
let background = document.querySelector(".background");
dark_theme.addEventListener("click", function (event) {
  event.preventDefault();
  if (background.classList.contains("dark")) {
    background.classList.remove("dark");
    img.style.transform = "rotate(0deg)";
  } else {
    background.classList.add("dark");
    img.style.transform = "rotate(50deg)";
  }
});
let nav = document.querySelector("nav");

// Code for scroll function
window.addEventListener("scroll", function () {
  if (window.scrollY > 5) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
///code for language settings
// Selektovanje svih elemenata za engleski i srpski jezik
let english = document.querySelectorAll(".english");
let serbian = document.querySelectorAll(".serbian");

// Selektovanje svih opcija za engleski i srpski jezik u HTML-u
let eng_option = document.querySelectorAll(".eng");
let srb_option = document.querySelectorAll(".srb");

// Dodela event listener-a za engleski jezik
eng_option.forEach(function (one) {
  one.addEventListener("click", function (event) {
    event.preventDefault();

    // Menjanje klase "active" između engleske i srpske opcije
    srb_option.forEach(function (srb) {
      srb.classList.remove("active");
    });
    eng_option.forEach(function (eng) {
      eng.classList.add("active");
    });

    // Uklanjanje i dodavanje klase "translate" za jezičke opcije
    english.forEach(function (one) {
      if (one.classList.contains("translate")) {
        one.classList.remove("translate");
      }
    });
    serbian.forEach(function (one) {
      if (!one.classList.contains("translate")) {
        one.classList.add("translate");
      }
    });
  });
});

// Dodela event listener-a za srpski jezik
srb_option.forEach(function (one) {
  one.addEventListener("click", function (event) {
    event.preventDefault();

    // Menjanje klase "active" između srpske i engleske opcije
    eng_option.forEach(function (eng) {
      eng.classList.remove("active");
    });
    srb_option.forEach(function (srb) {
      srb.classList.add("active");
    });

    // Uklanjanje i dodavanje klase "translate" za jezičke opcije
    serbian.forEach(function (one) {
      if (one.classList.contains("translate")) {
        one.classList.remove("translate");
      }
    });
    english.forEach(function (one) {
      if (!one.classList.contains("translate")) {
        one.classList.add("translate");
      }
    });
  });
});

///hamburger menu function
let for_mobile = document.querySelector(".for_mobile");
let hamburger_menu = document.querySelector(".hamburgers");
hamburger_menu.addEventListener("click", function (event) {
  event = event.target;
  if (event.classList.contains("flip")) {
    event.classList.remove("flip");
    for_mobile.classList.remove("active");
  } else {
    hamburger_menu.classList.add("flip");
    for_mobile.classList.add("active");
  }
});
///click to find section function///
let home = document.querySelectorAll(".home");
home.forEach(function (one) {
  one.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 100, behavior: "smooth" });
  });
});
let project = document.querySelectorAll(".Project");
let sec2 = document.querySelector(".sec2");

project.forEach(function (one) {
  one.addEventListener("click", function (event) {
    event.preventDefault();
    let sec2Position = sec2.getBoundingClientRect().top + window.scrollY;
    let offset = 50;
    window.scrollTo({ top: sec2Position - offset, behavior: "smooth" });
  });
});

let contact = document.querySelectorAll(".contact");
let sec3 = document.querySelector(".sec3");
contact.forEach(function (one) {
  one.addEventListener("click", function (event) {
    event.preventDefault();
    let sec3Position = sec3.getBoundingClientRect().top + window.scrollY;
    let offset = 50;
    window.scrollTo({ top: sec3Position - offset, behavior: "smooth" });
  });
});
