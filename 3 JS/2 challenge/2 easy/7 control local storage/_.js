let _in = document.getElementsByTagName("input")[0];
let _out = document.getElementsByTagName("h3")[0];
let _opt = document.getElementsByTagName("button");

let x = localStorage.getItem("x") ? JSON.parse(localStorage.x) : [];
let msg = "input can't be empty";
// check
_opt[0].onclick = (_) => {
  _out.innerHTML = '';
  let item = _in.value;
  _out.innerHTML =
    item == ""
      ? msg
      : x.indexOf(item) == -1
      ? `no local storage item with this name <span>${item}</span>`
      : `found local storage item called <span>${item}</span>`;
    _in.value = '';
};

// add
_opt[1].onclick = (_) => {
  _out.innerHTML = '';
  let item = _in.value;
  if (item == "") _out.innerHTML = msg;
  else {
    x.push(item);
    localStorage.x = JSON.stringify(x);
    _out.innerHTML = `local storage <span>${item}</span> added`;
  }
  _in.value = '';
};

// delete
_opt[2].onclick = (_) => {
  _out.innerHTML = '';
  let item = _in.value;
  if (item == "") _out.textContent = msg;
  else {
    if (x.indexOf(item) == -1)
      _out.textContent = `no local storage item with this name <span>${item}</span>`;
    else {
      x.splice(x.indexOf(item), 1);
      localStorage.x = JSON.stringify(x);
      _out.innerHTML = `deleted local storage item <span>${item}</span>`;  
    }
  }
  _in.value = '';
};

// show
_opt[3].onclick = (_) => {
  _out.innerHTML = '';
  if (x.length == 0) _out.innerHTML = 'local storage is empty';
  else {
    x.forEach(i => {
      let _div = document.createElement('span');
      _div.style.display = 'block';
      _div.textContent = i;
      _out.append(_div);
    })    
  }
};
