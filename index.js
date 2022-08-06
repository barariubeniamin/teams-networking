function displayTeams(teams) {
  console.warn("display", teams);
  var teamsHTML = "";
  teams.forEach(function (team) {
    console.info(team);
    teamsHTML += `
    <tbody>
    <tr>
      <td>${team.promotion}</td>
      <td>${team.members}</td>
      <td>${team.name}</td>
      <td>
        <a href="${team.url}">bbeni</a>
      </td>
      <td>x e</td>
    </tr>
  <tbody>`;
  });
  document.querySelector("table tbody").innerHTML = teamsHTML;
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
