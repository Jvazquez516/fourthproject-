console.log("script running")

function check() {
	let question1=document.quiz.question1.value;
	let question2=document.quiz.question2.value;
	let question3=document.quiz.question3.value;
	let question4=document.quiz.question4.value;
	let question5=document.quiz.question5.value;
	
	let count = 0;
	
	if (question1=="background-color") {
		count+=1;
	}
	
	if (question2=="function myFunction()") {
		count+=1;
	}
	
	if (question3=="<nav>") {
		count+=1;
	}
	
	if (question4=="//This is a comment") {
		count+=1;
	}
	
	if (question5=="+") {
		count+=1;
	}
	
	let messages = ["Great job!", "That's okay", "Maybe next time "];
	
	let score = 0; 
	if (count>5) {
		console.log(messages[0])
		score = 0
	} else if (count<3) {
		console.log(messages[1])
		score = 1
	} else {
		console.log(messages[2])
		score = 2
	} 
	
	alert("You got "+count+" correct")
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
