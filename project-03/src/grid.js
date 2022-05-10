function renderGrid(dataset) {
  for (let i = 0; i < 15; i++){
    
    const card = document.createElement("a");
    card.classList.add("card");

    const image = document.createElement("img");
    image.setAttribute("src", dataset[i].IMAGE);

    const blackOverlay = document.createElement("div");
    blackOverlay.classList.add("black");

    const hover = document.createElement("div");
    hover.classList.add("hover");
    hover.setAttribute('id', dataset[i].OBJECTID)

    const text = document.createElement("div");
    text.classList.add("text")

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = dataset[i].NAME;
    const latLong = document.createElement("span");
    latLong.classList.add("lat-long");
    latLong.textContent = `(${dataset[i].LATITUDE}, ${dataset[i].LONGITUDE})`

    text.appendChild(name);
    text.appendChild(latLong);
    
    hover.appendChild(text)
    
    card.appendChild(image)
    card.appendChild(blackOverlay)
    card.appendChild(hover)
    
    cardContainer.appendChild(card);
  }
}

renderGrid(dataset);

