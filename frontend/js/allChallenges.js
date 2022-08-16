export default function navbarAllChallenges(players, allChallenges) {

    let challengerArray = [];
    let challengedArray = [];
    let leagueArray = [];

    return`
        <h1 class="text-center mt-3 mb-5 ">Challenge Feed</h1>
            <div class="row border-bottom">
                <div class="col-2">
                    <p class="fw-light">League</p>
                </div>
                <div class="col">
                    <p class="fw-bold text-end">Challenger</p>
                </div>
                <div class="col">
                    <p class="fw-light">Challenged</p>
                </div>
            </div>      
        ${allChallenges.map(challenge => {

            let league = "";
            let challengedName = "";
            let challengerName = "";

            players.forEach(player =>{
                if(challenge.challengedId == player.id){
                    challengedName = player.name
                } else if(challenge.challengerId == player.id){
                    challengerName = player.name;
                    league = player.league;
                }
                
            })
            
            challengedArray.push(challengedName);
            challengerArray.push(challengerName);
            leagueArray.push(league);

        }).join("")}

        ${challengerArray.reverse().map((element, index) => {
            return`
                <div class="row border-bottom">
                    <div class="col-2">
                        <p class="rubik">${leagueArray.reverse()[index]}</p>
                    </div>
                    <div class="col">
                        <p class="fw-bold text-end">${element}</p>
                    </div>
                    <div class="col">
                        <p class="fw-light">${challengedArray.reverse()[index]}</p>
                    </div>
                </div>            
            `
        }).join("")}

    `
}

