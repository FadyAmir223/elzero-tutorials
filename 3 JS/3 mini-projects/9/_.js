let input = document.getElementsByTagName('input')[0];
let div = document.getElementsByTagName('div')[0];
let span = document.getElementsByTagName('span')[0];

maxLenght = input.getAttribute('maxlength');
span.textContent = maxLenght;

input.oninput = _ => {
  span.textContent = maxLenght - input.value.length;
  div.style.width = `${input.value.length * 100 / maxLenght}%`;
};
