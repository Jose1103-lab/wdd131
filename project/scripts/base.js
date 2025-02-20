// an array of object that includes the designs description
const products = [
    {
        name: "Educational Website",
        description: "A website dedicated to providing learning materials, courses, or tutorials for students and learners.",
        category: "Education",
        source: "images/edu-web.webp",
    },
    {
        name: "Web Application",
        description: "A dynamic web-based software application designed to perform specific tasks, accessible through a web browser.",
        category: "Web App",
        source: "images/app-web.webp",
    },
    {
        name: "Business Web App",
        description: "A web application tailored for businesses to manage operations, services, or customer interactions online.",
        category: "Organization",
        source: "images/bnss-web.webp",
    },
    {
        name: "Organization Web Page",
        description: "A web page created for an organization, such as a charity or a non-profit, to showcase their mission and activities.",
        category: "Organization",
        source: "images/charity-web.webp",
    },
    {
        name: "News Website",
        description: "A website dedicated to reporting current events, news stories, and updates on various topics.",
        category: "Education",
        source: "images/news-web.webp",
    },
    {
        name: "Landing Page",
        description: "A standalone web page designed for a specific marketing or advertising campaign to convert visitors into leads.",
        category: "Organization",
        source: "images/landing-web.webp",
    },
    {
        name: "Blog Site",
        description: "A regularly updated website or web page, written in an informal or conversational style, with entries displayed in reverse chronological order.",
        category: "Blog",
        source: "images/perblg-web.webp",
    },
    {
        name: "Portfolio Page",
        description: "A web page designed to showcase an individual's or company's work, skills, and achievements.",
        category: "Portfolio",
        source: "images/portf-web.webp",
    },
    {
        name: "Social Media App",
        description: "A web application or platform for social networking, allowing users to connect, share content, and interact.",
        category: "Social Media",
        source: "images/socmd-web.webp",
    },
    {
        name: "Store Website",
        description: "An e-commerce website that allows customers to browse and purchase products or services online.",
        category: "Organization",
        source: "images/stor-web.webp",
    }
];

// this function retrive three random designs to our home page.
function randomProducts() {
    const randomProducts = [];
    while (randomProducts.length < 3) {
        const randomIndex = Math.floor(Math.random() * products.length);
        if (!randomProducts.includes(products[randomIndex])) {
            randomProducts.push(products[randomIndex]);
        }
    }
    // console.log('Items qty: ' + randomProducts.length); //testing the function 
    // for (let i = 0; i < randomProducts.length; i++) { //testing the function
    //     console.log(randomProducts[i].name);
    // }
    return randomProducts;
}

// this function retrieves of the product with the manipulation of the DOM this is also used along with the function above
function showProducts(productArray, container){
    const parentContainer = document.querySelector(`${container}`);
    // parentContainer.innerHTML = '';
    productArray.forEach(product => {
        const productsContainer = document.createElement('figure');
        const imageHolder = document.createElement('img');
        const productInfo = document.createElement('figcaption');
        imageHolder.src = product.source;
        imageHolder.alt = product.name;
        imageHolder.loading = 'lazy';   
        productInfo.textContent = product.name;
        productsContainer.appendChild(imageHolder);
        productsContainer.appendChild(productInfo);
        parentContainer.appendChild(productsContainer);
        // console.log(product.name + ' added') //testing the function
    });
    console.log('DOM for product loaded') //testing the function
} 

try{
    showProducts(products,'#product-prev');
}catch(err){console.log("Products not loaded");}
try{
    showProducts(randomProducts(),'#home-prev'); //callback function example
}catch(err){console.log("home products preview not loaded");}

// function that works with the responsive menu
function toggleMenu() {
    var menu = document.querySelector("#menu");
    menu.classList.toggle("show");
}
const menuToggle = document.querySelector("#toggler");
menuToggle.addEventListener("click", toggleMenu); 


// function that counts the amount of visit to our webpage and reads and stores them in the user locaa storage.
function countVisits() {
    let visits = parseInt(localStorage.getItem('visits')) || 0;
    const formSubmitted = document.querySelector('#form-completed');
    if (formSubmitted) { // this logic set a counter for the amount of times the form has been submitted.
        let formFilledUp = parseInt(localStorage.getItem('form-filled')) || 0;
        formFilledUp++;
        localStorage.setItem('form-filled', formFilledUp);
        console.log('Contacts: ' + formFilledUp);
    }
    visits++;
    localStorage.setItem('visits', visits);
    console.log('visits: ' + visits);
}

countVisits()

// section that gets the date.
let currentYear = new Date();
let copyrightY = document.querySelector("#year");
try {
    copyrightY.innerHTML = currentYear.getFullYear()
} catch (error) {
    console.log('>_ date setter failed, make sure this page has a footer');
}