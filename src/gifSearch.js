import { cacheDOM } from './cacheDom';

const { API_keyInputBox, searchBox, img, responseMessage, searchBtn } =
  cacheDOM();

searchBtn.addEventListener('click', () => {
  const search = searchBox.value.trim();
  const API_key = API_keyInputBox.value.trim();

  async function getGiphy() {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/translate?api_key=${API_key}&s=${search}`,
        { mode: 'cors' },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.data && data.data.images && data.data.images.original) {
        img.src = data.data.images.original.url;
      } else {
        img.src = './img/not-found.jpg';
      }
    } catch (error) {
      if (error.message.includes('401')) {
        responseMessage.textContent = `Invalid API key: ${API_key}`;
        img.src = './img/opps.jpg';
      } else {
        responseMessage.textContent = 'Error fetching GIF: ' + error.message;
        img.src = './img/opps.jpg';
      }
    }
  }

  getGiphy();
});

searchBox.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    searchBtn.click();
  }
});
