    const gifContainer = document.getElementById('gifContainer');
    const gifImage = document.getElementById('gifImage');
    const startGIFButton = document.getElementById('startGIFButton');
    const stopGIFButton = document.getElementById('stopGIFButton');

    const starWarsGifUrls = [
      'https://media.giphy.com/media/3oEduXTc4Ol57k/giphy.gif',
      'https://media.giphy.com/media/l41l98181qAF2/giphy.gif',
      'https://media.giphy.com/media/3o7bu435h72A8/giphy.gif',
      'https://media.giphy.com/media/3oEd9p4BCAN61C/giphy.gif',
      'https://media.giphy.com/media/3oKIP7773s25e/giphy.gif',
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
        //gifImage.pause();
      }
    });
