const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// working with the dom =
function optionGenertor(array){
    const optionSet = document.querySelector('#products');
    const newLocal = array.sort(); // extracting a sorted array to a new
    newLocal.forEach(element => {
        const nItem = document.createElement("option");
        nItem.textContent = element.name;
        nItem.setAttribute("value", element.name.toLowerCase())  
        nItem.setAttribute("id", element.name.toLowerCase().replace(/\s+/g, '-'));
        optionSet.appendChild(nItem);
        //! console.log(element.name);
    });
}
// review counter
function reviewCounter(){
  const autReview = document.querySelector("title");
  const tester = autReview.textContent;
  // console.log(autReview.textContent); //test
  if(tester.toLowerCase() === "thanks for your review"){ //this condition validates the page to count 
      let visits = Number(window.localStorage.getItem('visitAs')) || 0;
      visits += 1;
      localStorage.setItem('visitAs', visits);
      // console.log("done"); //test
      return visits; //! return the number of visits to be saved in the server storage
  }
}

try {
  reviewCounter();
} catch (error) {
  console.log('>_ visit counter failed, it only works on the review page');
}
try {
  optionGenertor(products);
} catch (error) {
  console.log('>_ options generator failed, it only works on the main page');
}


