    const gifImage = document.getElementById('gifImage');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    const originalGifUrl = 'https://giphy.com/embed/l41lO3XKps6PUdUsw'; // Original GIF URL
    const flashGifUrl = 'https://giphy.com/embed/Lv0PZSJUG7PwYAp0O8'; // Flash GIF URL

    let gifIntervalId = null; // Interval ID for the GIF display timer

    function displayOriginalGIF() {
      gifImage.src = originalGifUrl; // Set the image source to the original GIF URL
    }

    function displayFlashGIF() {
      gifImage.src = flashGifUrl; // Set the image source to the flash GIF URL
    }

    startButton.addEventListener('click', () => {
      if (!gifIntervalId) {
        displayOriginalGIF();  
          setTimeout(displayOriginalGIF, 30000);
          displayFlashGIF(); 
          setTimeout(displayFlashGIF, 4000);          
        gifIntervalId = setInterval(() => {
          displayOriginalGIF(); // Display the original GIF for 30 seconds
          setTimeout(displayFlashGIF, 26000); // Display the flash GIF for 4 seconds
        }, 30000);
      }
        document.getElementById("gifImage").style.display = "block";
    });

    stopButton.addEventListener('click', () => {
      if (gifIntervalId) {
        clearInterval(gifIntervalId);
        gifIntervalId = null;
        document.getElementById("gifImage").style.display = "none";
      }
    });

//Test 123
