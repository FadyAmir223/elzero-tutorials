let _div = document.querySelector("div");

let ctr = setInterval(() => {
  if (parseInt(_div.textContent) > 5) _div.textContent--;
  else {
    window.open('https://elzero.org/', '_blank', 'width=500, height=500, top=20, left=20');
    clearInterval(ctr);
  }
}, 1000);
