fetch("../1/_.json")
.then((res) => {
  return res.json();
})
.then((res) => {
  res.length = 5;
  return res;
})
.then(
  result => {
  console.log(result);
  let main = document.createElement('div');
  for (i of result) {
    let _div = document.createElement('div');
    _div.innerHTML +=
    `<div>
      <h3>${i['title']}</h3>
      <p>${i['description']}</p>
    </div>
    `
    main.append(_div);
  }
  document.body.prepend(main);
});
