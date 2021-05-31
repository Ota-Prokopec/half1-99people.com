


document.getElementById("pridatpritele__MyFriend")
.addEventListener("click", () => {

  const button = document.getElementById("pridatpritele__MyFriend")

  const friend = userdata.friend;

  console.log(friend);

        const odebratpridat = button.getAttribute("friend")
        console.log(odebratpridat);

      styleButtonPridataPritele(JSON.parse(odebratpridat))

  socket.emit("pratelstvi", {value:JSON.parse(odebratpridat), name:friend}, userdata.name, userdata.password)

})
function posliemailfropridatapritele(email) {

  //userdata.friend = email;

}





socket.on("zmenapratelstvi", (data) => {

  writeMyOwnFriendToWrap()

})
