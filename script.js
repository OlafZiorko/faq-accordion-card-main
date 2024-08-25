const headers = document.querySelectorAll(".faq__header");
const faqWrappers = Array.from(document.querySelectorAll(".faq__wrapper"));
const widthSize = window.matchMedia("(min-width: 1440px)");
const headerImage = document.querySelector(".illustraiotn");

// Functions

function checkUI(arr, className) {
  arr.forEach((item) => {
    item.classList.remove(`${className}`);
  });
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    console.log("tal");
    headerImage.setAttribute(
      "src",
      "./images/illustration-woman-online-desktop.svg"
    );
  } else {
    console.log("nie");
  }
}

myFunction(widthSize);

// listener

headers.forEach((header) => {
  header.addEventListener("click", (e) => {
    checkUI(headers, "active");
    const currHeader = e.target;
    currHeader.parentElement.classList.add("active");
  });
});

widthSize.addEventListener("change", () => {
  myFunction(widthSize);
});
