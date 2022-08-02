import home from "./home.js";
import header from "./header.js";
import login from "./login.js";


const container = document.querySelector(".container");

function makeHomeView() {
      fetch("http://localhost:8080/api/player")
            .then(res => res.json())
            .then(players => {
                  makeLoginPageFromJSON(players);
            })
}


function makeLoginPageFromJSON(players) {
      container.innerHTML = header();
      container.innerHTML += login(players);

      // const playersEl = container.querySelector(".user");
      const submitBtn = container.querySelector(".submitBtn");
      submitBtn.addEventListener("click", () => {
            const selectedPlayer = container.querySelector(".playerNameSelected");
            fetch(`http://localhost:8080/api/player/${selectedPlayer.value}`)
            .then(res => res.json())
            .then(onePlayer => {
                  makeHomePageFromSelectedPlayer(onePlayer);
            })
      })

      const newPlayerBtn = container.querySelector(".newPlayerBtn");
      const newPlayerName = container.querySelector("#player-name");
      const newPlayerEmail = container.querySelector("#player-email");
      const newPlayerPhoneNumber = container.querySelector("#player-phoneNumber");

      newPlayerBtn.addEventListener("click", () => {
            const newPlayerJson = {
                  "name":newPlayerName.value,
                  "email":newPlayerEmail.value,
                  "phoneNumber":newPlayerPhoneNumber.value,
                  "league":"3.0",
                  "imgUrl":"www.yeah.com",
            }
            console.log(newPlayerJson);
            fetch(`http://localhost:8080/api/player`, {
                  method: 'POST',
                  headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(newPlayerJson)
            })
            .then(res => res.json())
            .then(newPlayer => {
                  makeHomePageFromSelectedPlayer(newPlayer);
            })

      })

}

function makeHomePageFromSelectedPlayer(player){
      container.innerHTML = header();
      container.innerHTML += home(player);

}
makeHomeView();