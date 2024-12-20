// Select popup and audio elements
const popup = document.getElementById('popup');
const Abigail = document.getElementById('Abigail');

// Set the original and lowered volume for background music
const originalVolume = 0.5; // Adjust as needed
const loweredVolume = 0.1; // Lowered volume during video playback

// Add click event listener to the pop-up
popup.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the full-screen pop-up
    Abigail.play(); // Start playing the audio
    Abigail.volume = originalVolume; // Set the initial background music volume
});

// Avatar and loading elements
const avatar = document.getElementById('avatar');
const loading = document.getElementById('loading');

// Upload buttons container
const uploadContainer = document.getElementById('upload-container');

// Video elements
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');

// Get the close button for the video
const closeButton = document.getElementById('close-video');

// Images mapping for the steps
const steps = [
    { buttonId: 'upload1', avatar: 'avatar1.png', loading: 'loading1.png', nextUpload: 'upload2.png' },
    { buttonId: 'upload2', avatar: 'avatar2.png', loading: 'loading2.png', nextUpload: 'upload3.png' },
    { buttonId: 'upload3', avatar: 'avatar3.png', loading: 'loading3.png', nextUpload: 'upload4.png' },
    { buttonId: 'upload4', avatar: 'avatar4.png', loading: 'loading4.png', nextUpload: null }
];

// Handle upload button clicks
uploadContainer.addEventListener('click', (e) => {
    const target = e.target;

    // Find the current step based on the clicked button
    const currentStep = steps.find(step => step.buttonId === target.id);

    if (currentStep) {
        // Update avatar and loading images
        avatar.src = currentStep.avatar;
        loading.src = currentStep.loading;

        // Add the next upload button if available
        if (currentStep.nextUpload) {
            const nextUpload = document.createElement('img');
            nextUpload.src = currentStep.nextUpload;
            nextUpload.alt = currentStep.nextUpload;
            nextUpload.id = currentStep.nextUpload.replace('.png', '');
            nextUpload.classList.add('upload');
            uploadContainer.appendChild(nextUpload);
        }

        // Remove the current upload button (optional)
        target.remove();
    }
});

// Handle loading image click for the final step
loading.addEventListener('click', () => {
    // Only open video if on the final step
    const isFinalStep = avatar.src.includes('avatar4.png') && loading.src.includes('loading4.png');
    if (isFinalStep) {
        videoContainer.classList.toggle('hidden');
        Abigail.volume = loweredVolume; // Lower the background music volume when the video is shown
        video.play(); // Play the video
    }
});

// Handle the close button click
closeButton.addEventListener('click', () => {
    videoContainer.classList.add('hidden'); // Hide the video container
    Abigail.volume = originalVolume; // Restore the background music volume when the video is closed
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset video to the start
});


// Get references to elements
const catGif = document.getElementById("next_button");
const giftModal = document.getElementById("giftModal");
const closeModal = document.getElementById("closeModal");
const nextGift = document.getElementById("nextGift");

// Show the modal when the GIF is clicked
catGif.addEventListener("click", () => {
  giftModal.style.display = "flex";
});

// Close the modal when "Close" button is clicked
closeModal.addEventListener("click", () => {
  giftModal.style.display = "none";
});

// Redirect to another page when "NEXT GIFT" button is clicked
nextGift.addEventListener("click", () => {
  window.location.href = "combination/last_gift.html"; // Replace with the actual path to your next HTML file
});
