const starWarsGifUrls = [
  'https://media.giphy.com/media/Lv0PZSJUG7PwYAp0O8/giphy.gif', 
  'https://media.giphy.com/media/vXA4xUNBBBEjuZLDNK/giphy.gif', 
  'https://media.giphy.com/media/d3g7n2HliLDCUNrO/giphy.gif', 
  'https://media.giphy.com/media/l3fZGLayrtM0DgV6U/giphy.gif', 
  'https://media.giphy.com/media/l3fZJdTi1q8DEibEk/giphy.gif'
];

const gifContainer = document.getElementById('gifContainer'); // Get the container element for displaying GIFs

//let playCount = 0; // Counter to track the number of times the GIF has played
//let gifIsPlaying = false; // Flag to indicate whether the GIF is currently playing

function displayRandomStarWarsGIF() {
 // if (playCount < 1) { // Check if the GIF has played less than three times
   // if (!gifIsPlaying) { // Check if the GIF is not already playing
      const randomIndex = Math.floor(Math.random() * starWarsGifUrls.length); // Generate a random index
      const randomStarWarsGIFUrl = starWarsGifUrls[randomIndex]; // Get the random Star Wars GIF URL

      const gifImage = document.createElement('img'); // Create an image element
      gifImage.src = randomStarWarsGIFUrl; // Set the image source to the random Star Wars GIF URL
      gifImage.style.width = '100%'; // Set the image width to 100% of the container
      gifImage.style.height = 'auto'; // Maintain the image's aspect ratio

      gifContainer.innerHTML = ''; // Clear the container before adding the new GIF
      gifContainer.appendChild(gifImage); // Add the Star Wars GIF image to the container

      gifImage.addEventListener('load', () => { // Wait for the GIF to load

        setTimeout(() => {
    gifImage.pause(); // Pause the GIF after 4 seconds
  }, 4000); // 4 seconds in milliseconds
 
        gifImage.play(); // Play the GIF
        //playCount++; // Increment the play count
        //gifIsPlaying = true;
      });

     // gifImage.addEventListener('ended', () => { // Listen for the GIF playback end
       // gifIsPlaying = false; // Reset the playing flag


        
        gifContainer.innerHTML = ''; // Remove the GIF after playback
      });
    }
  }
}

// Display the first random Star Wars GIF immediately
displayRandomStarWarsGIF();

// Repeat displaying random Star Wars GIFs every 30 seconds
setInterval(displayRandomStarWarsGIF, 30000);
