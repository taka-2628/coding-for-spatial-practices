let englishText = document.getElementById("english_content")
let portugueseText = document.getElementById("portuguese_content")

const en = document.querySelector(".en")
const pt = document.querySelector(".pt")

en.addEventListener("click", () => {
  englishText.style.display = "flex"
  portugueseText.style.display = "none"
})

pt.addEventListener("click", () => {
  portugueseText.style.display = "flex"
  englishText.style.display = "none"
})