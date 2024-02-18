console.log('Custom video script loaded');

// Function to initialize video controls for a given video element
function initializeVideoControls(videoElement) {
    // Assuming there's a single play/pause button and seek bar for simplicity
    const playPauseBtn = document.getElementById('playPauseBtn'); // Adjust if necessary
    const seekBar = document.getElementById('seekBar');

    // Function to toggle play/pause
    function togglePlayPause() {
        if (videoElement.paused || videoElement.ended) {
            videoElement.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            videoElement.pause();
            playPauseBtn.textContent = 'Play';
        }
    }
    videoElement.addEventListener('play', function() {
        playPauseBtn.textContent = 'Pause';
    });

    videoElement.addEventListener('pause', function() {
        playPauseBtn.textContent = 'Play';
    });

    // Update the seek bar as the video plays
    videoElement.addEventListener('timeupdate', () => {
        const value = (100 / videoElement.duration) * videoElement.currentTime;
        seekBar.value = value;
    });

    // Seek in the video when the seek bar changes
    seekBar.addEventListener('input', () => {
        const time = videoElement.duration * (seekBar.value / 100);
        videoElement.currentTime = time;
    });

    // Attach event listener to play/pause button
    playPauseBtn.addEventListener('click', togglePlayPause);

    // Initialize canvas for highlighting
    const highlightCanvas = document.getElementById('highlightCanvas');
    const ctx = highlightCanvas.getContext('2d');
    const markers = [
        { start: 0, end: 2 }, // Example marker segments in seconds
        { start: 7, end: 8 }
    ];

    function drawRoundedRect(ctx, x, y, width, height, radius) {
        if (width < 2 * radius) radius = width / 2;
        if (height < 2 * radius) radius = height / 2;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.arcTo(x + width, y, x + width, y + height, radius);
        ctx.arcTo(x + width, y + height, x, y + height, radius);
        ctx.arcTo(x, y + height, x, y, radius);
        ctx.arcTo(x, y, x + width, y, radius);
        ctx.closePath();
        ctx.fill();
    }

    // Adjust canvas size and draw markers when video metadata is loaded
    videoElement.addEventListener('loadedmetadata', () => {
        // Adjust canvas size
        highlightCanvas.width = seekBar.offsetWidth;
        highlightCanvas.height = seekBar.offsetHeight;

        // Draw markers
        markers.forEach(marker => {
            const startRatio = marker.start / videoElement.duration;
            const endRatio = marker.end / videoElement.duration;
            const startX = startRatio * highlightCanvas.width;
            const width = (endRatio * highlightCanvas.width) - startX;
            const height = highlightCanvas.height; // The height of your highlight area
            const radius = 20; // The desired corner radius
        
            ctx.fillStyle = "rgba(224, 180, 164, 0.7)"; // Semi-transparent red
        
            // Call drawRoundedRect with the calculated dimensions and radius
            drawRoundedRect(ctx, startX, 0, width, height, radius);
        });        
    });


}

// MutationObserver callback to initialize controls for dynamically added videos
const callback = function(mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                // Check if the added node is a video or contains a video
                if (node.nodeName === 'VIDEO') {
                    initializeVideoControls(node);
                } else if (node.querySelector && node.querySelector('video')) {
                    const videoElements = node.querySelectorAll('video');
                    videoElements.forEach(videoElement => initializeVideoControls(videoElement));
                }
            });
        }
    }
};

// Create and start a MutationObserver to watch for added video elements
const observer = new MutationObserver(callback);
observer.observe(document.body, { childList: true, subtree: true });

console.log('Video controls setup observer started.');
