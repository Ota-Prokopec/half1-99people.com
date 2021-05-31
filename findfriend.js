


document.getElementById("findfriend").addEventListener("input", () => {

  const value = document.getElementById("findfriend").value

  socket.emit("najdipritele", value, userdata.name)

  const wrap = document.getElementById("wrapforcontact")
  wrap.innerHTML = ""


})
socket.on("pritelnalezen", (data) => {

  console.log(data);

  if (data.length !== 0) {

        console.log(data);

        zapisfriend(data);

        zapisInformaceOmymPritelovi(data)




  }
  else {



  }

})
