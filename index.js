const THREE = require('three');

function calculateTime(hours, minutes, seconds) {
    return (hours * 3600) + (minutes * 60) + seconds;
}

console.log("Time in seconds:", calculateTime(1, 30, 15));
