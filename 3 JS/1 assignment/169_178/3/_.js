// mainData Variable Content
let req = new XMLHttpRequest();
req.open("GET", '../1/articles.json');
req.send();
req.onreadystatechange = function () {
  if (req.status == 200 && req.readyState == 4) {
    let mainData = JSON.parse(this.responseText);
    for (let i of mainData) i["category"] = "All";
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};

// 0: {id: 1, title: 'Title 1', body: 'Article Number 1 Body', category: 'All', author: 'Ali'}
// 1: {id: 2, title: 'Title 2', body: 'Article Number 2 Body', category: 'All', author: 'Mahmoud'}
// 2: {id: 3, title: 'Title 3', body: 'Article Number 3 Body', category: 'All', author: 'Osama'}
// 3: {id: 4, title: 'Title 4', body: 'Article Number 4 Body', category: 'All', author: 'Sayed'}
// 4: {id: 5, title: 'Title 5', body: 'Article Number 5 Body', category: 'All', author: 'Ahmed'}

// UpdatedData Variable Content
("JSON Object Content Here");
