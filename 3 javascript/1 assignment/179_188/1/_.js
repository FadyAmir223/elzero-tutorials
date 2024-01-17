let promise = new Promise((res, rej) => {
  let req = new XMLHttpRequest();
  req.open("GET", "./_.json");
  req.send();
  req.onload = function () {
    if (req.status == 200 && req.readyState == 4)
      res(JSON.parse(this.responseText));
    else
      rej(Error('wrong url'));
  };
})
.then(
  result => {
    result.length = 5;
    return result
  },
  rejMsg => { console.log(rejMsg); }
)
.then(
  result => {
  console.log(result);
  for (i of result) {
    _div = document.createElement('div');

    _h3  = document.createElement('h3');
    _h3.textContent = i['title'];
    _div.append(_h3);

    _p   = document.createElement('p');
    _p.textContent  = i['description'];
    _div.append(_p);

    document.body.append(_div);
  }
});
