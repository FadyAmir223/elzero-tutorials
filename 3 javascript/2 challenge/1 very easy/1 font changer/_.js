let s = document.getElementsByTagName('select')[0];
let t = document.getElementsByTagName('h1')[0];

localStorage.getItem('font') ? localStorage.font : s[s.selectedIndex].value;
window.onload = _ => t.style.fontFamily = localStorage.font;

s.onchange = _ => {
  localStorage.font = s[s.selectedIndex].value
  t.style.fontFamily = localStorage.font;
}
