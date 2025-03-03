/* ----- in case i want to know the last time was updated--------- 
let lastMod = new Date(document.lastModified);
 let modilabel = document.getElementById("lastMod");
 modilabel.innerHTML = `Last modification: ${lastMod}`;
*/


let currentYear = new Date();
let copyrightY = document.getElementById("year");

try {
    copyrightY.innerHTML = currentYear.getFullYear()
} catch (error) {
    console.log('>_ date setter failed, make sure this page has a footer');
}




// console.log(lastMod)