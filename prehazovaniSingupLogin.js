


const button__singUp__true = document.getElementById("Bsingup__true")
const button__logIn__true = document.getElementById("Blogin__true")
const button__forgetPassword = document.getElementById("Bforgetpassword")
const button__logIn__false = document.getElementById("Blogin__false")
const button__singUP__false = document.getElementById("Bsingup__false")
const button__strongpassword = document.getElementById("strongpassword")
const button__overitemail = document.getElementById("Boveritemail")
const button__zmenitheslo = document.getElementById("button__zmenitheslo")
const button__zpet = document.getElementById("button__zpet")


button__zmenitheslo.addEventListener("click", () => {

    zkontrolovatheslokzapomenutemuheslu()

})
button__zpet.addEventListener("click", () => {

  zpet()

})
button__overitemail.addEventListener("click", () => {

  buttonoveritemail()

})
button__singUp__true.addEventListener("click", () => {

  buttonsingUp__true();

})
button__logIn__true.addEventListener("click", () => {

  buttonLogIn__true()

})
button__forgetPassword.addEventListener("click", () => {

  buttonforgetPassword()

})
button__logIn__false.addEventListener("click", () => {

  buttonlogIn__false()

})
button__singUP__false.addEventListener("click", () => {

  buttonsingUP__false()

})
button__strongpassword.addEventListener("click", () => {

  buttonstrongpassword();

})
