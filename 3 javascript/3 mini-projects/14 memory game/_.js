function createSlide() {
  let colors = ['000', '00f', '0f0', 'f00', '0ff', 'f0f', 'ff0', 'fff', '444', 'aaa'],
  colorsPair = [...colors, ...colors];
  colorsCtr = colorsPair.length,
  slides = document.querySelector('.slides');
  slides.innerHTML = '';
  
  for (let i = 0; i < colorsCtr; i++) {
    let idx = Math.trunc(Math.random() * colorsPair.length),
    color = colorsPair[idx];

    let img = document.createElement('img');
    img.setAttribute('src', `https://via.placeholder.com/120x120/${color}/${color}`);

    let slide = document.createElement('div');
    slide.classList.add('slide');

    face = document.createElement('div');
    face.classList.add('face-down')
    face.textContent = '?';

    slide.append(img, face);
    slides.append(slide);

    colorsPair.splice(idx, 1);
  }
}

createSlide();

let splash = document.querySelector('.splash span')
splash.onclick = _ => {
  // document.querySelector('.msg span').textContent = prompt('enter your name');

  splash.parentElement.style.display = 'none';
  createSlide();
  
  let wrong = document.querySelector('.wrong span'),
  back = document.querySelectorAll('.face-down');
  let openCtr = 0, openIdx,
  pairs = 0;
  
  back.forEach(i => i.style.display = 'none')
  setTimeout(() => {
    back.forEach(i => i.style.display = 'flex')
  }, 1500);

  back.forEach((i, idx) => {
    i.onclick = _ => {
      i.classList.add('flipped');
      if (++openCtr == 2) {
        back.forEach(i => i.style.pointerEvents = 'none');
  
        if (i.previousElementSibling.getAttribute('src') ==
        back[openIdx].previousElementSibling.getAttribute('src'))
          ++pairs == 10 ? clearInterval(counter) : resetSlides();
        else
          setTimeout(_ => {
            i.classList.remove('flipped');
            back[openIdx].classList.remove('flipped');
            wrong.textContent++;
            resetSlides();
          }, 1500);
      }
      else
        openIdx = idx;
    }
  });
  
  function resetSlides() {
    openCtr = 0;
    back.forEach(i => i.style.pointerEvents = 'auto');
  }
  
  let timer = document.querySelector('.timer'),
  time = timer.dataset.time,
  counter;
  
  setTimeout(_ => {
    counter = setInterval(() => {
      if (--time == 0) {
        clearInterval(counter);
        splash.parentElement.style.display = 'flex';
      }
      let minute = Math.trunc(time / 60),
      second = time % 60;
      timer.textContent = `${twoDigit(minute)}:${twoDigit(second)}`;
    }, 1000);
  }, 500);
  
  function twoDigit(n) {
    return String(n).length == 2 ? n : `0${n}`;
  }
};
