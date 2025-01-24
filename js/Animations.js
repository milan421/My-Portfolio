let from_right_to_left_whole_text = document.querySelectorAll(
  ".from_right_to_left_whole_text"
);
let from_left_to_right_whole_text = document.querySelectorAll(
  ".from_left_to_right_whole_text"
);

// Funkcija za proveru vidljivosti elementa
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const offset = 100; // Proširi marginu za 100px
  return (
    rect.top < window.innerHeight + offset &&
    rect.bottom > -offset &&
    rect.left < window.innerWidth + offset &&
    rect.right > -offset
  );
}

// Funkcija koja dodaje ili uklanja klase
function handleScroll() {
  from_right_to_left_whole_text.forEach((element) => {
    if (isInViewport(element) && !element.classList.contains("animate")) {
      element.classList.add("animate"); // Dodaj klasu ako je element vidljiv
    } else if (
      !isInViewport(element) &&
      element.classList.contains("animate")
    ) {
      element.classList.remove("animate"); // Ukloni klasu ako element nije vidljiv
    }
  });

  from_left_to_right_whole_text.forEach((element) => {
    if (isInViewport(element) && !element.classList.contains("animate")) {
      element.classList.add("animate"); // Dodaj klasu ako je element vidljiv
    } else if (
      !isInViewport(element) &&
      element.classList.contains("animate")
    ) {
      element.classList.remove("animate"); // Ukloni klasu ako element nije vidljiv
    }
  });
}

// Dodaj \"scroll\" događaj
window.addEventListener("scroll", handleScroll);

// Pokreni proveru odmah nakon učitavanja stranice
handleScroll();

// Dodaj "scroll" događaj na prozor

///Left to Right Whole text////

////End of Animation////

///Right to Left Whole text////

let selectDomObjects = [
  ".from_left_to_right_reverse_Individually",
  ".from_right_to_left_reverse_Individually",
  ".from_top_to_bottom_Individually",
  ".from_bottom_to_top_Individually",
  ".typing",
  ".wave_left_to_right",
  ".wave_right_to_left",
]; //Niz koji sadrzi sve klase animacija koje se mogu dodati na bilo koji html text kao sto je npr h1//
selectDomObjects.forEach(function (oneoftheclasses, number) {
  let selectOneoftheclasses = document.querySelectorAll(oneoftheclasses);
  selectOneoftheclasses.forEach(function (element, index) {
    let the_whole_text = element;
    let splitTexts = element.innerText.split("");
    element.innerText = "";
    splitTexts.forEach(function (text) {
      if (text === " ") {
        text = "&nbsp";
      }
      let CreateSpan = document.createElement("span");
      CreateSpan.innerHTML = text;
      element.appendChild(CreateSpan);
    });
    /////Left to right individualty reverse/////
    if (number === 0) {
      ///Indetifikujemo koji je broj animacije u nizu DOM-a da bismo skratili pisanje istoga koda za svaku animaciju
      let i = 0;
      let SelectAllSpans = element.querySelectorAll("span");
      let interval = setInterval(function () {
        if (i < SelectAllSpans.length) {
          SelectAllSpans[i].classList.add("animate");
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
    //////End of animation///////

    /////Right to left individualty reverse/////
    if (number === 1) {
      let SelectAllSpans = element.querySelectorAll("span");
      let i = SelectAllSpans.length - 1;
      let interval = setInterval(function () {
        if (i < 0) {
          clearInterval(interval);
        } else {
          SelectAllSpans[i].classList.add("animate");
          i--;
        }
      }, 100);
    }
    //////End of animation///////

    /////Top to Bottom individualty/////
    if (number === 2) {
      let SelectAllSpans = element.querySelectorAll("span");
      let i = SelectAllSpans.length - 1;
      let interval = setInterval(function () {
        if (i < 0) {
          clearInterval(interval);
        } else {
          SelectAllSpans[i].classList.add("animate");
          i--;
        }
      }, 100);
    }
    //////End of animation///////

    ///Top to Bottom individualy////
    if (number === 3) {
      let SelectAllSpans = element.querySelectorAll("span");
      let i = SelectAllSpans.length - 1;
      let interval = setInterval(function () {
        if (i < 0) {
          clearInterval(interval);
        } else {
          SelectAllSpans[i].classList.add("animate");
          i--;
        }
      }, 100);
    }
    //////End of animation///////

    ///Left to Right Whole text////
    if (number === 4) {
      splitTexts = "";
      let active = the_whole_text.classList.add("animate");
    }
    ////End of Animation////

    ///Right to Left Whole text////
    if (number === 5) {
      splitTexts = "";
      let active = the_whole_text.classList.add("animate");
    }
    ///End of Animation

    ///Typing...///
    if (number === 4) {
      let i = 0;
      let SelectAllSpans = element.querySelectorAll("span");
      let interval = setInterval(function () {
        if (i < SelectAllSpans.length) {
          SelectAllSpans[i].classList.add("animate");
          i++;
        } else {
          clearInterval(interval);
        }
      }, 15);
    }
    ///End of Animation /////

    ///Wave left to Right////
    if (number === 7) {
      let i = 0;
      let SelectAllSpans = element.querySelectorAll("span");
      let interval = setInterval(function () {
        if (i < SelectAllSpans.length) {
          SelectAllSpans[i].classList.add("animate");
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
    ///End of Animation /////

    //// Wave Right to Left///
    if (number === 8) {
      let SelectAllSpans = element.querySelectorAll("span");
      let i = SelectAllSpans.length - 1;
      let interval = setInterval(function () {
        if (i < 0) {
          clearInterval(interval);
        } else {
          SelectAllSpans[i].classList.add("animate");
          i--;
        }
      }, 100);
    }
    ///End of Animation /////
  });
});
