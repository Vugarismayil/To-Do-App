let count = 0;
let h1 = document.querySelector(".taskmsg")
h1.innerHTML = 'task Yoxdur'
let message1 = document.querySelector('.message')
function add() {
	let input = document.getElementById("Input").value;
	if (input !== "") {
		h1.innerHTML = ''
		message1.innerHTML='Task Creeated'

		count++;
		let list = document.getElementById("list");
		let p = document.createElement("p");
		let node = document.createTextNode(input);
		let delButton = document.createElement("button");
	   delButton.style.backgroundColor = "Red"
		delButton.style.borderRadius = '20px'
		delButton.style.padding = "10px 50px"
		delButton.style.margin = "20px"
		delButton.style.color = "white"
		let delText = document.createTextNode("Delete");
		delButton.appendChild(delText);
		message1.classList.remove('d-none')
		delButton.onclick = function () {
			list.removeChild(p);
			count--;
			document.getElementById("count").textContent = count;
		}

		setTimeout(() => {
			message1.classList.add('d-none')
		}, 2500);

		p.appendChild(node);
		p.appendChild(delButton);
		list.appendChild(p);
		document.getElementById("Input").value = "";
		document.getElementById("count").textContent = count;

	}
	else {
		alert("Task Qeyd etməmisiniz")
	}
}


function Alldelete() {
	let list = document.getElementById("list");
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
	count = 0;
	document.getElementById("count").textContent = count;
}




