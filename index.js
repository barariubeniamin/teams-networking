function $(selector) {
  return document.querySelector(selector);
}

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
// transforma in HTML
function displayTeams(teams) {
  // pt a transforma ceva in altceva
  const teamsHTML = teams.map(getTeamHTML);

  // afisare
  document.querySelector("table tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("http://localhost:3000/teams-json")
    .then((r) => r.json())
    .then((teams) => {
      displayTeams(teams);
    });
}

function $(selector) {
  return document.querySelector(selector);
}

function.createTeamRequest

function submitForm(e) {
  e.preventDefault();
  const promotion = $("input[name=promotion]").value;
  const members = $("input[name=members]").value;
  const name = $("input[name=name]").value;
  const url = $("input[name=url]").value;

  const team = {
    promotion: promotion,
    members: members,
    name: name,
    url: url,
  };

  console.warn("submit", JSON.stringify(team));
}

function initEvents() {
  const form = document.getElementById("editForm");
  form.addEventListener("submit", submitForm);
}

loadTeams();
initEvents();
