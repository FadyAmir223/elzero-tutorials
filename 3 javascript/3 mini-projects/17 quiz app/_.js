let question = document.querySelector('.question'),
answers = document.querySelector('.answers'),
time = document.querySelector('.time'),
counter = document.querySelector('.q-counter'),
result = document.querySelector('.result');

let url = './questions.json',
current = 0,
correct = 0,
data;

getJSON(url);

window.onload = _ => {
  for (let i = 0; i < data.length; i++)
    counter.append(document.createElement('span'));
  data = shuffle(data);
  loadQuestion(current);
};

answers.addEventListener('click', e => {
  for (let i of answers.children) {
    if (e.target != i) continue;
    if (i.textContent == data[current].answer) correct++;
    current != data.length - 1 ? loadQuestion(++current) : end();
  }
});

let ctr = setInterval(_ => {
  if (--time.textContent == 0)
    current != data.length - 1 ? loadQuestion(++current) : end();
}, 1000);

function getJSON(url) {
  fetch(url)
  .then(res => { return res.json() })
  .then(res => data = res)
}

function loadQuestion(idx) {
  question.textContent = data[idx].question;
  answers.textContent = '';
  data[idx].choices = shuffle(data[idx].choices);

  for (let i = 0; i < data[idx].choices.length; i++) {
    let answer = document.createElement('span');
    answer.textContent = data[idx].choices[i];
    answers.append(answer);
  }
  counter.children[idx].className = 'on';
  time.textContent = 59;
}

function end() {
  document.querySelector('.quiz-app').remove();
  result.firstElementChild.textContent = correct;
  result.style.display = 'flex';
}

function shuffle(a) {
  for (let i = a.length - 1; i >= 0; i--) {
    let rand = Math.trunc(a.length * Math.random());
    [a[i], a[rand]] = [a[rand], a[i]]
  }
  return a;
}
