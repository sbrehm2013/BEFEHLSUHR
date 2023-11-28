//All good code starts with constructors

    let gifIntervalId = null; // Interval ID for the GIF display timer
    let timerInterval; // Variable to store the timer interval
    let timerButton; // Reference to the start timer button
    let stopButton; // Reference to the stop timer button
    let timerElement; // Reference to the element displaying the timer
   

    const gifImage = document.getElementById('gifImage');
    const alertHeader = document.getElementById('alertHeader');
    const countdownTime = 30; // Countdown time in seconds
    let remainingTime = countdownTime; // Remaining countdown time

timerButton = document.getElementById('startButton');
stopButton = document.getElementById('stopButton');
timerElement = document.getElementById('timerHeader');

//GIFs TBDDDD idkkk
    const originalGifUrl = 'https://giphy.com/embed/l41lO3XKps6PUdUsw'; // Original GIF URL
    const flashGifUrl = 'https://giphy.com/embed/Lv0PZSJUG7PwYAp0O8'; // Flash GIF URL

    function displayOriginalGIF() {
      gifImage.src = originalGifUrl; // Set the image source to the original GIF URL
      alertHeader.innerText = "VERZÖGERUNG"; //Header delay
    }

    function displayFlashGIF() {
      gifImage.src = flashGifUrl; // Set the image source to the flash GIF URL
      alertHeader.innerText = "GEBEN SIE DEN BEFEHL!!!!!"; //Header for command
    }

// Start timer function
function startTimer() {
  if (remainingTime > 0) {
    timerInterval = setInterval(() => {
      remainingTime--;
      updateTimerDisplay();

      if (remainingTime === 0) {
        clearInterval(timerInterval);
        remainingTime = countdownTime;
      }
    }, 1000); // Update timer every second
      
  }
    
}

// Stop timer function
function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}

// Update timer display function
function updateTimerDisplay() {
  timerElement.textContent = `${remainingTime} seconds`;
}

// Add event listeners to buttons
timerButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

////THissssss is not working
//    startButton.addEventListener('click', () => {
//    alertHeader.innerText = "VERZÖGERUNG";
//      if (!gifIntervalId) {
//        gifIntervalId = setInterval(() => {
//          displayOriginalGIF(); // Display the original GIF for 30 seconds
//          setTimeout(displayFlashGIF, 26000); // Display the flash GIF for 4 seconds
//        }, 30000);
//      }
//        document.getElementById("gifImage").style.display = "block";
//    });

///put that stuff back where it came from or so help meeee
//    stopButton.addEventListener('click', () => {
//      if (gifIntervalId) {
//        clearInterval(gifIntervalId);
//        gifIntervalId = null;
//        document.getElementById("gifImage").style.display = "none";
//        alertHeader.innerText = "das Ende, Schlampe";
//      }
//    });

//The End - code booty//
