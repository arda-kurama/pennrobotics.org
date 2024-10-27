document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById('popup-container');
    var closePopup = document.getElementById('close-popup');

    // Show popup when the page loads
    popup.style.display = 'block';

    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});