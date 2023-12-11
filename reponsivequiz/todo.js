var input = document.getElementById("todo-input");
var list = document.getElementById("todos"); 
var close = document.getElementsByClassName("close");
var i;

function add_todo() {
	var li = document.createElement("LI");
	txt = input.value;
	
	t = document.createTextNode(txt);
	li.appendChild(t)

	


	if(txt  ===''){
		alert("You must Write Something!");
	} else {
		list.appendChild(li);
		
	
		
	
		input.value = "";
	}

span = document.createElement("span");
tx = document.createTextNode("x");
span.appendChild(tx);
span.className ="close";
li.appendChild(span)

for(i = 0; i < close.length; i++){
	close[i].onclick = function(){
		this.parentElement.style.display ="none";
	}
}
}

list.addEventListener('click', function(evt){
	if (evt.target.tagName === "LI"){
		evt.target.classList.toggle("checked");
	}
});

input.addEventListener("keyup", function(evt){
	if (evt.keyCode === 13) {
		add_todo();
	}
})


