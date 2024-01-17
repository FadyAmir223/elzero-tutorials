let scores = document.getElementsByTagName('td');
let td = document.getElementsByTagName('td');
let score = [0, 0], names = [td[0].textContent, td[2].textContent];

for (let i = 1; i < td.length; i+=2) {
  _score = +td[i].textContent;
  i % 4 == 1 ? score[0] += _score : score[1] += _score;
}

let table   = document.createElement('table');
let caption = document.createElement('caption');
caption.textContent = 'Total Points';
table.append(caption);

for (let i = 0; i < score.length; i++) {
  let tr = document.createElement('tr');

  let td1 = document.createElement('td');
  td1.textContent = names[i];

  let td2 = document.createElement('td');
  td2.textContent = score[i]

  tr.append(td1)
  tr.append(td2)
  table.append(tr);
}

document.body.append(table);
