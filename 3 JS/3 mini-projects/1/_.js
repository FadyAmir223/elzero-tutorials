let span = document.getElementsByTagName('span')[0];

window.onscroll = _ => {
  // span.style.opacity = this.scrollY >= 1000 ? 1 : 0;
  span.style.display = this.scrollY >= 1000 ? 'block' : 'none';
}

span.onclick = _ => {
  // window.scrollTo(0, 0);
  window.scrollTo({top: 0, behavior: 'smooth'});
}
