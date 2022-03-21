'use strict'
let notes = [];

function addItem() {
	let textbox = document.getElementById('item');
	let itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	let newItem = {title: itemText, quantity: 1};
	notes.push(newItem);
	displayList();
}

function displayList() {
	let table = document.getElementById('list');
	table.innerHTML = '';
	for (let i = 0; i<notes.length; i++) {
		let node = undefined;
		let note = notes[i];
		node = document.createElement('tr');
		node.innerHTML = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
		table.appendChild(node);
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	displayList();
}

let button = document.getElementById('add');
button.onclick = addItem;
