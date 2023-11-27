    const gifImage = document.getElementById('gifImage');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    const originalGifUrl = 'https://giphy.com/gifs/motion-ui-ux-l41lO3XKps6PUdUsw'; // Original GIF URL
    const randomGifUrls = [
  'https://media.giphy.com/media/Lv0PZSJUG7PwYAp0O8/giphy.gif', 
  'https://media.giphy.com/media/vXA4xUNBBBEjuZLDNK/giphy.gif', 
  'https://media.giphy.com/media/d3g7n2HliLDCUNrO/giphy.gif', 
  'https://media.giphy.com/media/l3fZGLayrtM0DgV6U/giphy.gif', 
  'https://media.giphy.com/media/l3fZJdTi1q8DEibEk/giphy.gif',
    ]; // Array of random GIF URLs

    let gifIntervalId = null; // Interval ID for the GIF display timer

    function displayOriginalGIF() {
      gifImage.src = originalGifUrl; // Set the image source to the original GIF URL
      gifImage.play(); // Play the GIF
    }

    function displayRandomGIF() {
      const randomIndex = Math.floor(Math.random() * randomGifUrls.length); // Generate a random index
      const randomGifUrl = randomGifUrls[randomIndex]; // Get the random GIF URL

      gifImage.src = randomGifUrl; // Set the image source to the random GIF URL
      gifImage.play(); // Play the GIF
      setTimeout(() => { // Pause the random GIF after 4 seconds
        gifImage.pause();
      }, 4000);
    }

    startButton.addEventListener('click', () => {
      if (!gifIntervalId) {
        gifIntervalId = setInterval(() => {
          displayOriginalGIF(); // Display the original GIF for 30 seconds
          setTimeout(displayRandomGIF, 26000); // Display a random GIF for 4 seconds
        }, 30000);
      }
    });

    stopButton.addEventListener('click', () => {
      if (gifIntervalId) {
        clearInterval(gifIntervalId);
        gifIntervalId = null;
        gifImage.pause();
      }
    });
  </script>
</body>
</html>
