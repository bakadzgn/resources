/*
* Code by BakaDzgn
*/

function getTiming(){
	totalTimeout += 1000;
	if(totalTimeout <= 6001){
		setTimeout(setTiming, totalTimeout);
	}
}
function setTiming(){
	totalSeconds -= 1,
	totalSeconds > 0 ? (document.getElementById("continue").style.display = "block", document.getElementById("continue").value = "Please wait.. " + totalSeconds, getTiming()) : 0 == totalSeconds && (document.getElementById("continue").value = "Continue", document.getElementById("continue").onclick = function(){var e = Base64.decode($_GET("url"));location.href = e})
}
var totalTimeout = 0;
var totalSeconds = 6;
