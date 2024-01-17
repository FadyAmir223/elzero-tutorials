let li = document.getElementsByTagName('li');
let p  = document.querySelectorAll('.content p');
let li_arr = [...li], p_arr  = [...p];

localStorage.active = localStorage.getItem('active') ? localStorage.active : 0;
li_arr[localStorage.active].classList.add('active');
p_arr[localStorage.active].classList.add('active');

li_arr.forEach((i, idx) => {
  i.onclick = _ => {
    li_arr[localStorage.active].classList.remove('active');
    i.classList.add('active');

    p_arr[localStorage.active].classList.remove('active');
    p[idx].classList.add('active');

    localStorage.active = idx;
  }  
});
