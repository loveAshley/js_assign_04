
/*
 * your javascript goes here
*/



// add items & add deletebtn

var form = document.getElementById("todoForm");
console.log(form);
var mol = document.getElementById("todoList");
console.log(mol);

var inputList = document.getElementById("addTodoItem");
console.log(inputList);

const ls = localStorage;
let counter = ls.length + 1;
console.log(counter);

// QS


function todoList(e){
	e.preventDefault();
	if (!inputList.value){
		return
	};
	var item = inputList.value;
	console.log(item);
	arr = [];
	arr.push(item);
	ls.setItem(counter, JSON.stringify(arr));
	counter = counter + 1;
	document.getElementById("addTodoItem").value = '';

	render()

}

form.addEventListener("submit", todoList);


function render(a){
	const ol = document.querySelector("ol");
	ol.innerHTML="";

	for(let i = 0 ; i < ls.length ; i++){
	
		var newItem = document.createElement("li");
		var deleteBtn = document.createElement("span");

		let indexKey = ls.key(i);
		let itemValue = JSON.parse(ls.getItem(indexKey));


		deleteBtn.textContent = "delete";

		newItem.textContent = itemValue;
		newItem.setAttribute('id',indexKey);

		
		ol.appendChild(newItem);
		newItem.appendChild(deleteBtn);
		deleteBtn.addEventListener("click", removeItem);
		newItem.addEventListener("click",todoDone);
	}
}

// remove the li

function removeItem(b){
	var liItem = b.target.parentElement;
	var idItem = liItem.getAttribute('id');

	mol.removeChild(liItem);
	ls.removeItem(idItem);

}

// add red line & remove

function todoDone (c){
	c.currentTarget.classList.toggle("done");
}

render();

// QS 
// const form = document.getElementById('form')
// let mydb = []

// const ls = localStorage


// for(let i = 0; i < ls.length; i++) {
//   let key = ls.key(i)
//   console.log(`key ${key} is ${ls.getItem(key)}`)
// }

// ls.setItem('list', JSON.stringify(mydb))
//   const outList = JSON.parse(ls.getItem('list'))
//   console.log(outList)
