let lastMod = new Date(document.lastModified);
let currentYear = new Date();
let modilabel = document.getElementById("lastmod");
let copyrightY = document.getElementById("year");

modilabel.innerHTML = `Last modification: ${lastMod}`;
copyrightY.innerHTML = currentYear.getFullYear()





// console.log(lastMod)