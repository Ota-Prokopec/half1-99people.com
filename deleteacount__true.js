


document.getElementById("delteUserAcount").addEventListener("click", () => {

  console.log("ahoj");

  socket.emit("deleteacount", true, userdata.name, userdata.password)

  zobrazeni(1)

})
