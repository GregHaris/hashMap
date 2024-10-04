export function createInputEle(lable, inputName, inputType, inputClass) {
  const inputContainer = document.createElement('div');
  const input = document.createElement('input');
  input.name = inputName;
  input.type = inputType;
  input.id = inputName;
  input.classList.add(inputClass);

  const inputLabel = document.createElement('label');
  inputLabel.htmlFor = inputName;
  inputLabel.textContent = lable;

  inputContainer.append(inputLabel, input);
  return inputContainer;
}

export function createButtonEle(buttonText, buttonID) {
  const buttonContainer = document.createElement('div');
  const button = document.createElement('button');
  button.textContent = buttonText;
  button.id = buttonID;
  buttonContainer.appendChild(button);

  return buttonContainer;
}

export function createImageEle() {
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  imageContainer.appendChild(image);
  return imageContainer;
}

export function createParagraphElement() {
  const paraContainer = document.createElement('div');
  const para = document.createElement('p');
  para.id = 'responseMessage';
  paraContainer.appendChild(para);

  return paraContainer;
}
