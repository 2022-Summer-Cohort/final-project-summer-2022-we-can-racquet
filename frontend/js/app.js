import home from "./home.js";
import header from "./header.js";
import login from "./login.js";
import allPlayersInLeague from "./allPlayersInLeague.js";
import allPlayerMatches from "./allPlayerMatches.js";
import allPlayerChallenges from "./allPlayerChallenges.js";


const container = document.querySelector(".container");

function makeHomeView() {
      fetch("http://localhost:8080/api/player")
            .then(res => res.json())
            .then(players => {
                  makeLoginPageFromJSON(players);
            })
}

function makeLoginPageFromJSON(players) {

      container.innerHTML = login(players);

      // SUBMIT BUTTON (select existing player)
      // get button div 
      const submitBtn = container.querySelector(".submitBtn");

      submitBtn.addEventListener("click", () => {
            const selectedPlayer = container.querySelector(".playerNameSelected");
            fetch(`http://localhost:8080/api/player/${selectedPlayer.value}`)
                  .then(res => res.json())
                  .then(onePlayer => {
                        makeHomePageFromSelectedPlayer(onePlayer, players);
                  })
      })

      // NEW PLAYER BUTTON (create new player)
      // get button div 
      const newPlayerBtn = container.querySelector(".newPlayerBtn");
      // get form values
      const newPlayerName = container.querySelector("#new-player-name").value;
      const newPlayerEmail = container.querySelector("#new-player-email").value;
      const newPlayerPhoneNumber = container.querySelector("#new-player-phoneNumber").value;

      newPlayerBtn.addEventListener("click", () => {
            const newPlayerJson = {
                  "name": newPlayerName,
                  "email": newPlayerEmail.value,
                  "phoneNumber": newPlayerPhoneNumber,
                  "league": "3.0",
                  "imgUrl": "www.yeah.com",
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
                        // TODO: Create toast notification on success
                  })
      })
}

function makeHomePageFromSelectedPlayer(player, players) {

      // BASE LAYOUT
      container.innerHTML = header();
      container.innerHTML += home(player);
      // Populate matching league players table
      container.innerHTML += allPlayersInLeague(player, players);

      // CHALLENGE NOTIFICATION
      fetch(`http://localhost:8080/api/challenge`)
            .then((res) => res.json())
            .then((allChallenges) => {
                  container.innerHTML += allPlayerChallenges(player,players,allChallenges);
            });

      fetch(`http://localhost:8080/api/record`)
            .then((res) => res.json())
            .then((allRecords) => {
                  // console.log(allRecords);
                  container.innerHTML += allPlayerMatches(player, players, allRecords);

                  // ALL PLAYERS IN LEAGUE TABLE (Challenge, Add record buttons)
                  const allPlayersInLeagueRows = container.querySelectorAll(
                        ".singlePlayerInLeagueRow"
                  );

                  allPlayersInLeagueRows.forEach((singlePlayerInLeagueRow) => {
                        const challengeBtn = singlePlayerInLeagueRow.querySelector(".challengeBtn");
                        const addRecordBtn = singlePlayerInLeagueRow.querySelector(".addRecordBtn");

                        const challengerId = player.id;
                        const challengedId =
                              singlePlayerInLeagueRow.querySelector(".hiddenPlayerId").value;

                        // ADD RECORD BUTTON
                        addRecordBtn.addEventListener("click", () => {
                              // get score values from dropdowns
                              const set10 = singlePlayerInLeagueRow.querySelector(".select1").value;
                              const set11 = singlePlayerInLeagueRow.querySelector(".select2").value;
                              const set20 = singlePlayerInLeagueRow.querySelector(".select3").value;
                              const set21 = singlePlayerInLeagueRow.querySelector(".select4").value;
                              const set30 = singlePlayerInLeagueRow.querySelector(".select5").value;
                              const set31 = singlePlayerInLeagueRow.querySelector(".select6").value;

                              const newMatch = [set10, set11, set20, set21, set30, set31];
                              // console.log(challengerId, challengedId, newMatch);

                              const newRecordJSON = {
                                    winner: challengerId,
                                    loser: challengedId,
                                    match: newMatch,
                              };
                              fetch(
                                    `http://localhost:8080/api/player/${challengerId}/record/${challengedId}`,
                                    {
                                          method: "POST",
                                          headers: {
                                                "Content-type": "application/json",
                                          },
                                          body: JSON.stringify(newMatch),
                                    }
                              )
                                    .then((res) => res.json())
                                    .then((newPlayers) => {
                                          newPlayers.forEach((newPlayer) => {
                                                if (newPlayer.id == challengerId) {
                                                      makeHomePageFromSelectedPlayer(newPlayer, newPlayers)
                                                }
                                          });
                                    });
                        });

                        // CHALLENGE PLAYER BUTTON
                        challengeBtn.addEventListener("click", () => {
                              const newChallengeJson = {
                                    challengerId: challengerId,
                                    challengedId: challengedId,
                              };
                              fetch(
                                    `http://localhost:8080/api/player/${challengerId}/challenge/${challengedId}`, {
                                    method: "POST",
                                    headers: {
                                          "Content-type": "application/json",
                                    },
                                    body: JSON.stringify(newChallengeJson),
                              }
                              )
                                    .then((res) => res.json())
                                    .then((newChallenge) => {
                                          players.forEach((player) => {
                                                if (player.id == newChallenge.challengedId) {
                                                      console.log("A new Challenge has been sent to", player.name);
                                                }
                                          });
                                    });
                        });
                  });
                  // NAVBAR HOME BUTTON
                  const homeBtn = container.querySelector(".home-navigation");
                  homeBtn.addEventListener("click", () => {
                        makeHomeView();
                  });
            });
}
makeHomeView();