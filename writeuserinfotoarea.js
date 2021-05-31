

document.getElementById("middledownMyacount__change__myinfo").addEventListener("click", () => {

  const name = "$MyAcount$"

  socket.emit("showUserInfo", name, userdata.name)

  //console.log("click");

})
socket.on("sendinguserinfo", (data) => {

  //console.log(data);

  if (data.my) {

    //this is my user info
    napisdoinputuuserdata(true, data)

  }
  else {

    //this is someone else's info
    writedetailinformationFriend__zapis(data)

  }

})
function napisdoinputuuserdata(value, data) {






  console.log(data);

  const pohlavi = document.getElementById("pohlavi__input")
  const stari = document.getElementById("stari__input")
  const living = document.getElementById("living__input")
  const school = document.getElementById("skola__input")

  if (value) {

     pohlavi.value = data.pohlavi
     stari.value = data.stari
     living.value = data.living
     school.value = data.school

  }
  else {



  }

}
