


function login({name, password}) {

  console.log(name, password);

  socket.emit("login", {name:name,
                        password:password})

}


socket.on("isPasswordRight", (data) => {

  if (data) {

    mainpage();
    upozorneni()

  }
  else {

            error("jméno nebo heslo není správné")

  }

})
