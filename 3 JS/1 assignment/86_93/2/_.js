let _div = document.getElementsByTagName('div');

for (i of _div) {
    _img = i.firstElementChild;
    _img.setAttribute('src', 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png');
    _img.setAttribute('alt', 'Elzero Logo');
    console.log(_img);
}
