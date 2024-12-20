// Get all the characters by class name
const sanrioCharacters = document.querySelectorAll('.sanrio');

// Get the video popup, video element, and close button
const videoPopup = document.getElementById('videoPopup');
const cinnamorollVideo = document.getElementById('cinnamorollVideo');
const closeVideoButton = document.getElementById('closeVideoButton');

// Function to handle character click
function showAlert(event) {
    // Check if the clicked character is Cinnamoroll
    if (event.target.id === 'Cinnamoroll') {
        // Show the video popup and play the video
        videoPopup.style.display = 'block';
        cinnamorollVideo.play();
        cute_music.volume = loweredVolume;
    } else {
        // Show the default alert for other characters
        alert('Wait a minute... You have a keychain with this character 🤨 I had no idea 🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️');
    }
}

// Event listeners
sanrioCharacters.forEach(character => {
    character.addEventListener('click', showAlert);
});

// Close the video popup when the close button is clicked
closeVideoButton.addEventListener('click', () => {
    cinnamorollVideo.pause(); // Pause the video
    cinnamorollVideo.currentTime = 0; // Reset video to the start
    videoPopup.style.display = 'none'; // Hide the popup
    cute_music.volume = originalVolume;
});




// Get references to elements
const popup = document.getElementById('popup');
const phoneGif = document.getElementById('phone');
const phoneStill = document.getElementById('phoneStill');
const ringtone = document.getElementById('ringtone');
const callerMessageBox = document.getElementById('callerMessageBox');
const closeMessageBoxButton = document.getElementById('closeMessageBox');

const hello_kitty = document.getElementById('hello_kitty')
const keychain = document.getElementById('keychain')


// Function to close the pop-up and start the audio
function closePopup() {
    popup.style.display = 'none'; // Hide the full-screen pop-up
    ringtone.play(); // Start playing the ringtone
}

// Attach click event to the pop-up
popup.addEventListener('click', closePopup);

// Function to "answer the call" when the phone GIF is clicked
function answerCall() {
    // Stop the ringtone
    ringtone.pause();
    ringtone.currentTime = 0;

    // Hide the ringing phone GIF
    phoneGif.style.display = 'none';

    // Show the still phone image
    phoneStill.style.display = 'block';

    // Show Hello Kitty GIF
    hello_kitty.style.display = 'block';

    // Show Keychain GIF
    keychain.style.display = 'block';

    // Show the caller message box
    callerMessageBox.style.display = 'block';

}

// Attach the click event listener to the ringing phone GIF
phoneGif.addEventListener('click', answerCall);

// Close the caller message box when the user clicks the "Close" button
closeMessageBoxButton.addEventListener('click', function () {
    // Hide the caller message box when the button is clicked
    callerMessageBox.style.display = 'none';
    hello_kitty.style.display = 'none';
    keychain.style.display = 'none';
});


// Get references to elements
const satanGif = document.getElementById("Satan");
const giftModal = document.getElementById("giftModal");
const closeModal = document.getElementById("closeModal");
const nextGift = document.getElementById("nextGift");

// Show the modal when the GIF is clicked
satanGif.addEventListener("click", () => {
  giftModal.style.display = "flex";
});

// Close the modal when "Close" button is clicked
closeModal.addEventListener("click", () => {
  giftModal.style.display = "none";
});

// Redirect to another page when "NEXT GIFT" button is clicked
nextGift.addEventListener("click", () => {
  window.location.href = "stardew_gift/nextgift.html"; // Replace with the actual path to your next HTML file
});

const cute_music = document.getElementById('cute_music');
const originalVolume = 0.3; // Adjust as needed
const loweredVolume = 0.1; // Lowered volume during video playback

// Add click event listener to the pop-up
popup.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the full-screen pop-up
    cute_music.play(); // Start playing the audio
    cute_music.volume = originalVolume; // Set the initial background music volume
});


