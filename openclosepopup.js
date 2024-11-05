// script.js

// Get elements
const popupModal = document.getElementById("popupModal");
const openPopupBtn = document.getElementById("openPopupBtn");
const closeBtn = document.querySelector(".close");

// Show the modal when the button is clicked
openPopupBtn.onclick = function() {
    popupModal.style.display = "block";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    popupModal.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == popupModal) {
        popupModal.style.display = "none";
    }
}
