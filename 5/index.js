const URL = 'https://restcountries.com/v2/all'
fetch(URL)
	.then(res => res.json())
	.then(data => renderData(data))

	function renderData(dataArray) {
		dataArray.forEach(item => {
			let prod = `
			<div class='item-frame'>
			<p class='item-name'>${item.name}</p>
			<img src=${item.flag} alt="flag">
			</div>`

			document.querySelector('.item').innerHTML += prod
		})
	}