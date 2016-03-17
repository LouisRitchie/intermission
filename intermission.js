// intermission.js
// stops and starts a stopwatch on a button click
// maintains the time of start and stop at the millisecond level.
// author: Louis Ritchie 
// LouisRitchie@github.com
// March 16th

var times = [];
/* times array. All times in ms since epoch.
	element:	represents:
	0		time at initialization, never updated
	1		current time
	2		time of last pause	
	3		time of last resume
	4		sum of all time spent paused, to subtract from times[1]
*/
var interval, paused, button, div;

paused = false;
button = document.getElementsByTagName("button")[0];
div = document.getElementsByClassName("main")[0];

button.addEventListener("click", init);

function init() 
{
	times[0] = times[1] = new Date().getTime();
	times[2] = times[3] = times[4] = 0;
	button.removeEventListener("click", init);
	button.addEventListener("click", pauseHandler);
	button.innerHTML = "Pause";
	interval = setInterval(resume, 67)	
}

function pauseHandler() 
{
	clearInterval(interval);
	times[1] = new Date().getTime();
	if (paused) {
		times[3] = times[1];
		times[4] += times[3] - times[2];
		interval = setInterval(resume, 67);
		button.innerHTML = "Pause";
	} else {
		times[2] = times[1];
		interval = setInterval(pause, 67);
		button.innerHTML = "Resume"
	}
	paused = !paused;		
}

function resume() 
{
	times[1] = new Date().getTime();
	writeTimeToHTML(times[1] - times[4] - times[0])
}

function pause() 
{
	writeTimeToHTML(times[2] - times[4] - times[0])
}

function writeTimeToHTML(t) {
        output = (t/1000).toString().split(".");
        output[1] = output[1] == null ? 0 : output[1];
        div.innerHTML = output[0] + ":" + output[1]
}

