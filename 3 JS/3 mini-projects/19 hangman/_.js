let category = document.querySelector('.cat span'),
keyboard = document.querySelector('.keyboard'),
guess = document.querySelector('.guess'),
final = document.querySelector('.final'),

_base = document.querySelector('.draw .base'),
_line = document.querySelector('.draw .line'),
_hang = document.querySelector('.draw .hang'),
_head_1 = document.querySelector('.draw .head-1'),
_head_2 = document.querySelector('.draw .head-2'),
_body = document.querySelector('.draw .body'),
_hand = document.querySelector('.draw .hand'),
_leg = document.querySelector('.draw .leg')

let draw = [_base, _line, _hang, _head_1, _head_2, _body, _hand, _leg],
wrong, gameover;

[...Array(26).keys()].map(i => String.fromCharCode(i + 65))
.forEach(i => {
  let letter = document.createElement('span');
  letter.textContent = i;
  keyboard.append(letter);
});

function getWord() {
  fetch('./words.json')
  .then(res => { return res.json() })
  .then(data => {
    let categories = Object.keys(data),
    randomCat = categories[Math.trunc(categories.length * Math.random())];
    randomWord = data[randomCat][Math.trunc(data[randomCat].length * Math.random())],
    wordLen = randomWord.length;
    category.textContent = randomCat;
    
    guess.innerHTML = '';
    [...randomWord].forEach(i => {
      let empty = document.createElement('span');
      if (i === ' ') {
        empty.className = 'space';
        wordLen--;
      }
      guess.append(empty);
    });
  });
}

function init() {
  getWord();
  wrong = 0,
  gameover = false;
  draw.forEach(i => i.style.display = 'none');
  keys.forEach(i => {
    i.classList.remove('done'),
    i.style.pointerEvents = 'auto';
  });
}

let keys = document.querySelectorAll('.keyboard span');
init();

keys.forEach(i => {
  i.onclick = _ => {
    if (!i.classList.contains('done') && !gameover) {
      i.className = 'done';
      let isWrong = false;
  
      for (let j = 0; j < randomWord.length; j++)
        if (i.textContent == randomWord[j].toUpperCase()) {
          guess.children[j].textContent = i.textContent;
          isWrong = true;
          wordLen--;
        }
      if (!isWrong) draw[wrong++].style.display = 'block';
      if (wrong == 8 || wordLen == 0) {
        gameover = true;

        final.children[1].innerHTML = wordLen == 0
        ? `<p>congratulations</p>`
        : `<p>game over <br> word is <span>${randomWord}</span></p>`

        keys.forEach(i => i.style.pointerEvents = 'none');
        final.classList.remove('hide');
        document.querySelector('.final button').onclick = _ => {
          final.classList.add('hide');
          init();
        }
      }
    }
  };
});

window.addEventListener('keypress', function (e) {
  let key = e.key.charCodeAt(), isletter = false;

  if (key >= 65 && key <= 90) key -= 65, isletter = true;
  else if (key >= 97 && key <= 122) key -= 97, isletter = true;

  if (isletter) keys[key].click();
}, false);
