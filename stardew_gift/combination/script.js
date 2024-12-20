const gridSize = 5; // Grid dimensions (5x5)
const tileSize = 100; // Tile size in pixels
const puzzleContainer = document.getElementById('puzzle-container');

// Function to create the puzzle grid
function createPuzzle() {
    const image = new Image();
    image.src = 'elgin.png'; // Set the path to your puzzle image here

    image.onload = function () {
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                
                // Slice the puzzle image into tiles
                tile.style.backgroundImage = `url(${image.src})`;
                tile.style.backgroundPosition = `-${col * tileSize}px -${row * tileSize}px`;

                // Random rotation for each tile
                const randomRotation = Math.floor(Math.random() * 4) * 90;
                tile.style.transform = `rotate(${randomRotation}deg)`;
                tile.dataset.rotation = randomRotation;

                // Add click event for rotating tiles
                tile.addEventListener('click', rotateTile);

                puzzleContainer.appendChild(tile);
            }
        }
    };
}

// Function to rotate a tile
function rotateTile(event) {
    const tile = event.target;
    let currentRotation = parseInt(tile.dataset.rotation, 10);
    currentRotation += 90; // Rotate by 90 degrees
    if (currentRotation === 360) currentRotation = 0; // Reset to 0 after full rotation

    // Apply rotation
    tile.style.transform = `rotate(${currentRotation}deg)`;
    tile.dataset.rotation = currentRotation;

    // Check if the puzzle is solved
    checkPuzzleSolved();
}

// Function to check if the puzzle is solved
function checkPuzzleSolved() {
    const tiles = document.querySelectorAll('.tile');
    let isSolved = true;

    tiles.forEach(tile => {
        if (parseInt(tile.dataset.rotation, 10) !== 0) isSolved = false;
    });

    if (isSolved) {
        alert('Ready? 1..2..3.. Say Cheeeeseee...📷🧀');
    }
}




// Function to generate random positions for images
function getRandomPosition(maxWidth, maxHeight, imgWidth, imgHeight) {
    const x = Math.random() * (maxWidth - imgWidth);
    const y = Math.random() * (maxHeight - imgHeight);
    return { x: Math.max(0, x), y: Math.max(0, y) };
}

// Function to make an image draggable
function makeDraggable(image) {
    image.addEventListener('mousedown', function (e) {
        e.preventDefault();

        const rect = image.getBoundingClientRect();
        const offsetX = e.clientX - rect.left + 150;
        const offsetY = e.clientY - rect.top + 60;

        function onMouseMove(e) {
            image.style.left = e.clientX - offsetX + 'px';
            image.style.top = e.clientY - offsetY + 'px';
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
}

// Function to randomize and position images over the puzzle
function randomizeImagePositions() {
    const images = document.querySelectorAll('.draggable');
    const container = document.querySelector('.container'); // Select the container

    // Get the dimensions and position of the container
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    images.forEach((image) => {
        const imgWidth = 400; // Assuming fixed image width
        const imgHeight = 400; // Assuming fixed image height

        // Generate random positions within the container's boundaries
        const x = Math.random() * (containerWidth - imgWidth);
        const y = Math.random() * (containerHeight - imgHeight);

        // Set the position relative to the container
        image.style.position = 'absolute';
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        // Append the image to the container to ensure correct positioning
        container.appendChild(image);

        // Make the image draggable
        makeDraggable(image);
    });
}


// Initialize puzzle and draggable images
window.onload = function () {
    createPuzzle(); // Create the puzzle grid
    randomizeImagePositions(); // Position the draggable images
};




// Select popup and audio elements
const popup = document.getElementById('popup');
const song = document.getElementById('song');


// Add click event listener to the pop-up
popup.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the full-screen pop-up
    song.play(); // Start playing the audio
});
