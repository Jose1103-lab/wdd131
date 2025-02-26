// let lastMod = new Date(document.lastModified);
// let modilabel = document.getElementById("lastMod");
let currentYear = new Date();
let copyrightY = document.getElementById("year");


try {
    // modilabel.innerHTML = `Last modification: ${lastMod}`;
    copyrightY.innerHTML = currentYear.getFullYear()
} catch (error) {
    console.log('>_ date setter failed, make sure this page has a footer');
}




// console.log(lastMod)