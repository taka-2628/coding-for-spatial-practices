function createIndividualDisplay(dataset){
  for (let i = 0; i < 15; i++){

    const container = document.createElement('div')
    container.classList.add('individual-display')
    container.setAttribute('id', dataset[i].NAME)

    const image = document.createElement("img");
    image.setAttribute("src", dataset[i].IMAGE);

    const textContainer = document.createElement("div");
    textContainer.classList.add('text-container');

    /* text elements */
    const name = document.createElement("h3");
    name.textContent = `${dataset[i].NAME} REFINERY`;

    const latLong = document.createElement("p");
    latLong.textContent = `(${dataset[i].LATITUDE}, ${dataset[i].LONGITUDE})`

    const address = document.createElement("p");
    address.textContent = `${dataset[i].CITY}, ${dataset[i].STATE}`;
    address.classList.add("address");

    const population = document.createElement("p");
    population.textContent = `Population: ${dataset[i].POPULATION}`;

    const crude = document.createElement("p");
    crude.textContent = `Crude Oil Capacity: ${dataset[i].CRUDE}`;
    crude.classList.add("crude");

    const status = document.createElement("p");
    status.textContent = `Status: ${dataset[i].STATUS}`;
    
    const type = document.createElement("p");
    type.textContent = `Type: ${dataset[i].TYPE}`;

    const rank = document.createElement("p");
    rank.textContent = `Ranking (US): ${dataset[i].US_RANK}`;


    textContainer.appendChild(name);
    textContainer.appendChild(latLong);
    textContainer.appendChild(address);
    textContainer.appendChild(population);
    textContainer.appendChild(crude);
    textContainer.appendChild(status);
    textContainer.appendChild(type);
    textContainer.appendChild(rank);

    container.appendChild(image);
    container.appendChild(textContainer);
    
    individualView.appendChild(container);
  }
}

createIndividualDisplay(dataset)

let idDisplayed = null;

cardContainer.addEventListener('click', (e)=>{
  const newId = e.target.children[0].children[0].textContent
  console.log(newId);

  if (idDisplayed){
    const oldDisplay = document.getElementById(idDisplayed);
    oldDisplay.style.display = "none"
    idDisplayed = null
    /*
    const newDisplay = document.getElementById(newId);
    newDisplay.style.display="block"
    idDisplayed = newId;
    */
  } else {
    const newDisplay = document.getElementById(newId);
    newDisplay.style.display="block"
    idDisplayed = newId;
  }
})



/*
const text = 'THIS IS MY STRING WHY AM I YELLLING?';
const output = text.replace(
  /(\w)(\w*)/g,
  (_, firstChar, rest) => firstChar + rest.toLowerCase()
);
console.log(output);
*/