let form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
	let flag = true;
 for(let i=0; i<form.elements.length;i++){
	 if (form.elements[i].value === ''){
		 form.elements[i].classList.add('invalid');
		 flag = false;
	 } else {
		 form.elements[i].classList.remove('invalid');
	 }
 }
	console.log(form.elements[0].value);
	console.log(form.elements[1].value);
	console.log(form.elements[2].value);
	console.log(form.elements[3].value);
	if (flag){
		alert('Your submission has been received');
	}
 })
