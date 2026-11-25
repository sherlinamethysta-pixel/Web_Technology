/* ==========================================
   1. DISPLAY INFORMATION CARDS
========================================== */

// Select all information buttons

const infoButtons = document.querySelectorAll(".info-button");

// Add click event to each button

infoButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the target card ID

        const targetId = button.getAttribute("data-target");

        const details = document.getElementById(targetId);

        // Toggle the information card

        details.classList.toggle("show");

        // Change button text

        if (details.classList.contains("show")) {

            button.textContent = "Hide Details";

        } else {

            button.textContent = "View Details";

        }

    });

});


/* ==========================================
   2. DISPLAY SYSTEM NOTIFICATION
========================================== */

const notifyButton = document.getElementById("notifyButton");

const notification = document.getElementById("notification");

const notificationText = document.getElementById("notificationText");

notifyButton.addEventListener("click", function() {

    // Display notification message

    notificationText.textContent =
        "Automation system is running successfully!";

    // Add notification animation class

    notification.classList.add("show");

    // Hide notification after 3 seconds

    setTimeout(function() {

        notification.classList.remove("show");

    }, 3000);

});


/* ==========================================
   3. OPEN AND CLOSE PROCESS INFORMATION
========================================== */

const toggleButton = document.getElementById("toggleButton");

const processDetails = document.getElementById("processDetails");

toggleButton.addEventListener("click", function() {

    // Toggle process information visibility

    processDetails.classList.toggle("show");

    // Update button text

    if (processDetails.classList.contains("show")) {

        toggleButton.textContent = "Hide Process Information";

    } else {

        toggleButton.textContent = "Show Process Information";

    }

});


/* ==========================================
   4. NAVIGATION CLICK ANIMATION
========================================== */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        link.classList.add("nav-clicked");

        setTimeout(function() {

            link.classList.remove("nav-clicked");

        }, 500);

    });

});


/* ==========================================
   5. PAGE LOADING ANIMATION
========================================== */

window.addEventListener("load", function() {

    document.body.classList.add("page-loaded");

});