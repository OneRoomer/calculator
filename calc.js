let op_1 = 0;
let op_2 = 0;
let concat_1 = 0;
let concat_2 = 0;
let userIsInTheMiddleOfTyping = true;
let outcome = 0;
let operation;

	//Event Listener for all num_buttons
	const num_buttons = document.querySelectorAll('button.num');
	num_buttons.forEach((button) => {
    button.addEventListener('click', () => {
	
	if (userIsInTheMiddleOfTyping === true) {
	op_1 = button.value;
	concat_1 += op_1;
	updateDisplay (concat_1);
	}
	
	else {
	op_2 = button.value;
	concat_2 += op_2;
	updateDisplay (concat_2);
	}
    });
});

	//Event Listener for all operator buttons
	const op_buttons = document.querySelectorAll('button.operation');
	op_buttons.forEach((button) => {
    button.addEventListener('click', () => {
	
	operation = button.value;
	userIsInTheMiddleOfTyping = false;

    });
});

	//Event Listener for Calc Button
	const calc_buttons = document.querySelectorAll('button.calc');
	calc_buttons.forEach((button) => {
    button.addEventListener('click', () => {
	
	if (concat_1 != 0 | concat_2 != 0) {
			operate(concat_1, concat_2, operation);
			display.innerHTML = outcome;
			operation = "";
	}
	else {

	}
	
    });
});

	//Event Listener for Clear Button
	const clear_buttons = document.querySelectorAll('button.clear');
	clear_buttons.forEach((button) => {
    button.addEventListener('click', () => {
	clear();
	outcome = 0;
	operation = "";
	const display = document.querySelector('#display');
	display.innerHTML = 0;
	userIsInTheMiddleOfTyping = true;
    });
});

	function operate (operant_1, operant_2, operation) {	
	if (operation === "+") {
		if (outcome === 0) {
		outcome = Number(operant_1) + Number(operant_2);
		outcome = Math.round(outcome * 100) / 100;
		userIsInTheMiddleOfTyping = false;
		clear();
		}
		else {
			outcome = Number(outcome) + Number(operant_2);
			outcome = Math.round(outcome * 100) / 100;
			clear();
		}
	}
	else if (operation === "-") {
	if (operation === "-") {
		if (outcome === 0) {
		outcome = Number(operant_1) - Number(operant_2);
		outcome = Math.round(outcome * 100) / 100;
		userIsInTheMiddleOfTyping = false;
		clear();
		}
		else {
			outcome = Number(outcome) - Number(operant_2);
			outcome = Math.round(outcome * 100) / 100;
			clear();
		}
	}
	}
	else if (operation === "*") {
	if (operation === "*") {
		if (outcome === 0) {
		outcome = Number(operant_1) * Number(operant_2);
		outcome = Math.round(outcome * 100) / 100;
		userIsInTheMiddleOfTyping = false;
		clear();
		}
		else {
			outcome = Number(outcome) * Number(operant_2);
			outcome = Math.round(outcome * 100) / 100;
			clear();
		}
	}
	}
	else if (operation === "/") {
	if (operation === "/") {
		if (outcome === 0) {
			if (Number(operant_2) === 0){
			alert("Do not divide by 0! Please clear and start again!");
			}
			else {
		outcome = Number(operant_1) / Number(operant_2);
		outcome = Math.round(outcome * 100) / 100;
		userIsInTheMiddleOfTyping = false;
		clear();
			}
		}
		else {
			outcome = Number(outcome) / Number(operant_2);
			outcome = Math.round(outcome * 100) / 100;
			clear();
		}
	}
	}
}
	
	function updateDisplay(value) {
		const display = document.querySelector('#display');
		display.innerHTML = +value;
	};
	
	function clear() {
	op_1 = 0;
	op_2 = 0;
	concat_1 = 0;
	concat_2 = 0;	
	};