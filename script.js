function startApp() {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    handleRedirect();
  }, 2000);
}

function handleRedirect() {
  if (!sessionStorage.getItem("visited")) {
    sessionStorage.setItem("visited", "yes");
    setTimeout(() => {
      document.getElementById("followPage").style.display = "none";
      document.getElementById("mainApp").style.display = "block";
    }, 5000);
  } else {
    document.getElementById("followPage").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
  }
}

function goToFacebook() {
  window.open("https://www.facebook.com/share/1YfT9EDmcP/", "_blank");
}

function getSettings() {
  const model = document.getElementById("phoneModel").value.toLowerCase();
  let sensitivity = "", dpi = "";
  if (model.includes("redmi")) {
    sensitivity = `
      1. General: 95<br>
      2. Red Dot: 90<br>
      3. 2x Scope: 85<br>
      4. 4x Scope: 80<br>
      5. Sniper Scope: 75<br>
      6. Free Camera: 70`;
    dpi = "420";
  } else if (model.includes("samsung")) {
    sensitivity = `
      1. General: 85<br>
      2. Red Dot: 80<br>
      3. 2x Scope: 75<br>
      4. 4x Scope: 70<br>
      5. Sniper Scope: 65<br>
      6. Free Camera: 60`;
    dpi = "480";
  } else {
    sensitivity = `
      1. General: 90<br>
      2. Red Dot: 85<br>
      3. 2x Scope: 80<br>
      4. 4x Scope: 75<br>
      5. Sniper Scope: 70<br>
      6. Free Camera: 65`;
    dpi = "360";
  }
  document.getElementById("settings").innerHTML = `
    <strong>Perfect Sensitivity:</strong><br>${sensitivity}<br><br>
    <strong>DPI:</strong> ${dpi}
  `;
}

function selectRole(role) {
  let active = "", passives = [];
  switch (role) {
    case "Supporter":
      active = "Dimitri";
      passives = ["Olivia", "Kapella", "Thiva"];
      break;
    case "Sniper":
      active = "Laura";
      passives = ["Rafael", "Moco", "Clu"];
      break;
    case "Rusher":
      active = "Skyler";
      passives = ["Kelly", "Ford", "Leon"];
      break;
    case "Grenadier":
      active = "Xayne";
      passives = ["Joseph", "Miguel", "Shani"];
      break;
  }
  document.getElementById("character").innerHTML = `
    <strong>Perfect Character:</strong><br>
    1. Active Skill: ${active}<br>
    2. Passive Skills:<br> - ${passives[0]}<br> - ${passives[1]}<br> - ${passives[2]}
  `;
}