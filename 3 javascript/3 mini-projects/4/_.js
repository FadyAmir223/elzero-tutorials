let div = document.getElementsByTagName('div')[0];
let span = document.getElementsByTagName('span')[0];

let s = [
  ...Array(10).keys(),
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97)),
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65))
].join('');

span.onclick = _ => {
  let pass = '';
  for (let i = 0; i < 20; i++)
    pass += s[Math.floor(Math.random() * s.length)]
  div.textContent = pass;
};
