// Toggle dark mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Open modal for video
document.querySelectorAll('.video-thumbnail').forEach((videoThumbnail) => {
    videoThumbnail.addEventListener('click', () => {
        document.getElementById("video-modal").style.display = "block";
    });
});

// Close modal when user clicks the close button
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById("video-modal").style.display = "none";
});

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    if (event.target === document.getElementById("video-modal")) {
        document.getElementById("video-modal").style.display = "none";
    }
};
