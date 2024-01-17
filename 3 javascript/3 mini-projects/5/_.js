let li = [...document.querySelectorAll('ul li')];
let active_idx = 0;

li.forEach((i, idx) => {
  i.addEventListener('click', e => {
    if (active_idx !== idx) {

      li[active_idx].classList.remove('active');
      i.classList.add('active');
      active_idx = idx;

      [...document.images].forEach(j => j.style.display = 'block');
      let img = [...document.querySelectorAll(`img:not(${e.currentTarget.dataset.cat})`)];
      img.forEach(j => j.style.display = 'none');
    }
  })
});
