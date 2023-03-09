const fs = require('fs');

const age = 30;
const maxHeartRate = 190;
const raceTimeInSeconds = 1800; // 30 minutes * 60 seconds

function calculateHeartRate(age, maxHeartRate, timeInSeconds) {
  const percentageOfMaxHeartRate = 0.7 + (0.3 * timeInSeconds / 1800); // assume heart rate increases to 85% of max heart rate over 30 minutes
  const targetHeartRate = percentageOfMaxHeartRate * maxHeartRate;
  return Math.round(targetHeartRate);
}

// calculate heart rate for each second of the 5km race
const data = [];
for (let i = 0; i <= raceTimeInSeconds; i++) {
  const heartRate = calculateHeartRate(age, maxHeartRate, i);
  let dataPoint = {};
  dataPoint.x = i;
  dataPoint.y = heartRate;
  if(dataPoint){
    data.push(dataPoint);
  }

  console.log(`Heart rate at second ${i}: ${heartRate} bpm`);
}
fs.writeFileSync('mrt.json',JSON.stringify(data));
