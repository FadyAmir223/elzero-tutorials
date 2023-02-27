let imgs = document.querySelectorAll('.slider img'),
slideNum = document.querySelector('.slide-number'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
nav = document.querySelector('ul');

for (let i = 0; i < imgs.length; i++) {
  let li = document.createElement('li');
  li.textContent = i + 1;
  nav.append(li);
}

let navList = document.querySelectorAll('ul li');

let selected = 0;
navList[selected].classList.add('active');
imgs[selected].classList.add('active');

slideNum.textContent = `page ${selected + 1}# of ${imgs.length}`;

check();

navList.forEach((i, idx) => {
  i.onclick = _ => {
    activate(idx);
    selected = idx;
    check();
  }
});

next.onclick = _ => {
  activate(selected + 1);
  selected++;
  check();
};

prev.onclick = _ => {
  activate(selected - 1);
  selected--;
  check();
};

function activate(idx) {
  if (selected >= 0 && selected < imgs.length) {
    navList[selected].classList.remove('active');
    imgs[selected].classList.remove('active');
  
    navList[idx].classList.add('active');
    imgs[idx].classList.add('active');
  }
}

function check() {
  selected == 0
  ? prev.classList.add('disable') 
  : prev.classList.remove('disable')

  selected == imgs.length - 1
  ? next.classList.add('disable') 
  : next.classList.remove('disable')
}
