export default function allPlayerChallenges(player, players, allChallenges) {
    let thisPlayer = player.name;
    let thisPlayerId = player.id;
    let challengerName, challengedName, challengerEmail, challengedEmail = "";
    
    return `
    <div class = "mt-3 allPlayerChallengesTable visually-hidden">
        <h3 class="text-center">All Challenges</h3>
            <div class="row mb-2 border-bottom">
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
                        challengedEmail = player.email;
                    } 
                    if(challenge.challengerId == player.id){
                        challengerName = player.name;
                        challengerEmail = player.email;
                    }
                });
     
                return`
                    <div class = "challengeRow row mb-4"> 
                        <div class = "col-5">
                            ${challengerName}
                        </div>

                        <div class = "col mb-1">
                            <button type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#acceptChallengeBtn${challenge.challengerId}" 
                                class="btn btn-sm btn-outline-success acceptChallengeBtn">
                                Accept
                            </button> 
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

                    <div class="modal fade" id="acceptChallengeBtn${challenge.challengerId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Schedule a match!</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name" value="${challengerEmail}">
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text" rows="5">Hey ${challengerName}, this is ${thisPlayer} from the ${player.league} league! \n\nLet's get ready to rumble!</textarea>
                                </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Send message</button>
                            </div>
                            </div>
                        </div>
                    </div>

                `
            }
        }).join("")

        }

    </div>
    `




}

