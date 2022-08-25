export default function navbarAllMatches(players, allRecords) {

  let winnerArray = [];
  let loserArray = [];
  let leagueArray = [];
  let set1Array = [];
  let set2Array = [];
  let set3Array = [];

  return`
    <h1 class="text-center mt-3 mb-5 ">Matches Feed</h1>

      <div class="row border-bottom">

        <div class="col-1">
          <p class="fw-light"></p>
        </div>
        <div class = "col-3">
          <b>Winner</b>
        </div>
        <div class = "col-3 fw-light">
          <b>Loser</b>
        </div>
        <div class = "col">
          <b>Set1</b>
        </div>
        <div class = "col">
          <b>Set2</b>
        </div>
        <div class = "col">
          <b>Set3</b>
        </div>

      </div>  
      

      ${allRecords.map(record => {
        let winner = [];
        let loser = [];
        let league = [];
        let set1 = [];
        let set2 = [];


        players.forEach(player => {
          if(record.winner == player.id){
            winner = player.name;
            league = player.league;
          } else if(record.loser == player.id){
            loser = player.name;
          }
        })

        set1 = record.match.slice(0,2).join("-");
        set2 = record.match.slice(2,4).join("-");

        let set3 = record.match.slice(4, 6).join("-");
        if (set3 == "0-0") {
          set3 = "";
        };

        // console.log(winner, loser, league, set1, set2, set3)

        winnerArray.push(winner);
        loserArray.push(loser);
        leagueArray.push(league);
        set1Array.push(set1);
        set2Array.push(set2);
        set3Array.push(set3);

      }).join("")}

      ${winnerArray.reverse().map((element, index) => {
        return`
          <div class="row border-bottom">

            <div class="col-1">
              <p class="fw-light rubikAllMatches">${leagueArray.reverse()[index]}</p>
            </div>
            <div class = "col-3">
              <b>${element}</b>
            </div>
            <div class = "col-3 fw-light">
              <p>${loserArray.reverse()[index]}</p>
            </div>
            <div class = "col">
              <p>${set1Array.reverse()[index]}</p>
            </div>
            <div class = "col">
              <p>${set2Array.reverse()[index]}</p>
            </div>
            <div class = "col">
              <p>${set3Array.reverse()[index]}</p>
            </div>

          </div>  
        
        
        `


      }).join("")}



      `

}