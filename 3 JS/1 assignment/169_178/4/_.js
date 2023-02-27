let req = new XMLHttpRequest();
req.open("GET", "../1/articles.json");
req.send();

req.onreadystatechange = function () {
  if (req.status == 200 && req.readyState == 4) {
    let mainData = JSON.parse(this.responseText);
    let data = document.createElement("div");
    data.id = "data";
    for (let i of mainData)
      data.innerHTML +=
      `<div>
        <h2>${i["title"]}</h2>
        <p>${i["body"]}</p>
        <p>Author: ${i["author"]}</p>
        <p>Category: ${i["category"]}</p>
      </div>
      `;
    document.body.prepend(data);
  }
};
