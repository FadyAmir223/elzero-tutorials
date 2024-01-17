let _div = document.querySelector("div");

let ctr = setInterval(() => {
  if (parseInt(_div.textContent) > 5) _div.textContent--;
  else {
    location.assign('https://elzero.org/');
    clearInterval(ctr);
  }
}, 1000);
