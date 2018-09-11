/*

=============== Coded by Saleh Ibne Omar ===============
                Date updated: 11 September 2018
				Date created: 28 March 2018
				Copyright 2018, Saleh Ibne Omar

*/

// Taking input values
function calC(inputValues) {
	// Displaying input values side by side
    form.panel.value = form.panel.value + inputValues;

}

function CE() {
	//All Clear function
    form.panel.value = "";
}

function rt() {
	//Square root function
    form.panel.value = Math.sqrt(panel.value);
}

function pai() {
	//Custom pai function
    form.panel.value = form.panel.value + 3.1416;
}

function result(){
	//Evaluating the input values and giving output function
	form.panel.value = eval(panel.value);
	
}