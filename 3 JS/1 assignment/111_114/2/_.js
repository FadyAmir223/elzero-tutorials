_all = document.querySelectorAll('form > *');

if (window.sessionStorage.getItem('i_1')) _all[0].value = window.sessionStorage.getItem('i_1');
if (window.sessionStorage.getItem('i_2')) _all[1].value = window.sessionStorage.getItem('i_2');
if (window.sessionStorage.getItem('i_2')) _all[2].value = window.sessionStorage.getItem('i_3');
if (window.sessionStorage.getItem('_s_')) _all[3].value = window.sessionStorage.getItem('_s_');

_all.forEach(function callback(item, idx) {
  item.addEventListener('blur', _ => {
    switch (idx) {
      case 0:
        window.sessionStorage.i_1 = item.value;
        break;
      case 1:
        window.sessionStorage.i_2 = item.value;
        break;
      case 2:
        window.sessionStorage.i_3 = item.value;
        break;
      case 3:
        window.sessionStorage._s_ = item.value;
    }
  });
});
