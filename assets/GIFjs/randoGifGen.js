    const gifContainer = document.getElementById('gifContainer');
    const gifImage = document.getElementById('gifImage');
    const startGIFButton = document.getElementById('startGIFButton');
    const stopGIFButton = document.getElementById('stopGIFButton');

    const starWarsGifUrls = [
  'https://media.giphy.com/media/Lv0PZSJUG7PwYAp0O8/giphy.gif', 
  'https://media.giphy.com/media/vXA4xUNBBBEjuZLDNK/giphy.gif', 
  'https://media.giphy.com/media/d3g7n2HliLDCUNrO/giphy.gif', 
  'https://media.giphy.com/media/l3fZGLayrtM0DgV6U/giphy.gif', 
  'https://media.giphy.com/media/l3fZJdTi1q8DEibEk/giphy.gif',
    ];

    let gifIntervalId = null;

    startGIFButton.addEventListener('click', () => {
      if (!gifIntervalId) {
        gifIntervalId = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * starWarsGifUrls.length);
          const randomStarWarsGIFUrl = starWarsGifUrls[randomIndex];

          gifImage.src = randomStarWarsGIFUrl;
          gifContainer.style.display = 'block';
          gifImage.play();

          setTimeout(() => {
            gifImage.pause();
            gifContainer.style.display = 'none';
          }, 4000);
        }, 30000);
      }
    });

    stopGIFButton.addEventListener('click', () => {
      if (gifIntervalId) {
        clearInterval(gifIntervalId);
        gifIntervalId = null;
        gifContainer.style.display = 'none';
        gifImage.pause();
      }
    });

