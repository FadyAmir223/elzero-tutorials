let wordsCopy,
easyWords = [
  'Hello',
  'Code',
  'Town',
  'Country',
  'Testing',
  'Youtube',
  'Linkedin',
  'Twitter',
  'Github',
  'Python',
  'Scala',
  'Coding',
  'Funny',
  'Working',
  'Task',
  'Runner',
  'Rules',
  'Test',
  'Rust',
  'Playing',
],
normalWords = [
  ...easyWords,
  'Leetcode',
  'Internet',
  'Paradigm',
  'Styling',
  'Casecade'
],
hardWords = [
  ...normalWords,
  'Programming',
  'JavaScript',
  'Destructuring',
  'Documentation',
  'Dependencies',
];

let lv = {
  easy: {seconds: 5, words: easyWords},
  normal: {seconds: 3, words: normalWords},
  hard: {seconds: 2, words: hardWords}
},
lvDiff,
lvSec;

let savedScores = localStorage.getItem('score')
? JSON.parse(localStorage.score) : [];

let st1Word = true;

let msg = document.querySelector('.msg'),
word = document.querySelector('.word')
start = document.querySelector('.start'),
input = document.getElementsByTagName('input')[0],
wordsList = document.querySelector('.words'),
stat = document.querySelector('.stat'),
timeMsg = document.querySelector('.stat .time'),
scoreVal = document.querySelector('.stat .score .score-value'),
wordLen = document.querySelector('.stat .score .word-length'),
final = document.querySelector('.final'),
features = document.querySelector('.features'),
select = document.getElementsByTagName('select')[0],
showScore = document.querySelector('.show-score');
scoreList = document.querySelector('.score-list');

function chooseLv() {
  lvDiff = select[select.selectedIndex].value,
  lvSec = lv[lvDiff]['seconds'];

  msg.firstElementChild.textContent = `[ ${lvDiff} ]`;
  msg.lastElementChild.textContent = `[ ${lvSec} ]`;

  timeMsg.children[0].textContent = lvSec;
  wordLen.textContent = lv[lvDiff]['words'].length;
}

select.onload = chooseLv();
select.onchange = _ => chooseLv();

input.onpaste = _ => { return false };

start.onclick = function () {
  this.style.display = 'none';
  word.style.display = 'block';
  input.style.display = 'block';
  wordsList.style.display = 'flex';
  stat.style.display = 'flex';
  final.style.display = 'none';
  features.style.display = 'none';
  scoreList.innerHTML = '';

  input.focus();
  scoreVal.textContent = 0;
  wordsCopy = [...lv[lvDiff]['words']];

  showWords();
};

function showWords() {
  countdown();
  input.value = '';

  if (st1Word) {
    timeMsg.children[0].textContent = lvSec + 3;
    st1Word = false;
  }
  else
    timeMsg.children[0].textContent = lvSec;

  wordIdx = Math.trunc(Math.random() * wordsCopy.length);
  word.textContent = wordsCopy[wordIdx];
  wordsCopy.splice(wordIdx, 1);
  
  wordsList.textContent = '';
  wordsCopy.forEach(i => {
    let word = document.createElement('span');
    word.textContent = i;
    wordsList.append(word);
  })
}

function countdown() {
  let count = setInterval(_ => {
    if (--timeMsg.children[0].textContent == 0) {
      clearInterval(count);

      if (word.textContent.toLowerCase() == input.value.toLowerCase()) {
        scoreVal.textContent++;
        wordsCopy.length != 0 ? showWords() : win();
      }
      else
        gameOver();
    }
  }, 1000);
}

function  win() {
  final.classList.add('win');
  final.textContent = 'Congrats';
  finish();
}

function gameOver() {
  final.classList.add('lose');
  final.textContent = 'Game Over';
  finish();
}

function finish() {
  st1Word = true;

  start.style.display = 'block';
  input.style.display = 'none';
  word.style.display = 'none';
  wordsList.style.display = 'none';
  final.style.display = 'block';
  features.style.display = 'flex';

  savedScores.push({'id': new Date(), 'data': scoreVal.textContent})
  savedScores = savedScores.sort((a, b) => b['data'] - a['data']);
  savedScores.length = savedScores.length > 5 ? 5 : savedScores.length;
  localStorage.score = JSON.stringify(savedScores);
}

showScore.onclick = _ => {
  scoreList.innerHTML = '';
  savedScores.forEach(i => {
    let span = document.createElement('span');
    span.textContent = i['data'];
    scoreList.append(span);
  });
};
