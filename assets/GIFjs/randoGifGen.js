const starWarsGifUrls = [
  'https://media.giphy.com/media/Lv0PZSJUG7PwYAp0O8/giphy.gif', 
  'https://media.giphy.com/media/vXA4xUNBBBEjuZLDNK/giphy.gif', 
  'https://media.giphy.com/media/d3g7n2HliLDCUNrO/giphy.gif', 
  'https://media.giphy.com/media/l3fZGLayrtM0DgV6U/giphy.gif', 
  'https://media.giphy.com/media/l3fZJdTi1q8DEibEk/giphy.gif'
];

const gifContainer = document.getElementById('gifContainer'); // Get the container element for displaying GIFs

function displayRandomStarWarsGIF() {
  const randomIndex = Math.floor(Math.random() * starWarsGifUrls.length); // Generate a random index
  const randomStarWarsGIFUrl = starWarsGifUrls[randomIndex]; // Get the random Star Wars GIF URL

  const gifImage = document.createElement('img'); // Create an image element
  gifImage.src = randomStarWarsGIFUrl; // Set the image source to the random Star Wars GIF URL
  gifImage.style.width = '100%'; // Set the image width to 100% of the container
  gifImage.style.height = 'auto'; // Maintain the image's aspect ratio
  gifImage.style.display = 'none'; // Initially hide the GIF

  gifContainer.innerHTML = ''; // Clear the container before adding the new GIF
  gifContainer.appendChild(gifImage); // Add the Star Wars GIF image to the container

  setTimeout(() => { // Show the GIF after 4 seconds
    gifImage.style.display = 'block';
    gifImage.play(); // Play the GIF

    setTimeout(() => { // Pause the GIF after 4 seconds
      gifImage.pause();
    }, 4000);
  }, 4000);
}

// Display the first random Star Wars GIF immediately
displayRandomStarWarsGIF();

// Repeat displaying random Star Wars GIFs every 30 seconds
setInterval(displayRandomStarWarsGIF, 30000);
