document.title = ("The DOM");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
let chapterArray = getChapterArray() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

function getChapterArray() {
    return JSON.parse(localStorage.getItem("chapterArray")) || [];
}
function setChapterArray() {
    localStorage.setItem("chapterArray", JSON.stringify(chapterArray));
}
function displayList(item){
    const nItem = document.createElement("li");
    const deleItem = document.createElement("button");
    //appending process
    nItem.textContent = item;
    deleItem.textContent = "❌";
    deleItem.ariaLabel = "Remove chapter";
    deleItem.setAttribute("class", "delete");
    list.appendChild(nItem);
    nItem.appendChild(deleItem);
    
    //removing process
    deleItem.addEventListener("click", function () {
        list.removeChild(this.parentNode);
        deleteChapter(nItem.textContent);
        input.focus();
    });
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterArray();
}
//adding process
button.addEventListener("click", function () {
    const empty = document.getElementById("errorlog")
    if (input.value === "") {
        //--------------------------addings
        empty.textContent = "Please enter a chapter";
        empty.style.color = "red";
        empty.style.fontSize = "0.7rem";
        empty.style.textAlign = "center";
    } else {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterArray(chapterArray);   
        input.value = "";
        input.focus();
     }

});








