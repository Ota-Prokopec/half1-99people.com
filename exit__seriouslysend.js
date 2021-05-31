


document.getElementById("exit__seriouslysend")
.addEventListener("click", () => {

  zobrazeni(24)

})
document.getElementById("button__seriouslysend")
.addEventListener("click", () => {
  console.log("ahoj");

  socket.emit("sendmyquiztofriend", {name:userdata.name, password:userdata.password, friend:userdata.friend, quiz:userdata.nameOfQuiz})
  zobrazeni(24)

})
