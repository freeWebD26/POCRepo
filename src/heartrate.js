
const fs = require('fs');

// Define the heart rate ranges for running and resting
const runningHR = [120, 180]; // Heart rate range for running (beats per minute)
const restingHR = [60, 80]; // Heart rate range for resting (beats per minute)

// Define the duration of running and resting in minutes
const runningDuration = 30; // Duration of running in minutes
const restingDuration = 10; // Duration of resting in minutes

// Initialize an empty array to store the heart rate values
const heartRateData = [];

// Simulate the heart rate data for 5000 points
for (let i = 0; i < 5000; i++) {
    // Calculate the current minute of the cycle
    const minute = i % (runningDuration + restingDuration);

    // Determine if the person is running or resting based on the minute
    const isRunning = minute < runningDuration;

    // Generate a heart rate value based on whether the person is running or resting
    const minHR = isRunning ? runningHR[0] : restingHR[0];
    const maxHR = isRunning ? runningHR[1] : restingHR[1];
    const heartRate = Math.floor(Math.random() * (maxHR - minHR + 1)) + minHR;

    // Add the heart rate value to the array
    heartRateData.push(heartRate);
}

// The heart rate data is stored in the `heartRateData` arra
fs.writeFileSync('hr.json', JSON.stringify(heartRateData))


function downsampleData(data, targetLength) {
    const ratio = data.length / targetLength;
    const result = new Array(targetLength);
    let j = 0;
    for (let i = 0; i < targetLength; i++) {
        const start = Math.floor(i * ratio);
        const end = Math.floor((i + 1) * ratio);
        let sum = 0;
        for (let k = start; k < end; k++) {
            sum += data[k];
        }
        result[j++] = sum / (end - start);
    }
    return result;
}

const downsampledData = downsampleData(heartRateData, 1000);
fs.writeFileSync('downSample.json',JSON.stringify(downsampledData));
console.log(heartRateData); 
