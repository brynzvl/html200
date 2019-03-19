
let formElement = document.querySelector('form');
console.log(formElement);

formElement.addEventListener('submit', function(e) {
	e.preventDefault();
	console.log('form submitted');
	console.log(form.elements[0].value);
	console.log(form.elements[1].value);
	console.log(form.elements[2].value);
	const inputValue = formElement.elements[0].value
	const dogName = formElement.elements[1].value

	const dataToSubmit = {
		name: inputValue,
		dog: dogName
	}

	// do codes

	console.log(dataTosubmit);
})
