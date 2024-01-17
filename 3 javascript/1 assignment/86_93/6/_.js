let _form = document.forms[0];
let _number = document.querySelector('[type="number"]');
let _text = document.querySelector('[type="text"]');
let _elem = document.getElementsByTagName("select")[0];
let _submit = document.querySelector('[type="submit"]');
let _result = document.getElementsByClassName("results")[0];

_form.onsubmit = (e) => e.preventDefault();

_submit.onclick = function () {
  _result.innerHTML = "";
  for (i = 0; i < _number.value; i++) {
    res_i = document.createElement(_elem.options[_elem.selectedIndex].text);
    res_i.className = "box";
    res_i.setAttribute("title", "Element");
    res_i.setAttribute("id", `id-${i + 1}`);
    res_i.textContent = _text.value;

    _result.appendChild(res_i);
  }
};
