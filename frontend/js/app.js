import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";

const container = document.querySelector(".container");

function makeHomeView() {
      fetch("http://localhost:8080/api/user")
            .then(res => res.json())
            .then(users => {
                  makeHomeViewFromJSON(users);
            })

}

function makeHomeViewFromJSON(users) {
      container.innerHTML = header();
      container.innerHTML += home(users);

      // const usersEl = container.querySelector(".user")
      // usersEl.forEach(user => {
      //       let userELId = user.querySelector(".id_field");

      // })
}
makeHomeView();