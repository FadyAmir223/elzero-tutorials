_div = document.querySelector('div');

setInterval(_ => _div.textContent > '0' ? _div.textContent-- : clearInterval(), 1000);
