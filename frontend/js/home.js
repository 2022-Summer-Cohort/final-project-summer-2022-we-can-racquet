export default function home(player) {
    return `
        <div class = "playerProfile">

            <h6 class = "profileLeagueText"> ${player.league}</h6>

            <img class="logoRounded mx-auto d-block" src="${player.avatarUrl}" alt="player avatar">

            <div class="row text-center mt-4">
                <div class="col">
                    <h1 class = "display-2"> ${player.name}</h1>
                </div>
      
            </div>

            <div class="row mt-1 text-center">
                <div class="col">
                    <p>${player.email}</p>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <p>${player.phoneNumber}</p>
                </div>
            </div>

            <input type="hidden" class="id_field" value="${player.id}">  

        </div>

        <div class="playerButtons mt-3 text-center">
            <button type="button" class="playersInLeagueBtn btn btn-outline-primary">Players in league</button>
            <button type="button" class="challengesBtn btn btn-outline-primary">Challenges</button>
            <button type="button" class="recordsBtn btn btn-outline-primary">Records</button>
        </div>
        
        `;

}