


function overeniemail(value) {

  socket.emit("emailcode", value, userdata.name, userdata.password, userdata.username)

  socket.on("emailcodeisright", (data) => {

    if (data) {

      const password = document.getElementById("Spassword")
      const name = document.getElementById("Sname")

      login({name:name, password:password})

    }

  })

}
