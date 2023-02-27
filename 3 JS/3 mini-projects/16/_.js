let span = document.getElementsByTagName('span')[0],
out = document.querySelector('.data');

span.onclick = _ => getUser();

function getUser() {
  let url = 'https://jsonplaceholder.typicode.com/users';

  fetch(url)
  .then(res => { return res.json() })
  .then(data => {
    out.innerHTML = '';
    data.forEach(i => {
      let user = document.createElement('div');
      user.classList.add('user');
      
      let name = document.createElement('span');
      name.classList.add('name');
      name.innerText = i['name'];
      user.append(name);

      let city = document.createElement('span');
      city.classList.add('city');
      city.innerText = i['address']['city'];
      user.append(city);

      let phone = document.createElement('span');
      phone.classList.add('phone');
      phone.innerText = i['phone'];
      user.append(phone);

      out.append(user);
    });
  });
}
