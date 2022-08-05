export default function allPlayerMatches(player) {
  let thisPlayer = player.name;
  let thisPlayerId = player.id;
  const arr = [1,2,3];
  return `

      <h1>${thisPlayer}'s Match history</h1>

      ${player.records}

      ${arr}  
      





        `;
}
