import home from "./home.js";
import header from "./header.js";
import login from "./login.js";
import allPlayersInLeague from "./allPlayersInLeague.js";
import allPlayerMatches from "./allPlayerMatches.js";
import allPlayerChallenges from "./allPlayerChallenges.js";
import guestView from "./guestView.js";

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
      const newPlayerBtn = container.querySelector(".newPlayerBtn");

      const newPlayerName = container.querySelector("#player-name");
      const newPlayerEmail = container.querySelector("#player-email");
      const newPlayerPhoneNumber = container.querySelector("#player-phoneNumber");

      newPlayerBtn.addEventListener("click", () => {
            const newPlayerJson = {
                  "name": newPlayerName.value,
                  "email": newPlayerEmail.value,
                  "phoneNumber": newPlayerPhoneNumber.value,
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
                  })
      })
}

function makeGuestViewFromSelectedPlayer(playerId, players, allChallenges, allRecords) {
      container.innerHTML = header();
      container.innerHTML += guestView(playerId, players, allChallenges, allRecords);


      const allGuestChalleneges = container.querySelectorAll(".allChallengesInGuest");
      allGuestChalleneges.forEach((oneGuestChallenge) => {
            const guestChallengeName = oneGuestChallenge.querySelector(".challengesNameGuest");
            const guestChallengeId = oneGuestChallenge.querySelector(".hiddenChallengerGuestId").value;
            guestChallengeName.addEventListener("click", () => {
                  makeGuestViewFromSelectedPlayer(guestChallengeId,players,allChallenges,allRecords);
            });
      }) 

      const allGuestRecords = container.querySelectorAll(".allRecordsInGuest");
      allGuestRecords.forEach((oneGuestRecord) => {
            const guestRecordWinnerName = oneGuestRecord.querySelector(".recordWinnerName");
            const guestRecordLoserName = oneGuestRecord.querySelector(".recordLoserName");
            const guestRecordWinnerId = oneGuestRecord.querySelector(".hiddenWinnerId").value;
            const guestRecordLoserId = oneGuestRecord.querySelector(".hiddenLoserId").value;

            guestRecordWinnerName.addEventListener("click", () => {
                  makeGuestViewFromSelectedPlayer(guestRecordWinnerId,players,allChallenges,allRecords);
            });

            guestRecordLoserName.addEventListener("click", () => {
                  makeGuestViewFromSelectedPlayer(guestRecordLoserId,players,allChallenges,allRecords);
            });

      })

      // NAVBAR HOME BUTTON
      const homeBtn = container.querySelector(".home-navigation");
      homeBtn.addEventListener("click", () => {
            makeHomeView();
      });
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

                        const challengedName = singlePlayerInLeagueRow.querySelector(".challengedName");

                        challengedName.addEventListener("click", () => {
                              fetch(`http://localhost:8080/api/record`)
                                    .then((res) => res.json())
                                    .then((allRecordsTemp) => {
                                          makeGuestViewFromSelectedPlayer(challengedId, players, allChallenges, allRecordsTemp);
                                    })

                        })


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
                        const challengedId = singlePlayerInLeagueRow.querySelector(".hiddenPlayerId").value;


                        const challengedName = singlePlayerInLeagueRow.querySelector(".challengedName");

                        challengedName.addEventListener("click", () => {
                              fetch(`http://localhost:8080/api/challenge`)
                                    .then((res) => res.json())
                                    .then((allChallengeTemp) => {
                                          makeGuestViewFromSelectedPlayer(challengedId, players, allChallengeTemp, allRecords);
                                    })

                        })

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
            });
}
makeHomeView();