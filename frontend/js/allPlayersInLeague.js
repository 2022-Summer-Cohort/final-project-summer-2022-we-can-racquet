export default function allPlayersInLeague(player, players) {
  // console.log(players)
  let leagueToMatch = player.league;
  let playerName = player.name;

  return `
    <div class="allPlayersInLeague">

      <h3>Other players in ${leagueToMatch}</h3>
   
      ${players.map((playerData) => {
        if (playerData.league == leagueToMatch && playerData.name != playerName) {
          // console.log(playerData)
          return `
                <div class = "playerTable">
                  <input type="hidden" class="id_field" value="${playerData.id}">
                  <div>${playerData.name} - ${playerData.id}</div>
                  <div class = "challengeBtn btn">Challenge</div>

                  <div class = "recordBtn btn" data-bs-toggle="modal" data-bs-target="#exampleModal${playerData.id}">Add Record</div>

                  <div class="modal fade" id="exampleModal${playerData.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    
                        <div class="modal-content">
              
                          <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Add New Record</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
              
                          <div class="modal-body">
                              <form>
                                <select class="form-select select1" aria-label="Default select example">
                                  <option selected disabled>Open this select menu</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                </select>
                              </form>
                          </div>
              
                          <div class="modal-footer">
                              <button type="button" class="newRecordBtn btn btn-primary" data-bs-dismiss="modal">Submit Scores</button>
                          </div>
              
                        </div>
              
                    </div>
                  </div>

                </div>





              `;
          }
        }).join("")
      }
 
    </div>







  `;
}
