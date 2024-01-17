let _one = document.querySelector('div.one');
let _two = document.querySelector('div.two');

let title_one = _one.getAttribute('title');
let title_two = _two.getAttribute('title');

_one.setAttribute('title', title_two);
_two.setAttribute('title', title_one);

[_one.textContent, _two.textContent] = [_two.textContent, _one.textContent]
_two.textContent += ` ${document.getElementsByTagName('div').length}`;
