


document.getElementById("myacount").addEventListener("click", () => {

  zobrazeni(7)







})
const ulozitzmeny = document.getElementById("ulozitzmeny")
ulozitzmeny.addEventListener("click", () => {

  console.log("ahoj");

  const text = document.getElementById("textarea__informationMyacount").value
  const image = document.getElementById("myacount__foto__input").value

  console.log(text);

  socket.emit("ulozitzmeny", {textaboutme:text, image:image}, userdata.name, userdata.password)

  zobrazeni(5)

})
