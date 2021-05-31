


document.getElementById("LogInToadminAcount")
.addEventListener("click", () => {

  const password = document.getElementById("loginop").value
  console.log(password);

  loginop(password);

})




function loginop(password) {

  console.log("heslo");

  socket.emit("loginop", password, userdata.name, userdata.password)

}
socket.on("jsemprihlasenyop", (data) => {

  if (data) {

    opactive()

    console.log("jsem prihlaseny k over power user admin ahoj");

  }
  else {



         error("špatné heslo, nebo nemáte op účet, zkuste se přihlásit, jestli jste si jistí že jste se přihlásili, tak jsme poslali dotaz adminovi o vaší prosbě o op účet, admi jej musí uznat, až potom budete mít plné využití op účtu")
    console.log("špatné heslo, nebo nemáte op účet, zkuste se přihlásit, jestli jste si jistí že jste se přihlásili, tak jsme poslali dotaz adminovi o vaší prosbě o op účet, admi jej musí uznat, až potom budete mít plné využití op účtu");

  }

})
