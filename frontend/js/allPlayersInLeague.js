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
                <tr>
                  <td>${player.name}</td>
                  <td class = "challengeBtn btn">Challenge</td>
                  <td>Add record</td>
                </tr>
              `;
          }
        }).join("")
      }
        </tbody>
      </table>
    </div>
  `;
}
