function checkquiz1(){

	var q21 = document.quiz21.question1.value;

	var output = "";

	if (q21 == "For Loop") {
		
		output = "Correct Answer! For Loop is the only correct answer here.";
	}

	else if(q21 == ""){
		alert("You have not selected any option. Please select an option to continue");
	}

	else{
		output = "Wrong Answer :( For Loop is the only correct answer here.";
	}

	document.getElementById("quiz-21-feedback").style.visibility = "visible";
	document.getElementById("feedback-q21").innerHTML = output;
}

function checkquiz2(){
	var q22 = document.quiz22.question2.value;

	var output = "";

	if (q22 == "For Loop") {
		
		output = "Correct Answer! For Loop is the only correct answer here";
	}

	else if(q22 == ""){
		alert("You have not selected any option. Please select an option to continue");
	}

	else{
		output = "Wrong Answer :( For Loop is the only correct answer here";
	}

	document.getElementById("quiz-22-feedback").style.visibility = "visible";
	document.getElementById("feedback-q22").innerHTML = output;

}

function checkquiz3(){
	var q23 = document.quiz23.question3.value;

	var output = "";

	if (q23 == "For Loop") {
		
		output = "Correct Answer! For Loop is the only correct answer here";
	}

	else if(q23 == ""){
		alert("You have not selected any option. Please select an option to continue");
	}

	else{
		output = "Wrong Answer :( For Loop is the only correct answer here";
	}

	document.getElementById("quiz-23-feedback").style.visibility = "visible";
	document.getElementById("feedback-q23").innerHTML = output;

}

function checkquiz4(){
	var q24 = document.quiz24.question4.value;

	var output = "";

	if (q24 == "For Loop") {
		
		output = "Correct Answer! For Loop is the only correct answer here";
	}

	else if(q24 == ""){
		alert("You have not selected any option. Please select an option to continue");
	}

	else{
		output = "Wrong Answer :( For Loop is the only correct answer here";
	}

	document.getElementById("quiz-24-feedback").style.visibility = "visible";
	document.getElementById("feedback-q24").innerHTML = output;

}

function checkquiz5(){
	var q25 = document.quiz25.question5.value;

	var output = "";

	if (q25 == "For Loop") {
		
		output = "Correct Answer! For Loop is the only correct answer here";
	}

	else if(q25 == ""){
		alert("You have not selected any option. Please select an option to continue");
	}

	else{
		output = "Wrong Answer :( For Loop is the only correct answer here";
	}

	document.getElementById("quiz-25-feedback").style.visibility = "visible";
	document.getElementById("feedback-q25").innerHTML = output;

}

function formResponse(){
	alert('Thank you for your message, we will contact you within three working days.');
}