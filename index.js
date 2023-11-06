// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);

function convertToCelsius(fahren) {
 return (fahren -32) * (5/9);
}

let celc = convertToCelsius(fahren);

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
 if (fahren < 32){
  message = 'makes me feel very cold';
 } 
 else if (fahren < 64){
  message = 'makes me feel cold';
 } 
 else if (fahren < 86){
  message = 'makes me feel warm';
 } 
 else if (fahren < 100){
  message = 'makes me feel hot';
 } 
 return `${fahren}F is equal to ${celc}C ${message}`;
}

let output = createMessage(fahren, celc);
console.log(output);


/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.round(Math.random()*limit);
}
//console.log(rand(10));//

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/*
let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
*/