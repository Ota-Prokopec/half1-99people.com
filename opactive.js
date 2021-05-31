


function opactive() {

  zobrazeni(15)

  getAllContactop()

}
function getAllContactop() {
  console.log("heslo");

  socket.emit("getAllContactop", userdata.oppassword, userdata.name, userdata.password)

}
socket.on("dataop", (data) => {

  console.log(data);

  writewrapop(data)

})
