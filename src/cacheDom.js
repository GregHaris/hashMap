import {
  createInputEle,
  createButtonEle,
  createImageEle,
  createParagraphElement,
} from './createHtmlElements';

const API_keyInput = createInputEle(
  'Enter your API key: ',
  'api_keyInput',
  'text',
  'api-key-input',
);

const gifSearchEle = createInputEle(
  'Enter keyword: ',
  'gifSearchInput',
  'search',
  'gif-search-input',
);

const responseMessage = createParagraphElement();

const searchBtnEle = createButtonEle('Search', 'searchBtn');
const imageEle = createImageEle();

const container = document.querySelector('#container');
container.append(
  API_keyInput,
  gifSearchEle,
  searchBtnEle,
  imageEle,
  responseMessage,
);

export function cacheDOM() {
  const API_keyInputBox = container.querySelector('#api_keyInput');
  const searchBox = container.querySelector('#gifSearchInput');
  const img = container.querySelector('img');
  const searchBtn = container.querySelector('#searchBtn');
  const responseMessage = container.querySelector('#responseMessage');

  return { API_keyInputBox, searchBox, img, responseMessage, searchBtn };
}
