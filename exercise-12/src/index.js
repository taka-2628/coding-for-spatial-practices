const flowers = [
  {
    name: "Tulip",
    color: "yellow",
    image:
      "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
  },
  {
    name: "Daffodil",
    color: "yellow",
    image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
  },
  {
    name: "Sunflower",
    color: "yellow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
  },
  {
    name: "Bluebell",
    color: "blue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
  },
  {
    name: "Rose",
    color: "red",
    image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
  }
];

ul = document.querySelector('ul')

function renderFlowers(flowers){
  for(i=0; i < flowers.length; i++){
    let li = document.createElement("li")

    let title = document.createElement("h3")
    let color = document.createElement("p")
    let image = document.createElement("img")

    title.textContent=flowers[i].name
    color.textContent=flowers[i].color
    image.setAttribute("src", flowers[i].image)

    li.appendChild(title)
    li.appendChild(color)
    li.appendChild(image)
    
    ul.appendChild(li)
  }
}

renderFlowers(flowers)