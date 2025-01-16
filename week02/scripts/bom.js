
document.title = ("The DOM"); 
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

//adding process
button.addEventListener("click", function() {
    const deleItem = document.createElement("button");
    deleItem.textContent = "❌";
    deleItem.ariaLabel = "Remove chapter";    
    deleItem.setAttribute("class", "delete");
//removing process
    deleItem.addEventListener("click", function() {
        list.removeChild(this.parentNode);
    });
//appending process
    const nItem = document.createElement("li");
    nItem.textContent = input.value;
    nItem.appendChild(deleItem);
    list.appendChild(nItem);
    input.value = "";
});

