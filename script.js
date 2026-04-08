const form = document.getElementById("form");
const existingBtn = document.getElementById("existing");

// Page load par check
window.onload = function() {
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (savedUser && savedPass) {
        existingBtn.style.display = "block";

        // auto-fill
        document.getElementById("username").value = savedUser;
        document.getElementById("password").value = savedPass;
    }
};

// Form submit
form.onsubmit = function(e) {
    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let check = document.getElementById("checkbox").checked;

    alert("Logged in as " + user);

    if (check) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existingBtn.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }
};ogin
existingBtn.onclick = function() {
    let savedUser = localStorage.getItem("username");
    alert("Logged in as " + savedUser);
};