// --- SIGN UP FUNCTION ---
function signUp() {
  const newUser = document.getElementById("newUser").value.trim();
  const newPass = document.getElementById("newPass").value.trim();

  if (newUser === "" || newPass === "") {
    alert("Please fill in both username and password to sign up!");
  } else {
    // Save the new account in localStorage
    localStorage.setItem("username", newUser);
    localStorage.setItem("password", newPass);

    alert("Account created successfully for user: " + newUser + " 🎉");
    document.getElementById("newUser").value = "";
    document.getElementById("newPass").value = "";
  }
}

// --- LOGIN FUNCTION ---
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Retrieve stored credentials
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (user === "" || pass === "") {
    alert("Please fill in both username and password!");
  } else if (user === savedUser && pass === savedPass) {
    alert("Login successful! Welcome, " + user + " 🌍");
	 window.location.href = "homepage.html";
  } else {
    alert("Invalid username or password!");
  }
}

