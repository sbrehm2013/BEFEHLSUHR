//All good code starts with constructors

    const gifImage = document.getElementById('gifImage');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const alertHeader = document.getElementById('alertHeader');

//GIFs TBDDDD idkkk
    const originalGifUrl = 'https://giphy.com/embed/l41lO3XKps6PUdUsw'; // Original GIF URL
    const flashGifUrl = 'https://giphy.com/embed/Lv0PZSJUG7PwYAp0O8'; // Flash GIF URL

    let gifIntervalId = null; // Interval ID for the GIF display timer

    function displayOriginalGIF() {
      gifImage.src = originalGifUrl; // Set the image source to the original GIF URL
      alertHeader.innerText = "VERZÖGERUNG"; //Header delay
    }

    function displayFlashGIF() {
      gifImage.src = flashGifUrl; // Set the image source to the flash GIF URL
      alertHeader.innerText = "GEBEN SIE DEN BEFEHL!!!!!"; //Header for command
     // alertHeader.style.color = "white";  funky colors? how to revert after change
     // alertHeader.style.fontWeight = 'bold';
    }

////THissssss is not working
    startButton.addEventListener('click', () => {
    alertHeader.innerText = "VERZÖGERUNG";
      if (!gifIntervalId) {
        gifIntervalId = setInterval(() => {
          displayOriginalGIF(); // Display the original GIF for 30 seconds
          setTimeout(displayFlashGIF, 26000); // Display the flash GIF for 4 seconds
        }, 30000);
      }
        document.getElementById("gifImage").style.display = "block";
    });

///put that stuff back where it came from or so help meeee
    stopButton.addEventListener('click', () => {
      if (gifIntervalId) {
        clearInterval(gifIntervalId);
        gifIntervalId = null;
        document.getElementById("gifImage").style.display = "none";
        alertHeader.innerText = "das Ende, Schlampe";
      }
    });

//The End - code booty//
