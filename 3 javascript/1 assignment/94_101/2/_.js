let _add = document.getElementsByClassName('classes-to-add')[0];
let _remove = document.getElementsByClassName('classes-to-remove')[0];
let _res = document.querySelector('.classes-list div');

window.onload = _ => _res.textContent = 'No Classes To Show';

_add.onblur = function () {
  if (_add.value !== '') {
		if (_res.textContent == 'No Classes To Show')
			_res.textContent = '';

		let _classes = _add.value.toLowerCase().split(' ');
    elemLable: for (let i of _classes) {
			for (let j of _res.children)
				if (i.indexOf(j.textContent) != -1)
					continue elemLable;
				_span = document.createElement('span');
				_span.textContent = i;
				_res.append(_span);
			}
			sortReset(_classes);
			_add.value = '';
  }
};

_remove.onblur = function () {
  if (_remove.value !== '') {
    let _classes = _remove.value.toLowerCase().split(' ');
		for (let i = 0; i < _res.children.length; i++)
			if (_classes.indexOf(_res.children[i].textContent) != -1)
				_res.children[i--].remove();

		if (_res.textContent == '')
			_res.textContent = 'No Classes To Show';
    _remove.value = '';
  }
};

function sortReset () {
	let arr = [];
	for (i of _res.children)
		arr.push(i.textContent);
	_res.textContent = '';
	arr.sort().join(' ');
	for (i of arr) {
		_span = document.createElement('span');
		_span.textContent = i;
		_res.append(_span);
	}
}
