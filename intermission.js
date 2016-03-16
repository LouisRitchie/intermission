//intermission.js
//stops and starts a stopwatch on a button click
//maintains the time of start and stop at the millisecond level.
// author: Louis Ritchie 
// LouisRitchie@github.com
// March 16th

var time, start_time, pause_time, interval, paused, button, div;

time = new Date().getTime();
start_time = time;
pause_time = time;
interval = setInterval(writeTime, 200);
paused = false;
button = document.getElementsByTagName("button")[0];
div = document.getElementsByClassName("main")[0];

button.addEventListener("click", pauseHandler);

function pauseHandler() 
{
	clearInterval(interval);
	time = new Date().getTime()
	if (paused) {
		start_time = start_time + pause_time;
		console.log(start_time);
		interval = setInterval(writeTime, 200)
	} else {
		pause_time = time - start_time;
		console.log(pause_time);
		interval = setInterval(pauseTime, 200)
	}
	paused = !paused;		
}

function writeTime() 
{
	time = new Date().getTime();
	div.innerHTML = time - start_time
}

function pauseTime() 
{
	div.innerHTML = pause_time;			
}


