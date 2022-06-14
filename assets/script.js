const title = document.getElementById("header-h2");
const content = document.getElementById("header-p");

const title2 = document.getElementById("home-h2");
const content2 = document.getElementById("home-p");

const title3 = document.getElementById("about-h2");
const content3 = document.getElementById("about-p");

const title4 = document.getElementById("contact-h2");
const content4 = document.getElementById("contact-p");

function homeFunc() {
  title.innerHTML = title2.innerHTML;
  content.innerHTML = content2.innerHTML;
}

function aboutFunc() {
  title.innerHTML = title3.innerHTML;
  content.innerHTML = content3.innerHTML;
}

function contactFunc() {
  title.innerHTML = title4.innerHTML;
  content.innerHTML = content4.innerHTML;
}
