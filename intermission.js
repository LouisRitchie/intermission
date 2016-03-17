// intermission.js
// stops and starts a stopwatch on a button click
// maintains the time of start and stop at the millisecond level.
// author: Louis Ritchie 
// LouisRitchie@github.com
// March 16th

var time, start_time, pause_time, interval, paused, button, div;

paused = false;
button = document.getElementsByTagName("button")[0];
div = document.getElementsByClassName("main")[0];

button.addEventListener("click", init);

function init() {
	time = new Date().getTime();
	start_time = time;
	pause_time = time - start_time;
	button.removeEventListener("click", init);
	button.addEventListener("click", pauseHandler);
	button.innerHTML = "Pause";
	interval = setInterval(resume, 67)	
}

function pauseHandler() 
{
	clearInterval(interval);
	time = new Date().getTime();
	if (paused) {
		start_time = start_time + pause_time;
		console.log("new start time is " + start_time.toString());
		interval = setInterval(resume, 67);
		button.innerHTML = "Pause";
	} else {
		pause_time = time - start_time;
		interval = setInterval(pause, 67);
		button.innerHTML = "Resume"
	}
	paused = !paused;		
}

function resume() 
{
	time = new Date().getTime();
	writeTimeToHTML(time - start_time)
}


function pause() 
{
	writeTimeToHTML(pause_time)
}

function writeTimeToHTML(t) {
        output = (t/1000).toString().split(".");
        output[1] = output[1] == null ? 0 : output[1];
        div.innerHTML = output[0] + ":" + output[1]
}

