


function error(value) {

  zobrazeni("error")

  const text = document.getElementById("erorpagehlaseni")
  text.innerText = value

}
document.getElementById("errorpage")
.addEventListener("click", () => {
  zobrazeni("no-error")
})
