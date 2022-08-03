export default function allPlayersInLeague(player, players) {
  let leagueToMatch = player.league;

  return `

    <div class="allPlayersInLeague">
      <h3>Other players in ${leagueToMatch}</h3>
      
      <table class="table table-striped">
      <thead>
      <tr>
      <th scope="col">Name</th>
      <th scope="col">League</th>
      <th scope="col">Phone</th>
      </tr>
      </thead>
      <tbody>
      ${players.map((player) => {
        if (player.league == leagueToMatch) {
          return `
                <tr>
                  <td>${player.name}</td>
                  <td>${player.league}</td>
                  <td>${player.phoneNumber}</td>
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
