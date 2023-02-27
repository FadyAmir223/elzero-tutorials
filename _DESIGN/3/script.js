// countdown
let date = document.querySelectorAll('.events .number'),
ch = new Date('feb 28 2023 23:59:59');

let counter = setInterval(_ => {
  let now = new Date(),
  diff = ch - now,
  days = Math.trunc(diff / (1000 * 60 * 60 * 24)),
  hours = Math.trunc(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
  minutes = Math.trunc(diff % (1000 * 60 * 60) / (1000 * 60)),
  seconds = Math.trunc(diff % (1000 * 60) / 1000);

  date[0].textContent = days;
  date[1].textContent = hours;
  date[2].textContent = minutes;
  date[3].textContent = seconds;
}, 1000);

// progress
let skills = document.querySelector('.skills'),
bar = [...document.querySelectorAll('.skills .bar span')];

// stat
let stat = document.querySelector('.stat'),
prog = [...document.querySelectorAll('.stat .number')];
done = false;

window.onscroll = _ => {
  if(window.scrollY >= skills.offsetTop)
    bar.forEach(i => i.style.width = i.dataset.width)

  if (window.scrollY >= stat.offsetTop && !done)
    prog.forEach(i => {
      let goal = i.dataset.stat,
      count = setInterval(() => {
        if (++i.textContent == goal)
          clearInterval(count);
      }, 2000 / goal);
      done = true;
    });
};
