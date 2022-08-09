export default function home(player) {
    return `
        <div class = "player">
            <img class="logoRounded" src="./img/avatars/20.jpg" alt="" srcset="">
            <p class = "name"> ${player.name}</p>
            <p class = "league"> ${player.league}</p>
            <p class = "avatarUrl"> ${player.avatarUrl}</p>
            <p class = "email"> ${player.email}</p>
            <p class = "phone"> ${player.phoneNumber}</p>
            <input type="hidden" class="id_field" value="${player.id}">  

            <button type="button" class="playersInLeagueBtn btn btn-outline-primary">Players in league</button>
            <button type="button" class="challengesBtn btn btn-outline-primary">Challenges</button>
            <button type="button" class="recordsBtn btn btn-outline-primary">Records</button>


        </div>
        `;

}