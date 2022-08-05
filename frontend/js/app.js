import home from "./home.js";
import header from "./header.js";
import login from "./login.js";
import allPlayersInLeague from "./allPlayersInLeague.js";


const container = document.querySelector(".container");

function makeHomeView() {
      fetch("http://localhost:8080/api/player")
            .then(res => res.json())
            .then(players => {
                  makeLoginPageFromJSON(players);
            })
}


function makeLoginPageFromJSON(players) {
      // container.innerHTML = header();
      container.innerHTML = login(players);

      // const playersEl = container.querySelector(".user");
      const submitBtn = container.querySelector(".submitBtn");
      submitBtn.addEventListener("click", () => {
            const selectedPlayer = container.querySelector(".playerNameSelected");
            fetch(`http://localhost:8080/api/player/${selectedPlayer.value}`)
            .then(res => res.json())
            .then(onePlayer => {
                  makeHomePageFromSelectedPlayer(onePlayer, players);
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
                  makeHomeView();
            })

      })

}


function makeHomePageFromSelectedPlayer(player, players){
      container.innerHTML = header();
      container.innerHTML += home(player);
      container.innerHTML += allPlayersInLeague(player, players);

      fetch(`http://localhost:8080/api/challenge`)
      .then(res => res.json())
      .then(allChallenges => {
            allChallenges.forEach(challenege => {
                  if (challenege.challengedId == player.id){
                        players.forEach(onePlayer => {
                              if (onePlayer.id == challenege.challengerId) {
                                    console.log("You have a challenge from " + onePlayer.name);
                              }
                        })
                  }
            })
      })


      const homeBtn = container.querySelector(".home-navigation");
      homeBtn.addEventListener ("click", () => {
            makeHomeView();
      })

      const challengeTables = container.querySelectorAll(".playerTable");
      challengeTables.forEach(challengeTable => {
            const challengeBtn = challengeTable.querySelector(".challengeBtn");
            const challengedId = challengeTable.querySelector(".id_field");
            const challengerId = player.id;
            challengeBtn.addEventListener("click", () => {
                  const newChallengeJson = {
                        "challengerId":challengerId,
                        "challengedId":challengedId.value,
                  }


                  fetch(`http://localhost:8080/api/player/${challengerId}/challenge/${challengedId.value}`,{
                        method: 'POST',
                        headers: {
                              'Content-type': 'application/json'
                          },
                          body: JSON.stringify(newChallengeJson)
                  })
                  .then(res => res.json())
                  .then(newChallenge => {
                        alert("A new Challenge has been sent");
                        // makeHomePageFromSelectedPlayer(player, players)
                        // newPlayers.forEach(newPlayer => {
                        //       if(newPlayer.id == player.id) {
                        //             console.log(newPlayer);
                        //             makeHomePageFromSelectedPlayer(newPlayer, newPlayers);
                        //       }
                        // })
                        
                  })
            })
      })


}
makeHomeView();
