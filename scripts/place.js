// I just set an example value to show 
const winChiholder = document.querySelector("#windchill");
const temperature = 10// using celsius 
const speed = 5; // using km/h

// Norway uses Celsius as preferred temperature unit 
function windchillCalculator(temp, speed){
    let windchill = 13.13 + (0.6215*temp) - (11.37 * (speed**0.16)) + ((0.3965*temp) * speed ** 0.16);
    return windchill
}

if (temperature <= 10 && speed > 4.8){
    let windchill = windchillCalculator(temperature, speed);
    winChiholder.textContent = (windchill.toFixed(1) + "°C");
}

