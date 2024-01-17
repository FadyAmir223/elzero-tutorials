document.body.style.setProperty('font-family', 'sans-serif');

let _page = document.createElement("div");
_page.className = "page";
document.body.prepend(_page);

	let _header = document.createElement("header");

		let _logo = document.createElement("h3");
		_logo.textContent = "Elzero";
		_logo.style.cssText = "color: green; font-size: 20px;";

		_header.style.cssText = "display: flex; align-items: center; justify-content: space-between; background-color: black; padding: 0 10px; margin-bottom: 10px";
		_header.append(_logo);

			let _nav = document.createElement("ul");

				let nav_list = ["Home", "About", "Service", "Contact"];
				for (let i of nav_list) {
					let _nav_item = document.createElement("li");
					_nav_item.textContent = i;
					_nav_item.style.cssText = "margin-right: 10px;";
					_nav.append(_nav_item);
				}
			
			_nav.style.cssText = "list-style: none; padding: 0; display: flex";
			_header.append(_nav);
	_page.append(_header);

	let _products = document.createElement('div');

		for (let i = 0; i < 15; i++) {
			let _product = document.createElement('div');

				_title = document.createElement('h3');
				_title.textContent = i + 1;
				_title.style.cssText = 'font-size: 24px; font-weight: bold; margin: 15px 0 0;';
				_product.append(_title);

				_text = document.createElement('p');
				_text.textContent = 'Product';
				_text.style.cssText = 'font-size: 14px; color: #666';
				_product.append(_text);

			_product.style.cssText = 'background-color: black; display: flex; flex-direction: column; align-items: center;';
			_products.append(_product);
		}

	_products.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px';
	_page.append(_products);

	let _footer = document.createElement('footer');
	_footer.textContent = 'Copyright 2022';
	_footer.style.cssText = 'font-size: 24px; text-align: center; background-color: green; padding: 10px; margin-top: 10px;';
	_page.append(_footer);
