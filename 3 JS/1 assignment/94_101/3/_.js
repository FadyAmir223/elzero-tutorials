let _div = document.getElementsByTagName('div')[0];
let _p   = document.getElementsByTagName('p')[0];
_p.remove();

let _before = document.createElement('div');
_before.className = 'start';
_before.setAttribute('title', 'Start Element');
_before.setAttribute('data-value', 'Start');
_before.textContent = 'Start';
_div.before(_before);

let _after = document.createElement('div');
_after.className = 'end';
_after.setAttribute('title', 'End Element');
_after.setAttribute('data-value', 'End');
_after.textContent = 'End';
_div.after(_after);
