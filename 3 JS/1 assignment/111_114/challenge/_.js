let _npt = document.querySelector('.add-npt');
let _add = document.querySelector('.add-btn');
let _out = document.querySelector('.out');
let _del = document.getElementsByClassName('del');

// localStorage.clear();
let meta = localStorage.getItem('meta') ? JSON.parse(localStorage.meta) : [];
for (i of meta) add_load(i);

_add.addEventListener('click', _ => {
  if(_npt.value) {
    add_load(_npt.value);
    meta.push(_npt.value);
    localStorage.meta = JSON.stringify(meta);
    _npt.value = '';
  }
});

Array.from(_del).forEach(i => {
  i.addEventListener('click', _ => {
    i.parentElement.remove();
    meta.splice(meta.indexOf(i.previousElementSibling.innerText), 1);
    localStorage.meta = JSON.stringify(meta);
  });
});

function add_load(text) {
  let _item = document.createElement('div');
  _item.className = 'item';
  
  let _txt = document.createElement('span');
  _txt.innerText = text;
  _item.append(_txt);

  let _del = document.createElement('button');
  _del.className = 'del';
  _del.innerText = 'Delete';
  _item.append(_del);

  _out.append(_item);
}
