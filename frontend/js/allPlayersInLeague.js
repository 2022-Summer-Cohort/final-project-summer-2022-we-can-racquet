export default function allPlayersInLeague(player, players) {
  let leagueToMatch = player.league;
  let playerName = player.name;

  return `
    <div class="allPlayersInLeague">
      <h3>Other players in ${leagueToMatch}</h3>
      
      <table class="table table-striped">
      <thead>
      <tr>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      ${players.map((player) => {
        if (player.league == leagueToMatch && player.name != playerName) {
          return `
                <tr class = "playerTable">
                  <td>${player.name}</td>
                  <td class = "challengeBtn btn">Challenge</td>
                  <td class = "recordBtn btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Record</td>
                  <input type="hidden" class="id_field" value="${player.id}">
                </tr>
              `;
          }
        }).join("")
      }
        </tbody>
      </table>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add New Record</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
              <select class="form-select select1"aria-label="Default select example">
                <option selected disabled>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <select class="form-select select2" aria-label="Default select example">
                <option selected disabled>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <select class="form-select" aria-label="Default select example">
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
  `;
}
