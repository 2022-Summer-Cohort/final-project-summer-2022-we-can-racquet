export default function allPlayerMatches(player, players, allRecords) {
  let thisPlayer = player.name;
  let thisPlayerId = player.id;
  let winnerName = " ";
  let loserName = " ";

  // console.log(thisPlayerId, record.winner, record.loser)
  // console.log(thisPlayerId == record.winner, record.loser)
  // console.log(allRecords)


  return `
  <div class = "allPlayerMatches">
    <h3>All Matches</h3>


    ${allRecords.map((record) => {
        if(thisPlayerId == record.winner || thisPlayerId == record.loser){
          players.forEach(onePlayer => {
            if (onePlayer.id == record.winner) {
              winnerName = onePlayer.name;
            } else if (onePlayer.id == record.loser) {
              loserName = onePlayer.name;
            }
          });
          return`
            <div class = "row">
              <div class = "col">
                ${winnerName}
              </div>
              <div class = "col">
              ${loserName}
              </div>
              <div class = "col">
                ${record.match.join("")}
              </div>
            </div>
          `
        }

    }).join("")
    }
  </div>

  `
}