// List of sound IDs (must match the audio element IDs in index.html)
const sounds = ['applause','boo','gasp','tada','victory','wrong']


// Get reference to the container where sound buttons will be added
const buttonsContainer = document.getElementById('buttons');

// Get references to new feature controls
const stopBtn = document.getElementById('stop');
const randomSoundBtn = document.getElementById('randomSound');
const volumeSlider = document.getElementById('volume');



// Create one button per sound dynamically
sounds.forEach(sound => {
     // Create a new button element
    const btn = document.createElement('button')
    btn.classList.add('btn')

      // Set the text of the button to the sound name (capitalized first letter)
    btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1);

    // Add click event listener to play the corresponding sound
    btn.addEventListener('click',() => {
        //  Stop any sound that is currently playing
        stopSongs()

        // Get the audio element by id and play it
    const audioElement = document.getElementById(sound);
    if (audioElement) {
      audioElement.play();
    }
        
    });

    // Add the button to the buttons container on the page
  buttonsContainer.appendChild(btn);

});

    // document.getElementById('buttons').appendChild(btn)



function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        // Only try to control the element if it exists
    if (song) {
      song.pause();
      song.currentTime = 0;
    }
    });
}

function updateAllVolumes(volume) {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    if (song) {
      song.volume = volume;
    }
  });
}

// Stop  button: calls stopSongs() when clicked
stopBtn.addEventListener('click',() =>{
stopSongs();
});

 

// Random Sound button: plays a random sound from the list
randomSoundBtn.addEventListener('click', () => {
  // Stop any sound playing currently
  stopSongs();

  // Pick a random sound from the array
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const randomSoundId = sounds[randomIndex];

  const audioElement = document.getElementById(randomSoundId);
  if (audioElement) {
    audioElement.play();
  }
});

// Volume slider: update volume for all sounds when user moves the slider
volumeSlider.addEventListener('input', (event) => {
  const newVolume = Number(event.target.value); // value is between 0 and 1
  updateAllVolumes(newVolume);
});

// Initialize volume for all sounds on page load (matches initial slider value)
updateAllVolumes(Number(volumeSlider.value));
 