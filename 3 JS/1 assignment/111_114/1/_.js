let _font  = document.querySelector("#font");
let _color = document.querySelector("#color");
let _size  = document.querySelector("#size");

for (let i = 16; i <= 30; i++) {
  _opt = document.createElement("option");
  _opt.setAttribute("value", i);
  _opt.innerText = i;
  _size.append(_opt);
}

_font.selectedIndex  = window.localStorage.getItem('font')  ? window.localStorage.font  : 0;
_color.selectedIndex = window.localStorage.getItem('color') ? window.localStorage.color : 0;
_size.selectedIndex  = window.localStorage.getItem('size')  ? window.localStorage.size  : 0;

change_css()

_font.addEventListener( 'change', _ => window.localStorage.font  = _font.selectedIndex);
_color.addEventListener('change', _ => window.localStorage.color = _color.selectedIndex);
_size.addEventListener( 'change', _ => window.localStorage.size  = _size.selectedIndex);

let _select = document.querySelectorAll('select');
_select.forEach(el => el.addEventListener('change', change_css));

function change_css() {
  document.querySelector('body').style.cssText =
  `font-size: ${_size.value}px; color: ${_color.value}; font-family: ${_font.value}, sans-serif;`;
}
