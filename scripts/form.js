let products = [
    "iPhone 13",
    "Samsung Galaxy S21",
    "MacBook Pro",
    "Dell XPS 13",
    "Apple Watch Series 7",
    "Sony WH-1000XM4",
    "iPad Pro",
    "Amazon Echo",
    "Google Nest Hub",
    "Microsoft Surface Pro 7",
    "PlayStation 5",
    "Xbox Series X",
    "Nvidia RTX 3080",
    "Kindle Paperwhite",
    "Raspberry Pi 4"
]; 

// working with the dom =
function optionGenertor(array){
    const optionSet = document.querySelector('#products');
    const newLocal = array.sort(); // extracting a sorted array to a new
    newLocal.forEach(element => {
        const nItem = document.createElement("option");
        nItem.textContent = element;
        nItem.setAttribute("value", element.toLowerCase())    
        optionSet.appendChild(nItem);
        //! console.log(element);
    });
}

optionGenertor(products);