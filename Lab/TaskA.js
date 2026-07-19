let attemptsLeft = 3;
let isLocked = false;

function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Step 2: Check if locked
    if (isLocked) {
        message.innerHTML = "You are locked. Please wait 5 minutes.";
        return;
    }

    // Step 2: Validation checks
    if (username == "" || username.length < 3) {
        message.innerHTML = "Username is empty or less than 3 characters.";
        return;
    }

    if (password == "" || password.length < 6) {
        message.innerHTML = "Password is empty or less than 6 characters.";
        return;
    }

    // Step 3: Check credentials
    if (username == "aiub" && password == "student") {
        message.innerHTML = "Login successful!";
        attemptsLeft = 3; // Step 4: reset attempts if matched
    } else {
        // Step 4: Wrong credentials
        attemptsLeft = attemptsLeft - 1;

        if (attemptsLeft == 2) {
            message.innerHTML = "You have 2 attempt left";
        } else if (attemptsLeft == 1) {
            message.innerHTML = "You have 1 attempt left";
        } else if (attemptsLeft == 0) {
            message.innerHTML = "You are locked for next 5 minutes";
            isLocked = true;

            // Unlock after 5 minutes (300000 milliseconds)
            setTimeout(function() {
                isLocked = false;
                attemptsLeft = 3;
                message.innerHTML = "You can try again now.";
            }, 300000);
        }
    }
}