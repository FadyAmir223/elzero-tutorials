let x;

x = document.getElementsByTagName('div')[0];
x = document.getElementById('elzero');
x = document.getElementsByClassName('element')[0];
x = document.getElementsByName('js')[0];

x = document.querySelector('div');
x = document.querySelector('#elzero');
x = document.querySelector('.element');
x = document.querySelector('[name="js"]');

x = document.querySelectorAll('div')[0];
x = document.querySelectorAll('#elzero')[0];
x = document.querySelectorAll('.element')[0];
x = document.querySelectorAll('[name="js"]')[0];

x = document.body.firstElementChild;
x = document.body.childNodes[1];
x = document.body.children[0];

console.log(x);
