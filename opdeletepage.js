


function clickForDeleteFriend(element) {

         element.addEventListener("click", () => {

           zobrazeni(16)

           const email = element.getAttribute("email");

           datadelte(email)

           userdata.friend = email

         })

}







function datadelte(email) {

  socket.emit("chciInformace", email);

}





socket.on("posilaminformaceo", (data) => {

  writedatatodeleteacount(data)

})
