
document.title = ("The DOM"); 
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

//adding process
button.addEventListener("click", function() {
    const empty = document.getElementById("errorlog")
    if (input.value === "") {
    //--------------------------addings
        empty.textContent = "Please enter a chapter";
        empty.style.color = "red";
        empty.style.fontSize = "0.7rem";
        empty.style.textAlign = "center";

        // setTimeout(function() {
        //     empty.textContent = "";
        //     empty.style.color = "black";
        // }, 2000);
    } else{
        empty.textContent = "";
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
    }
    input.value = "";
    input.focus();
});

