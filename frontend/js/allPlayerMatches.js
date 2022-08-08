export default function allPlayerMatches(player,players) {
  let thisPlayer = player.name;
  let thisPlayerId = player.id;
  const arr = [7,8,9];

  fetch(`http://localhost:8080/api/record`)
  .then((res) => res.json())
  .then((allRecords) => {
        allRecords.forEach((record) => {
              if(thisPlayerId == record.winner || thisPlayerId == record.loser) {
                console.log(record);
                return `
                  <h2>match</h2>
                `
                console.log(record);
              }
        });
  });

  // return `

  //     <h1>${thisPlayer}'s Match history</h1>


  //     ${arr}  
      





  //       `;
}
