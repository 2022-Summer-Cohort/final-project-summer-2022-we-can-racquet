export default function allPlayerMatches(player, players, allRecords) {
  let thisPlayer = player.name;
  let thisPlayerId = player.id;
  let winnerName = " ";
  let loserName = " ";

  // console.log(thisPlayerId, record.winner, record.loser)
  // console.log(thisPlayerId == record.winner, record.loser)
  // console.log(allRecords)


  return `
  <div class = "mt-3 allPlayerMatchesTable visually-hidden">
    <h3>All Matches</h3>
      <div class = "row mb-2">
        <div class = "col-2">
          <b>Winner</b>
        </div>
        <div class = "col-1">
        </div>
        <div class = "col-2">
          <b>Loser</b>
        </div>

        <div class = "col-1"></div>

        <div class = "col">
          <b>Set 1</b>
        </div>
        <div class = "col">
          <b>Set 2</b>
        </div>
        <div class = "col">
          <b>Set 3</b>
        </div>
      </div>

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
              <div class = "col-2">
                ${winnerName}
              </div>
              <div class = "col-1">
                
              </div>
              <div class = "col-2">
                ${loserName}
              </div>

              <div class = "col-1"></div>

              <div class = "col">
                ${record.match.slice(0,2).join("-")}
              </div>
              <div class = "col">
                ${record.match.slice(2,4).join("-")}
              </div>
              <div class = "col">
                  ${record.match.slice(4,6).join("-")}              
              </div>
            </div>
          `
        }

    }).join("")
    }
  </div>

  `
}