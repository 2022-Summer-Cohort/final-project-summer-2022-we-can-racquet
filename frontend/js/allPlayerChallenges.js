export default function allPlayerChallenges(player, players, allChallenges) {
    let thisPlayer = player.name;
    let thisPlayerId = player.id;
    let challengerName, challengedName = "";
    
    return `
    <div class = "mt-3 allPlayerChallengesTable visually-hidden">
        <h3>All Challenges</h3>
            <div class="row mb-2">
                <div class="col">
                    <b>Challenger</b>
                </div>
                <div class="col">
                </div>
            </div>

        ${allChallenges.map((challenge) => {
            if(thisPlayerId == challenge.challengedId){
            // if(thisPlayerId == challenge.challengedId || thisPlayerId == challenge.challengerId){
                players.forEach(player => {
                    if(challenge.challengedId == player.id){
                        challengedName = player.name;
                    } 
                    if(challenge.challengerId == player.id){
                        challengerName = player.name;
                        
                    }
                });
     

                return`
                    <div class = "challengeRow row mb-2"> 
                        <div class = "col">
                            ${challengerName}
                        </div>
                        <div class = "col mb-1">
                            <button type="button" class="acceptChallengeBtn btn btn-sm btn-outline-secondary">Accept</button> 
                        </div>
                        <div class = "col mb-1">
                            <button type="button" class="declineChallengeBtn btn btn-sm btn-outline-danger">Decline</button> 
                        </div>

                        <input type="hidden" class="hiddenChallengerName" value="${challengerName}">
                        <input type="hidden" class="hiddenChallengeId" value="${challenge.id}">
                        <input type="hidden" class="hiddenChallengerId" value="${challenge.challengerId}">
                        <input type="hidden" class="hiddenChallengedName" value="${challengedName}">
                        <input type="hidden" class="hiddenChallengedId" value="${challenge.challengedId}">

                    </div>
                `
            }
        }).join("")

        }

    </div>
    `
}

