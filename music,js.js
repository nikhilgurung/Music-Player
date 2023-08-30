const audioPlayer = document.getElementById('audio-player');

audioPlayer.addEventListener('play', () => {
    console.log('Audio is playing');
    // Add any additional functionality here
});

audioPlayer.addEventListener('pause', () => {
    console.log('Audio is paused');
    // Add any additional functionality here
});
