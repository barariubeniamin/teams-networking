function getTeamHTML(team) {
  return `
  <tr>
    <td>${team.promotion}</td>
    <td>${team.members}</td>
    <td>${team.name}</td>
    <td> 
      <a href="${team.url}">bbeni</a>
    </td>
    <td>x e</td>
  </tr>`;
}

function displayTeams(teams) {
  var teamsHTML = teams.map(function (team) {
    console.info(team);
    return getTeamHTML(team);
  });
  console.warn("teamsHTML", teamsHTML);

  // afisare
  document.querySelector("table tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      return r.json();
    })
    .then(function (teams) {
      displayTeams(teams);
    });
}

loadTeams();
