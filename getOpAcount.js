


document.getElementById("getOpAcount")
.addEventListener("click", () => {

  const password = document.getElementById("opsinguppassword").value
  const name = document.getElementById("opsingupname").value

  zaregistrovatOpUcet(password, name);

})


function zaregistrovatOpUcet(password, name) {

  error("Nemáte op účet, jenom prosbu, kterou vám musí schváli admin, aby jste mohli naplno využívat op účet")

  console.log("i want to have op acount");

  socket.emit("MohuOPucet", {password:password, name:name})

}


socket.on("MohuOPucet", (data) => {

  console.log(data);

})
