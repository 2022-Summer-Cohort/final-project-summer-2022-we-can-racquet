export default function allPlayerChallenges(player, players, allChallenges) {

    return `
    <div class = "allPlayerChallenges">
    <h3>All Challenges</h3>

    ${allChallenges.map((challenge) => {
        if (challenge.challengedId == player.id) {
            // players.forEach((onePlayer) => {
            //     if (onePlayer.id == challenge.challengerId) {
            //         return `
            //         ${ onePlayer.name }
            //         `
            //     }
            // });
            return`
            ${challenge.challengerId};
                ${challenge.challengedId};

            `
        }
        // return`
        // ${challenge.challengedId};
        // ${challenge.challengerId};
        // `

    })

        }
    </div>
    `
}

