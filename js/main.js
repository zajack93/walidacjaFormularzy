"use strict";

function validateForm () {
	//	alert("test");
	var zgoda1 = document.getElementById("zgoda-marketingowa-1");
	var zgoda2 = document.getElementById("zgoda-marketingowa-2");
	var zgodaAll = document.getElementById("wszytskie-zgody");
	if(zgodaAll.checked==true){
//		alert("zaznaczone");
		zgoda1.disabled=true;
		zgoda1.checked=true;
		zgoda2.disabled=true;
		zgoda2.checked=true;
	}
	else{
		zgoda1.disabled=false;
		zgoda1.checked=false;
		zgoda2.disabled=false;
		zgoda2.checked=false;
	}
	
}

function validation (e) {
	var zgoda1 = document.getElementById("zgoda-marketingowa-1");
	var imieNazwisko = document.getElementById("name");
	var email = document.getElementById("email");
	

		if (imieNazwisko.value == ""){
			e.preventDefault();
			document.getElementById("display1").innerHTML = "To pole jest wymagane!";
			document.getElementById("display1").style.color = "red";
		}
		if (email.value == ""){
			e.preventDefault();
			document.getElementById("display2").innerHTML = "To pole jest wymagane!";
			document.getElementById("display2").style.color = "red";
		}
		if (zgoda1.checked==false){
			e.preventDefault();
			document.getElementById("display3").innerHTML = "To pole jest wymagane!";
			document.getElementById("display3").style.color = "red";
		}
	
}

var solution = document.getElementById("wyslij").addEventListener("click", validation);

var result = document.getElementById("wszytskie-zgody").addEventListener("click", validateForm);

