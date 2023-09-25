document.addEventListener("DOMContentLoaded", function () {
    // Attach file input change event listener for uploading profile picture
    const profilePictureInput = document.getElementById("profile-picture");
    const preview = document.getElementById("profile-picture-preview");
    profilePictureInput.addEventListener("change", function () {
        const selectedFile = profilePictureInput.files[0];

        if (selectedFile) {
            // Display a preview of the selected image
            preview.style.display = "block";
            preview.src = URL.createObjectURL(selectedFile);

            // Handle uploading the selectedFile to the server if needed
            // Example: You can send it to the server using AJAX or fetch
            // ...
        } else {
            // Hide the preview if no image is selected
            preview.style.display = "none";
            preview.src = "#";
        }
    });

    // Attach post status event listener
    const postButton = document.getElementById("post-button");
    postButton.addEventListener("click", postStatus);
});

function postStatus() {
    const statusText = document.getElementById("status-text").value;
    if (statusText.trim() !== "") {
        const statusContainer = document.createElement("div");
        statusContainer.className = "w3-container w3-card w3-white w3-round w3-margin";

        statusContainer.innerHTML = `
            <img src="avi.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
            <span class="w3-right w3-opacity">Just now</span>
            <h4>Me</h4><br>
            <hr class="w3-clear">
            <p>${statusText}</p>
        `;

        const feed = document.querySelector(".w3-col.m7");
        feed.insertBefore(statusContainer, feed.firstChild);

        // Clear the textarea
        document.getElementById("status-text").value = "";
    }
}
  //signup form
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate account creation (replace this with your actual logic)
    // For this example, we'll just log the user information
    console.log('Creating account...');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Here, you would typically send the user data to your server
    // for account creation and handle the response accordingly.

    // redirect to the home page
    window.location.href = 'home.html';
});

