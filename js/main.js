"use strict";

//	var zgoda1 = document.getElementById("zgoda-marketingowa-1");
//	var zgoda2 = document.getElementById("zgoda-marketingowa-2");
//	var zgodaAll = document.getElementById("wszytskie-zgody");
//	if(zgodaAll.checked==true){
////		alert("zaznaczone");
//		zgoda1.disabled=true;
//		zgoda1.checked=true;
//		zgoda2.disabled=true;
//		zgoda2.checked=true;
//	}
//	else{
//		zgoda1.disabled=false;
//		zgoda1.checked=false;
//		zgoda2.disabled=false;
//		zgoda2.checked=false;
//	}
//	
//

function validateForm () {
	//	alert("test");
	var zgodaAll = document.getElementById("wszytskie-zgody");
	var status = (zgodaAll.checked == true) ? true : false; //sprawdzam stan checkboxa
	
	var allCheckboxes=document.querySelectorAll("input[type=checkbox]");
	
	for (var i=0; i<allCheckboxes.length-1; i++) {
		allCheckboxes[i].checked=status;
		allCheckboxes[i].disabled=status;
	}
}

function validation (e) {
	
	var allText=document.querySelectorAll("input[type=text]");  //tworze kolekcje jquery
	var zgoda1 = document.getElementById("zgoda-marketingowa-1");
//	var allParagraphs = document.querySelectorAll("p");
	
	if (zgoda1.checked==false) {
		alert("lalala");
		e.preventDefault();
		var paragraph = document.createElement("p");
		paragraph.innerHTML = "To pole jest wymagane!";
		paragraph.style.color = "red";
		zgoda1.parentNode.insertBefore(paragraph,zgoda1.nextSibling);
	}
	
	for (var i=0; i<allText.length; i++) {
//		console.log("ilosc elementow:" + i);
		if (allText[i].value==""){
			e.preventDefault();
			var paragraph = document.createElement("p");
			paragraph.innerHTML = "To pole jest wymagane!";
			paragraph.style.color = "red";
			allText[i].parentNode.replaceChild(paragraph, allText[i].nextSibling);
		}
	}
	
	
}
	
//	
//	
//	
//	var zgoda1 = document.getElementById("zgoda-marketingowa-1");
//	var imieNazwisko = document.getElementById("name");
//	var email = document.getElementById("email");
//	
//
//		if (imieNazwisko.value == ""){
//			e.preventDefault();
//			document.getElementById("display1").innerHTML = "To pole jest wymagane!";
//			document.getElementById("display1").style.color = "red";
//		}
//		if (email.value == ""){
//			e.preventDefault();
//			document.getElementById("display2").innerHTML = "To pole jest wymagane!";
//			document.getElementById("display2").style.color = "red";
//		}
//		if (zgoda1.checked==false){
//			e.preventDefault();
//			document.getElementById("display3").innerHTML = "To pole jest wymagane!";
//			document.getElementById("display3").style.color = "red";
//		}
	


var solution = document.getElementById("wyslij").addEventListener("click", validation);

var result = document.getElementById("wszytskie-zgody").addEventListener("click", validateForm);

