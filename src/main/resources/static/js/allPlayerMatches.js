export default function allPlayerMatches(player, players, allRecords) {
  let thisPlayer = player.name;
  let thisPlayerId = player.id;
  let winnerName = " ";
  let loserName = " ";

  return `
  <div class = "mt-3 allPlayerMatchesTable visually-hidden">
    <h3 class="text-center">All Matches</h3>
      <div class = "row mb-2 border-bottom">

        <div class = "col-3">
          <b>Winner</b>
        </div>
        <div class = "col-3">
          <b>Loser</b>
        </div>


        <div class = "col">
          <b>Set1</b>
        </div>
        <div class = "col">
          <b>Set2</b>
        </div>
        <div class = "col">
          <b>Set3</b>
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
          let set3 = record.match.slice(4,6).join("-");
          if(set3 == "0-0"){
            set3 = "";
          };
          return`
            <div class = "row mb-2 mt-2 border-bottom singleMatchRow">

              <div class = "col-3">
                <p class="fw-semibold">${winnerName}</p>
              </div>
              <div class = "col-3 border-end">
                <p class="fw-light">${loserName}</p>
              </div>


              <div class = "col">
                ${record.match.slice(0,2).join("-")}
              </div>
              <div class = "col">
                ${record.match.slice(2,4).join("-")}
              </div>
              <div class = "col">
                  ${set3}              
              </div>
            </div>
          `
        }

    }).join("")
    }
  </div>

  `
}