const button = document.getElementById("button")
const english = document.getElementById("english")
const portuguese = document.getElementById("portuguese")


button.addEventListener("click", () => {
  if (button.textContent == "Portuguese"){
    button.textContent = "English"
    english.style.display = "none"
    portuguese.style.display = "block"
  } else {
    button.textContent = "Portuguese"
    english.style.display = "block"
    portuguese.style.display = "none"
  }
})

