
document.title = ("The DOM"); 
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", addChapter);

//adding process
function addChapter() {
    const deleItem = document.createElement("button");
    deleItem.textContent = "❌";
    deleItem.ariaLabel = "Remove chapter";    
    deleItem.setAttribute("class", "delete")
    deleItem.addEventListener("click", removeChapter); 
//appending process
    const nItem = document.createElement("li");
    nItem.textContent = input.value;
    nItem.appendChild(deleItem);
    list.appendChild(nItem);
    input.value = "";
}

//removing process
function removeChapter() {
    list.removeChild(this.parentNode);
}

    


