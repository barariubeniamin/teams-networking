function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function loadTeams() {
  fetch("http://localhost:3000/teams-json")
    .then((list) => list.json())
    .then((teams) => updateTable(teams));
}

function getTeamHtml(team, index) {
  return `
  <tr>
      <td>${team.promotion}</td>
      <td> ${team.members}</td>
      <td> ${team.name}</td>
      <td><a href="${team.url}">Visit </a></td>
      <td>
          <div class="buttonCell">
              <div data-index="${index}" class="edit"></div>
              <div data-index="${index}" class="delete">&#9998</div>
          </div>                      
      </td>
  </tr>
  `;
}

function updateTable(teams) {
  const teamsHTML = teams.map((team, index) => getTeamHtml(team, index));

  $(".tableBody table tbody").innerHTML = teamsHTML.join("");
}

function createTeamRequest(team) {
  return fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(team),
  });
}

function submitForm(e) {
  e.preventDefault();

  const team = {
    promotion: "",
    members: "",
    name: "",
    url: "",
  };

  for (let key in team) {
    team[key] = $(`input[name=${key}]`).value;
  }

  createTeamRequest(team)
    .then((r) => r.json())
    .then((status) => {
      console.log(status);
      if (status.success) {
        //location.reload();
        loadTeams();
      }
    });
}

function initEvents() {
  $("#editForm").addEventListener("submit", submitForm);
}

loadTeams();
initEvents();
