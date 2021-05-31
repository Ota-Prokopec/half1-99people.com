


socket.on("userdata", (data) => {

  for (const [key, value] of Object.entries(data)) {

    userdata[key] = value

  }

})

function getuserdata(data) {

  for (const [key, value] of Object.entries(data)) {

    userdata[key] = value

  }

}
