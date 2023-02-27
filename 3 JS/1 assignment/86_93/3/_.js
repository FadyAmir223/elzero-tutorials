let _input = document.querySelector('input[type="number"]');
let _res = document.getElementsByClassName('result')[0];

_input.onchange = function(e){
    _res.textContent = _res.textContent
    .replace(`{${''}}`, _input.value)
    .replace(`{${''}}`, _input.value * 15.6);
};
