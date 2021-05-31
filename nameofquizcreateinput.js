


document.getElementById("nameofquizcreate")
.addEventListener("input", () => {

  const value = document.getElementById("nameofquizcreate").value

  socket.emit("muzumittentonazevquiz__input", {
    name:userdata.name,
    value:value
  })

})
socket.on("muzumittentonazevquiz__color", (data) => {

  const element = document.getElementById("nameofquizcreate")

  if (data) {

    element.style.background = "lightgreen"

  }
  else {

    element.style.background = "red"

  }

})
