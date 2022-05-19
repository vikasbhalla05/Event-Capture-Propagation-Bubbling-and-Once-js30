let divs = document.querySelectorAll('div');

function logText(e){
	console.log(this);
	e.stopPropagation();
}
divs.forEach(div => div.addEventListener('click',logText), {
	capture: false
});