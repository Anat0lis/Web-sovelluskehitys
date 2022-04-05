
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;
var authors = [];

var table = document.createElement('table');
let book = document.createElement('h1');
let heading = document.createElement('tr');
var row = document.createElement('tr');
document.body.appendChild(book);
table.appendChild(heading);
table.appendChild(row);
for (let i=0; i < books.length; i++) {
	authors[i] = books[i].authors[0];
	let head = document.createElement('th');
	head.innerHTML = authors[i];
	heading.appendChild(head);
}
for (let i=0; i < books.length; i++) {
	console.log(books[i].title + " " + books[i].year);
	var item = document.createElement('td');
	item.onclick = function(){
		book.innerHTML = books[i].title;
	};
	item.innerHTML = books[i].title + " " + books[i].year;
	row.appendChild(item);
}
document.body.appendChild(table);


