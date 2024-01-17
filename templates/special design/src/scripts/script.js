function setActive(el) {
  [...el.parentElement.children].forEach(i => i.classList.remove('active'));
  el.classList.add('active');
}

function scrollTo(elList, link=false) {
  elList.forEach((i, idx) => {
    i.addEventListener('click', e => {
      if(link) {
        e.preventDefault();
        idx++;
      }
      else {
        setActive(i);
      }
      pages[idx].scrollIntoView({behavior: 'smooth'});
    });
  });
}

function setActiveBullet() {
  pages.forEach((i, idx) => {
    if (scrollY > i.offsetTop)
      setActive(bullets[idx])
  });
}

let links = document.querySelectorAll('header ul li a');
scrollTo(links, true);


// sidebar
// gear / open - close
document.querySelector(".sidebar .icon").onclick = function () {
  this.firstElementChild.classList.toggle("fa-spin");
  this.parentElement.classList.toggle('open');
};


// sidebar - colors
let colors =  document.querySelectorAll('.sidebar .colors ul li');

// onload - colors
if (!localStorage.getItem('color')) {
  colors[0].classList.add('active');
  document.documentElement.style.setProperty('--color', colors[0].dataset.color);
}
else
  colors.forEach(i => {
    if (localStorage.color == i.dataset.color) {
      i.classList.add('active');
      document.documentElement.style.setProperty('--color', i.dataset.color);
    }
  });

// select
colors.forEach(i => {
  i.onclick = () => {
    localStorage.setItem('color', i.dataset.color);
    document.documentElement.style.setProperty('--color', i.dataset.color);
    setActive(i);
  }
});


// landing
let imgs = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'],
backgroundImg = document.querySelector('.landing'),
randomBackground = true,
BackgroundTimer;

backgroundImg.style.background = localStorage.getItem('currImg')
? `url(../images/${localStorage.currImg})`
: `url(../images/${[imgs[0]]})`

function randomizeBackground() {
  if (randomBackground) {
    BackgroundTimer = setInterval(() => {
      currImg = imgs[Math.floor(imgs.length * Math.random())];
      localStorage.currImg = currImg;
      backgroundImg.style.background = `url(../images/${currImg})`;
    }, 10000);
  }
}

// sidebar - random background
backgroundOpt = document.querySelectorAll('.rand-background .opt span')

// onload
if (!localStorage.getItem('randBackground')) {
  randomizeBackground();

  backgroundOpt.forEach(i => {
    if (i.classList.contains('true'))
      i.classList.add('active');
  });
}
else {
  backgroundOpt.forEach(i => {
    if (i.classList.contains(localStorage.randBackground)) {
      i.classList.add('active');
      randomBackground = (localStorage.randBackground == 'true');
      if (randomBackground) randomizeBackground();
    }
  })
}

backgroundOpt.forEach(i => {
  i.addEventListener('click', (e) => {
    if (!e.target.classList.contains('active')) {
      [...i.parentElement.children].forEach(j => j.classList.toggle('active'));
      localStorage.randBackground = e.target.dataset.background;

      if (e.target.dataset.background == "true") {
        randomBackground = true;
        randomizeBackground();
      }
      else {
        randomBackground = false;
        clearInterval(BackgroundTimer);
      }
    }
  });
});

/// bullets
// create
let bulletList = document.createElement('div');
bulletList.classList.add('bullet-list')

let pages = document.querySelectorAll('body > .section')

pages.forEach(i => {
  let bullet = document.createElement('div');
  bullet.classList.add('bullet');
  bullet.dataset.page = i.classList[0];
  bulletList.appendChild(bullet);
})

document.body.appendChild(bulletList)
bulletOpt = document.querySelectorAll('.sidebar .show-bullets .opt span')

// onload
if (!localStorage.getItem('bullets')) {
  bulletOpt[0].classList.add('active')
  if (bulletOpt[0].dataset.bullet == 'true')
    bulletList.style.display = 'block'
}
else {
  bulletOpt.forEach(i => {
    if (i.dataset.bullet == localStorage.bullets) {
      i.classList.add('active')
      if (i.dataset.bullet == 'true')
        bulletList.style.display = 'block'
    }
  });
}

// sidebra - bullets
bulletOpt.forEach(i => {
  i.addEventListener('click', (e) => {
    if (!e.target.classList.contains('active')) {
      [...e.target.parentElement.children].forEach(j => j.classList.toggle('active'));
      bulletList.style.display = e.target.dataset.bullet == 'true' ? 'block' : 'none'
      localStorage.bullets = e.target.dataset.bullet;
    }
  });
});

// bullets - navigate
let bullets = [...bulletList.children];
scrollTo(bullets);


// reset button
document.querySelector('button.reset').onclick = () => {
  localStorage.clear();
  location.reload();
};

// toggle menu
nav = document.querySelector('header nav');
document.querySelector('header .icon').onclick = function() {
  this.classList.toggle('open');
  nav.classList.toggle('open');
}

// scroll bullets
let skillsSec = document.querySelector('.skills');

onscroll = () => {
  if (scrollY > skillsSec.offsetTop)
    skillProgress = document.querySelectorAll('.skills .skill .skill-progress')
    .forEach(i => i.style.width = i.dataset.width);

    setActiveBullet()
}
setActiveBullet()


// pop-up gallery
let pop = document.querySelector('.pop_up-gallery'),
images = document.querySelectorAll('.gallery .img-list img');

images.forEach(i => {
  i.onclick = () => {
    document.querySelector('.pop_up-gallery .title').textContent = i.alt;
    document.querySelector('.pop_up-gallery img').src = i.src;
    pop.style.display = 'block';
  }
});

// close
document.querySelector('.pop_up-gallery .close').onclick = () =>
  pop.style.display = 'none';
