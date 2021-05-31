


const style = {
  zakladnistranka: "grid"
}
function buttonsingUp__true() {



const name = document.getElementById("Sname").value
const password = document.getElementById("Spassword").value
const secondpassword = document.getElementById("Ssecondpassword").value
const username = document.getElementById("Susername").value

singUp({name:name, password:password, secondpassword:secondpassword, username:username });

//spolecnefunkce();
socket.on("CanIHaveName", (data) => {

  if (data) {

    emailzobrazeni();

  }
  else {

    console.log("you are loggined or you tried to log in with someone else's email");

  }

})

}

function buttonLogIn__true() {

  const name = document.getElementById("Lname").value
  const password = document.getElementById("Lpassword").value

login({name:name, password:password});


//spolecnefunkce();

}



function zkontrolovatheslokzapomenutemuheslu() {

  kontrolanovehozapomenutehohesla__noveho()

}



function buttonforgetPassword() {

  forgetpassword();

}

function buttonstrongpassword() {

  strongpassword();

}

function buttonlogIn__false() {

  strankaSingupLogin(2)
  spolecnefunkce();

}

function buttonsingUP__false() {

  strankaSingupLogin(1)
  spolecnefunkce();

}
function buttonoveritemail() {

  const text = document.getElementById("emailcode").value

  overeniemail(text)

}




function spolecnefunkce() {

  const sname = document.getElementById("Sname")
  const spassword = document.getElementById("Spassword")
  const ssecondpassword = document.getElementById("Ssecondpassword")
  const lname = document.getElementById("Lname")
  const lpassword = document.getElementById("Spassword")
  sname.value = ""
  ssecondpassword.value = ""
  spassword.value = ""
  lpassword.value = ""
  lname.value = ""

}
