let req = new XMLHttpRequest();
req.open('GET', '../1/articles.json');
req.send();
req.onreadystatechange = function () {
  if (req.status == 200 && req.readyState == 4)
    console.log(this.responseText);
};

req.onloadend = _ => console.log('Data Loaded');

// Needed Output
"JSON Object Content Here"
"Data Loaded"