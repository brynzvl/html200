let message;

function dogInfo(name, breed, price) {
	message = (name + " is a " + breed + ". " + "Total adoption fees come to " + price);
	return message;
}

let adoption;

function calCost(totalCost) {
	adoption = ("The total cost for adoption is " + totalCost + '.');
	return adoption;
	console.log(adoption)

}
