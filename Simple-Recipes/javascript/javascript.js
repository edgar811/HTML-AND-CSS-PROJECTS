// RECIPE POP UP MODAL SECTION

// Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

// Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

var modalTimers = {}; // Store timeouts for each modal

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        var modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";

        // Clear any existing timeout for this modal
        if (modalTimers[modal]) {
            clearTimeout(modalTimers[modal]);
        }

        // Set a timeout to close the modal after 10 seconds
        modalTimers[modal] = setTimeout(function () {
            modal.style.display = "none";
        }, 10000);
    };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";

                // Clear the timeout when modal is closed manually
                clearTimeout(modalTimers[modals[index]]);
            }
        }
    };
}

// EMAIL VALIDATION

document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Overrides the default browser refresh when the submit button is pressed
    event.preventDefault();

    // Variables to validate that each field is filled out
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Email pattern checks for all symbols that would be needed for an email address
    const emailPattern = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Use this variable to display messages if fields are filled out or thank you message
    const valMsg = document.getElementById('validateMsg');

    if (!firstName || !lastName || !phone || !message) {
        // Checks if fields have been filled out
        valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
    } else if (!emailPattern.test(email)) {
        // Checks if there is a valid email
        valMsg.innerHTML = '<p style="color: red;"> Please enter a valid email</p>';
    } else {
        // If all fields are filled out correctly display thank you message
        valMsg.innerHTML = '<p style="color: green;">Thank you for submitting!</p>';
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        subscribe: document.getElementById('subscription').checked
    };

    // Displays what the user wrote in the console
    console.log(JSON.stringify(formData));
});
