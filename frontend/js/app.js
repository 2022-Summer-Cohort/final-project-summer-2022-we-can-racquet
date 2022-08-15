import home from "./home.js";
import header from "./header.js";
import login from "./login.js";
import allPlayersInLeague from "./allPlayersInLeague.js";
import allPlayerMatches from "./allPlayerMatches.js";
import allPlayerChallenges from "./allPlayerChallenges.js";
import navbarAllChallenges from "./allChallenges.js";
import allMatches from "./allMatches.js";

import acceptChallenge from "./acceptChallenge.js";

const container = document.querySelector(".container");




// Sends PLAYERS to makeLoginPageFromJSON
function makeHomeView() {
      fetch("http://localhost:8080/api/player")
            .then(res => res.json())
            .then(players => {
                  makeLoginPageFromJSON(players);
            })
}

// Populates PLAYERS on Login page
function makeLoginPageFromJSON(players) {

      container.innerHTML = login(players);

      // SUBMIT BUTTON (select existing player)
      const submitBtn = container.querySelector(".submitBtn");

      submitBtn.addEventListener("click", () => {
            const selectedPlayer = container.querySelector(".playerNameSelected");
            fetch(`http://localhost:8080/api/player/${selectedPlayer.value}`)
                  .then(res => res.json())
                  .then(onePlayer => {

                        if (onePlayer.name === undefined) {
                              // alert("Select a valid player!")
                              console.log("Select a valid player!")
                        } else {
                              makeHomePageFromSelectedPlayer(onePlayer, players);
                        }

                  })
      })

      // NEW PLAYER BUTTON (create new player)
      const newPlayerBtn = container.querySelector(".newPlayerBtn");
      const newPlayerName = container.querySelector("#player-name");
      const newPlayerEmail = container.querySelector("#player-email");
      const newPlayerPhoneNumber = container.querySelector("#player-phoneNumber");
      let randomNumber = Math.floor(Math.random() * 21)
      let imgUrl = "./img/avatars/";

      newPlayerBtn.addEventListener("click", () => {
            const newPlayerJson = {
                  "name": newPlayerName.value,
                  "email": newPlayerEmail.value,
                  "phoneNumber": newPlayerPhoneNumber.value,
                  "league": "3.0",
                  "avatarUrl": imgUrl.concat(randomNumber, ".jpg"),
            }
            if(!newPlayerJson.name == "" && !newPlayerJson.email == "" && !newPlayerJson.phoneNumber == ""){
                  fetch(`http://localhost:8080/api/player`, {
                              method: 'POST',
                              headers: {
                                    'Content-type': 'application/json'
                              },
                              body: JSON.stringify(newPlayerJson)
                        })
                        .then(res => res.json())
                        .then(newPlayer => {
                              console.log(newPlayerJson.name, "created!")
                              makeHomeView();
                        })
            } else {
                  console.log("Fill out all the fields please!")
            }
      })
}

// Create homepage for PLAYER
function makeHomePageFromSelectedPlayer(player, players) {

      container.innerHTML = header();
      container.innerHTML += home(player);
      container.innerHTML += allPlayersInLeague(player, players);

      // CHALLENGE NOTIFICATION
      fetch(`http://localhost:8080/api/challenge`)
            .then((res) => res.json())
            .then((allChallenges) => {
                  container.innerHTML += allPlayerChallenges(player, players, allChallenges);

                  // BUTTONS TO HIDE AND DISPLAY TABLES

                  // CONSTS FOR DISPLAY TABLES
                  const allPlayersInLeagueTable = container.querySelector(".allPlayersInLeagueTable");
                  const allPlayerChallengesTable = container.querySelector(".allPlayerChallengesTable");
                  const allPlayerMatchesTable = container.querySelector(".allPlayerMatchesTable");

                  const playersInLeagueBtn = container.querySelector(".playersInLeagueBtn");
                  const challengesBtn = container.querySelector(".challengesBtn");
                  const recordsBtn = container.querySelector(".recordsBtn");

                  playersInLeagueBtn.addEventListener("click", () => {
                        allPlayersInLeagueTable.classList.remove("visually-hidden");
                        playersInLeagueBtn.classList.add('active');

                        allPlayerChallengesTable.classList.add("visually-hidden");
                        allPlayerMatchesTable.classList.add("visually-hidden");
                        challengesBtn.classList.remove('active');
                        recordsBtn.classList.remove('active');
                  });

                  challengesBtn.addEventListener("click", () => {
                        allPlayerChallengesTable.classList.remove("visually-hidden");
                        challengesBtn.classList.add('active');

                        allPlayersInLeagueTable.classList.add("visually-hidden");
                        allPlayerMatchesTable.classList.add("visually-hidden");
                        recordsBtn.classList.remove('active');
                        playersInLeagueBtn.classList.remove('active');
                  });

                  recordsBtn.addEventListener("click", () => {
                        allPlayerMatchesTable.classList.remove("visually-hidden");
                        recordsBtn.classList.add('active');

                        allPlayerChallengesTable.classList.add("visually-hidden");
                        allPlayersInLeagueTable.classList.add("visually-hidden");
                        challengesBtn.classList.remove('active');
                        playersInLeagueBtn.classList.remove('active');
                  });
                  // ALL PLAYERS IN LEAGUE TABLE (Challenge, Add record buttons)
                  const allPlayersInLeagueRows = container.querySelectorAll(".singlePlayerInLeagueRow");

                  //ACCEPT/DECLINE CHALLENGE BUTTON
                  const allChallengeRows = container.querySelectorAll(".challengeRow");
                  allChallengeRows.forEach((challengeRow) => {
                        const challengeId = challengeRow.querySelector(".hiddenChallengeId");
                        const challengerId = challengeRow.querySelector(".hiddenChallengerId").value;
                        const declineChallengeBtn = challengeRow.querySelector(".declineChallengeBtn");
                        // const acceptChallengeBtn = challengeRow.querySelector(".acceptChallengeBtn");

                        declineChallengeBtn.addEventListener("click", () => {
                              fetch(`http://localhost:8080/api/${challengeId.value}/deleteChallenge`, {
                                          method: 'DELETE'
                                    })
                                    .then(res => res.json())
                                    .then((newPlayers) => {
                                          makeHomePageFromSelectedPlayer(player, newPlayers);
                                    });
                        })

                        // acceptChallengeBtn.addEventListener("click", () => {
                        //       // makeHomePageFromSelectedPlayer(player, players);
                        //       console.log("")

                        //       // container.innerHTML += acceptChallenge(challengerId, players);
                        // })
                  })

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
                              
                        // FOR CONSOLE.LOG
                        let winner, loser = "";
                        // get player names
                        players.forEach((player) => {
                              if (player.id == challengerId) {
                                    winner = player.name;
                              }
                              if (player.id == challengedId) {
                                    loser = player.name;
                              }
                        });
                        // console.log("Winner:", challengerId, "Loser:", challengedId);
                        console.log("Winner:", winner, "Loser:", loser);
                        const set1 = [set10, "-", set11];
                        const set2 = [set20, "-", set21];
                        const set3 = [set30, "-", set31];
                        console.log(
                              "Set1:",
                              set1.join(""),
                              ", Set2:",
                              set2.join(""),
                              ", Set3:",
                              set3.join("")
                        );
                        const newRecordJSON = {
                              winner: challengerId,
                              loser: challengedId,
                              match: newMatch,
                        };
                        fetch(`http://localhost:8080/api/player/${challengerId}/record/${challengedId}`, {
                                    method: "POST",
                                    headers: {
                                          "Content-type": "application/json",
                                    },
                                    body: JSON.stringify(newMatch),
                              })
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
                  // NAVBAR CHALLENGES BUTTON
                  const navbarChallengesBtn = container.querySelector(".challenge-navigation");
                  navbarChallengesBtn.addEventListener("click", () => {
                        console.log("challenge")
                        makeChallengesView(players, allChallenges);
                  });
                  // NAVBAR MATCHES BUTTON
                  const navbarRecordsBtn = container.querySelector(".records-navigation");
                  navbarRecordsBtn.addEventListener("click", () => {
                        makeRecordsView();
                  });

                  function makeChallengesView() {

                        container.innerHTML = header();
                        container.innerHTML += navbarAllChallenges(players);
                        console.log('top')

                        // NAVBAR HOME BUTTON
                        const homeBtn = container.querySelector(".home-navigation");
                        homeBtn.addEventListener("click", () => {
                              makeHomeView();
                        });
                        // NAVBAR MATCHES BUTTON
                        const navbarRecordsBtn = container.querySelector(".records-navigation");
                        navbarRecordsBtn.addEventListener("click", () => {
                              makeRecordsView();
                        });

                  }
                        



            });


      ////////////////////////////////////////////////////////////////////////////////     

      fetch(`http://localhost:8080/api/record`)
            .then((res) => res.json())
            .then((allRecords) => {
                  // console.log(allRecords);
                  container.innerHTML += allPlayerMatches(player, players, allRecords);

                  // ALL PLAYERS IN LEAGUE TABLE (Challenge, Add record buttons)
                  const allPlayersInLeagueRows = container.querySelectorAll(
                        ".singlePlayerInLeagueRow"
                  );


                  // BUTTONS TO HIDE AND DISPLAY TABLES

                  // CONSTS FOR DISPLAY TABLES
                  const allPlayersInLeagueTable = container.querySelector(".allPlayersInLeagueTable");
                  const allPlayerChallengesTable = container.querySelector(".allPlayerChallengesTable");
                  const allPlayerMatchesTable = container.querySelector(".allPlayerMatchesTable");

                  const playersInLeagueBtn = container.querySelector(".playersInLeagueBtn");
                  const challengesBtn = container.querySelector(".challengesBtn");
                  const recordsBtn = container.querySelector(".recordsBtn");

                  // LISTENERS FOR BUTTONS
                  playersInLeagueBtn.addEventListener("click", () => {
                        allPlayersInLeagueTable.classList.remove("visually-hidden");
                        playersInLeagueBtn.classList.add('active');

                        allPlayerChallengesTable.classList.add("visually-hidden");
                        allPlayerMatchesTable.classList.add("visually-hidden");
                        challengesBtn.classList.remove('active');
                        recordsBtn.classList.remove('active');
                  });

                  challengesBtn.addEventListener("click", () => {
                        allPlayerChallengesTable.classList.remove("visually-hidden");
                        challengesBtn.classList.add('active');

                        allPlayersInLeagueTable.classList.add("visually-hidden");
                        allPlayerMatchesTable.classList.add("visually-hidden");
                        recordsBtn.classList.remove('active');
                        playersInLeagueBtn.classList.remove('active');
                  });

                  recordsBtn.addEventListener("click", () => {
                        allPlayerMatchesTable.classList.remove("visually-hidden");
                        recordsBtn.classList.add('active');

                        allPlayerChallengesTable.classList.add("visually-hidden");
                        allPlayersInLeagueTable.classList.add("visually-hidden");
                        challengesBtn.classList.remove('active');
                        playersInLeagueBtn.classList.remove('active');
                  });


                  //ACCEPT/DECLINE CHALLENGE BUTTON
                  const allChallengeRows = container.querySelectorAll(".challengeRow");
                  allChallengeRows.forEach((challengeRow) => {
                        const challengeId = challengeRow.querySelector(".hiddenChallengeId");
                        const challengerId = challengeRow.querySelector(".hiddenChallengerId").value;
                        const declineChallengeBtn = challengeRow.querySelector(".declineChallengeBtn");
                        // const acceptChallengeBtn = challengeRow.querySelector(".acceptChallengeBtn");

                        declineChallengeBtn.addEventListener("click", () => {
                              fetch(`http://localhost:8080/api/${challengeId.value}/deleteChallenge`, {
                                          method: 'DELETE'
                                    })
                                    .then(res => res.json())
                                    .then((newPlayers) => {
                                          makeHomePageFromSelectedPlayer(player, newPlayers);
                                    });
                        })

                  })

                  allPlayersInLeagueRows.forEach((singlePlayerInLeagueRow) => {
                        const challengeBtn = singlePlayerInLeagueRow.querySelector(".challengeBtn");
                        const addRecordBtn = singlePlayerInLeagueRow.querySelector(".addRecordBtn");

                        const challengerId = player.id;
                        const challengedId = singlePlayerInLeagueRow.querySelector(".hiddenPlayerId").value;

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

                              // FOR CONSOLE.LOG
                              let winner, loser = "";
                              // get player names
                              players.forEach((player) => {
                                    if (player.id == challengerId) {
                                          winner = player.name;
                                    }
                                    if (player.id == challengedId) {
                                          loser = player.name;
                                    }
                              });
                              // console.log("Winner:", challengerId, "Loser:", challengedId);
                              console.log("Winner:", winner, "Loser:", loser);
                              const set1 = [set10, "-", set11];
                              const set2 = [set20, "-", set21];
                              const set3 = [set30, "-", set31];
                              console.log(
                                    "Set1:",
                                    set1.join(""),
                                    ", Set2:",
                                    set2.join(""),
                                    ", Set3:",
                                    set3.join("")
                              );

                              const newRecordJSON = {
                                    winner: challengerId,
                                    loser: challengedId,
                                    match: newMatch,
                              };
                              fetch(
                                          `http://localhost:8080/api/player/${challengerId}/record/${challengedId}`, {
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
                  // NAVBAR CHALLENGES BUTTON
                  const navbarChallengesBtn = container.querySelector(".challenge-navigation");
                  navbarChallengesBtn.addEventListener("click", () => {
                        makeChallengesView();
                  });
                  // NAVBAR MATCHES BUTTON
                  const navbarRecordsBtn = container.querySelector(".records-navigation");
                  navbarRecordsBtn.addEventListener("click", () => {
                        makeRecordsView();
                  });

                  function makeChallengesView() {

                        container.innerHTML = header();

                        fetch(`http://localhost:8080/api/challenge`)
                              .then((res) => res.json())
                              .then((allChallenges) => {
                                    container.innerHTML += navbarAllChallenges(players, allChallenges);
                                    console.log("bot")

                              // NAVBAR HOME BUTTON
                              const homeBtn = container.querySelector(".home-navigation");
                              homeBtn.addEventListener("click", () => {
                                    makeHomeView();
                              });
                              // NAVBAR MATCHES BUTTON
                              const navbarRecordsBtn = container.querySelector(".records-navigation");
                              navbarRecordsBtn.addEventListener("click", () => {
                                    makeRecordsView();
                              });




                              });

                  }








            });
}
makeHomeView();