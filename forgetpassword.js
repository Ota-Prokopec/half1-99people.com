


function forgetpassword(name) {

  const email = document.getElementById("Lname").value



      console.log(email);



  socket.emit("forgetpassword", email)

  zobrazeni(4)



}


function kontrolanovehozapomenutehohesla__noveho() {

  console.log("ahoj");

  const name = document.getElementById("Lname").value

  const code = document.getElementById("zmenaheslaemailcode").value
  const noveheslo = document.getElementById("zmenaheslanoveheslo").value

  socket.emit("kontrolanovehozapomenutehohesla__noveho", {name:name, code:code, password:  noveheslo})

}
