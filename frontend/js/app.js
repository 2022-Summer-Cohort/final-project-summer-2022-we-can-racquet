import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";

const container = document.querySelector(".container");

function makeHomeView() {
      container.innerHTML = header();

}

makeHomeView();