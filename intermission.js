console.log("Hello world");

var start_time = new Date().getTime();
var paused = true;
var time;

console.log(document.getElementsByClassName("main")[0]);

var div = document.getElementsByClassName("main")[0];
var button = document.getElementsByClassName("button")[0];
button.addEventListener("click", pauseHandler);

setInterval(writeTime, 10);

function pauseHandler() {
	paused = !paused;
	time = new Date().getTime();
	if (paused) {
		var interval = setInterval(writeTime(), 10);
	}		
	else {
		var pauseTime = time - start_time;
		div.innerHTML = pauseTime.toString() + " - Paused"; 
	}
}

function writeTime() {
	time = new Date().getTime();
	div.innerHTML = time - start_time;
}

