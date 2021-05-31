


document.getElementById("deleteUser__povoleniOP")
.addEventListener("click", () => {

  deleteuserOPpooleni(userdata.friend)

})






function deleteuserOPpooleni(name) {

  socket.emit("deleteacountOP", name, userdata.name,  userdata.oppassword, userdata.password)

  zobrazeni(16)

}



socket.on("vymazaljsemjakoopucet", (data) => {
  console.log(data);
  if (data) {

    zobrazeni(15)

  }
  else {
    error(data)
  }
})
