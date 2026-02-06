const loginBtn = document.getElementById("loginBtn");
const statusText = document.getElementById("status");

// PLACEHOLDER: Apps Script URL goes here later
const LOGIN_API = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

loginBtn.onclick = async () => {
  statusText.textContent = "Logging in...";

  try {
    // TEMP: fake login result
    // Later this becomes: fetch(LOGIN_API)
    const fakeUser = {
      id: "test-user-123",
      name: "Player"
    };

    // Pass user ID to game via URL (temporary)
    window.location.href = `game.html?uid=${fakeUser.id}`;
  } catch (err) {
    statusText.textContent = "Login failed";
  }
};
