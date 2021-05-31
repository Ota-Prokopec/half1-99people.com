


document.getElementById("odebratpritele")
.addEventListener("click", () => {
  socket.emit("pratelstvi", {value:false, name:userdata.friend}, userdata.name, userdata.password)
  zobrazeni(12)
})
