// DATASET FOR THE TEMPLES
const temples = [
  {
    templeName: "Frankfurt Germany",
    location: "Frankfurt, Germany",
    dedicated: "2019, October, 20",
    area: 32895,
    imageUrl:
      "https://www.thechurchnews.com/resizer/v2/WW6OEZJLZXG4YFB5QEA6DCCOXY.jpg?auth=fdb314637bd0fbf052756a8aa24b898be8f5038fe50f7ac16365d87eccbfaec7&focal=0%2C0&width=840&height=555"
  },
  {
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta, Canada",
    dedicated: "2012, October, 28",
    area: 33000,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/eafebe542f696c22dd64a03e622990b9a191c411/full/800%2C/0/default"
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Kirtland Ohio",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl:
      "https://churchofjesuschrist.org/imgs/7cca181588ce3124341a861abfea65227419765c/full/500%2C/0/default"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];

function ImagaCardCreator(selectedTemple) {
  document.querySelector(".img-container").innerHTML = "";
  selectedTemple.forEach(item => {
    const container = document.querySelector(".img-container");
    const figure = document.createElement("figure");
    const caption = document.createElement("figcaption");
    const image = document.createElement("img");
    const list = document.createElement("ul");
    const lItemDate = document.createElement("li");
    const lItemArea = document.createElement("li");
    const lItemLocation = document.createElement("li");

    lItemDate.innerHTML = (`<span class="bolden">Dedicated:</span> ${item.dedicated}`);
    lItemArea.innerHTML = (`<span class="bolden">Area:</span> ${item.area}`)
    lItemLocation.innerHTML = (`<span class="bolden">Location:</span> ${item.location}`);

    list.appendChild(lItemDate);
    list.appendChild(lItemArea);
    list.appendChild(lItemLocation);

    image.setAttribute("loading", "lazy");
    image.setAttribute("src", `${item.imageUrl}`);
    image.setAttribute("alt", `${item.templeName}`);
    image.width = "250";
    image.height = "200";

    caption.textContent = item.templeName;
    caption.classList.add("rancho-regular");
    list.classList.add("gabriela-regular");

    figure.appendChild(image);
    figure.appendChild(caption);
    figure.appendChild(list);
    container.appendChild(figure);
  });
}

ImagaCardCreator(temples)

const home = document.querySelector("#home")
home.addEventListener("click", () => { ImagaCardCreator(temples) })

const old = document.querySelector("#old")
old.addEventListener("click", () => { ImagaCardCreator(temples.filter(item => parseInt(item.dedicated.match(/\d+/g)[0]) < 1900)) })

const newT = document.querySelector("#new")
newT.addEventListener("click", () => { ImagaCardCreator(temples.filter(item => parseInt(item.dedicated.match(/\d+/g)[0]) > 2000)) })

const large = document.querySelector("#large")
large.addEventListener("click", () => { ImagaCardCreator(temples.filter(item => parseInt(item.area) > 90000)) })

const small = document.querySelector("#small")
small.addEventListener("click", () => { ImagaCardCreator(temples.filter(item => parseInt(item.area) < 10000)) })


const navigator = document.querySelector('.navigator');
const displayer = document.querySelector('#menu');

displayer.addEventListener('click', () => {
  displayer.classList.toggle('show');
  navigator.classList.toggle('show');
});