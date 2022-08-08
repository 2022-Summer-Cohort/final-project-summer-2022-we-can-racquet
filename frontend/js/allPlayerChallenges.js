export default function allPlayerChallenges(player, players, allChallenges) {
    let thisPlayer = player.name;
    let thisPlayerId = player.id;

    return `
    <div class = "allPlayerChallenges">
        <h3>All Challenges</h3>

        ${allChallenges.map((challenge) => {
            if(thisPlayerId == challenge.challengedId || thisPlayerId == challenge.challengerId){
                return`
                    <div class = "row">
                        <div class = "col">
                        ${challenge.challengerId};
                        </div>
                        <div class = "col">
                        ${challenge.challengedId};
                        </div>
                    </div>
                `
            }
        }).join("")

        }

    </div>
    `
}

