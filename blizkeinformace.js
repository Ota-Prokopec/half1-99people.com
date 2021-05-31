


document.getElementById("ulozitzmeny__myinforamation").addEventListener("click", () => {

  const pohlavi = document.getElementById("pohlavi__input").value
  const stari = document.getElementById("stari__input").value
  const living = document.getElementById("living__input").value
  const school = document.getElementById("skola__input").value

  socket.emit("sendPersonalData", {pohlavi:pohlavi, stari:stari, living:living, school:school}, userdata.name, userdata.password)

})
