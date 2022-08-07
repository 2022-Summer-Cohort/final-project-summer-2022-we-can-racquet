export default function allPlayersInLeague(player, players) {
  let leagueToMatch = player.league;
  let playerName = player.name;

  return `
    <div class="allPlayersInLeagueTable">

      <h3>All players in ${leagueToMatch} League</h3>
   
      ${players
        .map((player) => {
          if (player.league == leagueToMatch && player.name != playerName) {
            return `
                <div class = "singlePlayerInLeagueRow">

                  <div class = "row border-bottom border-dark border-opacity-50">
                    <div class = "col">${player.name}</div>
                    <div class = "challengeBtn btn col">Challenge</div>
                    <div class = "btn col" data-bs-toggle="modal" data-bs-target="#exampleModal${player.id}">Add Record</div>
                    <input type="hidden" class="hiddenPlayerId" value="${player.id}">
                  </div>

                  <div class="modal fade" id="exampleModal${player.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div class="modal-dialog">
                        <div class="modal-content">

                          <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Add New Record</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
            
                          <div class="modal-body">

                            <div class="row">
                              <h5 class="col">Set 1:</h5>
                              <form class="col">
                                <select class="form-select select1">
                                  <option selected disabled>0</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                </select>
                              </form>
                              <form class="col">
                                <select class="form-select select2">
                                  <option selected disabled>0</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                </select>
                              </form>
                            </div>  

                            <div class="row">
                              <h5 class="col">Set 2:</h5>
                              <form class="col">
                                <select class="form-select select3">
                                  <option selected disabled>0</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                </select>
                              </form>
                              <form class="col">
                                <select class="form-select select4">
                                  <option selected disabled>0</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                </select>
                              </form>
                            </div>  

                            <div class="row">
                              <h5 class="col">Set 3:</h5>
                              <form class="col">
                                <select class="form-select select5">
                                  <option selected disabled>0</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                </select>
                              </form>
                              <form class="col">
                                <select class="form-select select6">
                                  <option selected disabled>0</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                </select>
                              </form>
                            </div>  
                            
                          </div>
              
                          <div class="modal-footer">
                              <button type="button" class="addRecordBtn btn btn-primary" data-bs-dismiss="modal">Submit Scores</button>
                          </div>
              
                        </div>
                    </div>
                    
                  </div>

                </div>





              `;
          }
        })
        .join("")}
 
    </div>







  `;
}
