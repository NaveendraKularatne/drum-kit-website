var noOfElements = document.querySelectorAll(".drum").length;

for (var i = 0; i<noOfElements; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function() {
		window.alert("I got clicked");
});
}

